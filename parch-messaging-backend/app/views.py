import boto3
from django.conf import settings
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import File, Comment, User
from .serializers import FileSerializer, CommentSerializer, UserSerializer
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings

class FileListCreateView(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        file_name = request.data.get('name')
        if not file_name:
            file_name = file_obj.name 

        s3 = boto3.client(
            's3',
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_S3_REGION_NAME
        )
        bucket_name = settings.AWS_STORAGE_BUCKET_NAME
        print("Bucket Name:", bucket_name)
        s3_key = f"uploads/{file_obj.name}"
        print("S3 Key:", s3_key)

        try:
            s3.upload_fileobj(
                file_obj,
                bucket_name,
                s3_key,
                ExtraArgs={
                    "ContentType": "application/pdf",  # Explicitly set the content type for PDFs
                    "ContentDisposition": "inline",    # Ensure the file is displayed inline
                },
            )

            s3_url = f"https://{bucket_name}.s3.{settings.AWS_S3_REGION_NAME}.amazonaws.com/{s3_key}"

            file_instance = File.objects.create(
                name=file_name,
                url=s3_url
            )
            print("File Instance:", file_instance)

            return Response(FileSerializer(file_instance).data, status=status.HTTP_201_CREATED)

        except Exception as e:
            print("Exception:", e)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class FileRemoveView(generics.DestroyAPIView):
    def post(self, request):
        file_id = request.data.get('id')

        if not file_id:
            return Response({"error": "File ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            FileSerializer.remove(file_id)
            return Response({"message": "File removed successfully"}, status=status.HTTP_200_OK)
        except File.DoesNotExist:
            return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        file_id = self.request.query_params.get('fileId')
        user_id = self.request.query_params.get('userId')
        print(user_id)
        if file_id:
            return Comment.objects.filter(file_id=file_id)
        if user_id:
            return Comment.objects.filter(user_id=user_id)
        
        return Comment.objects.all()

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRemoveView(generics.DestroyAPIView):
    def post(self, request):
        user_id = request.data.get('id')
        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            UserSerializer.remove(user_id)
            return Response({"message": "User removed successfully"}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

FORGE_CLIENT_ID = "itPbEK3OMlxz45fxNucwxrSBUGgd9u9SFEQp7bKqiX4cri1J"
FORGE_CLIENT_SECRET = "W6y22JhKnIIAI2AAaPGoZIrF42wYLjM0LYYNGTfLczUE9al1Zq1zWGbDDRkZi0N4"
FORGE_AUTH_URL = "https://developer.api.autodesk.com/authentication/v1/authenticate"
FORGE_HUB_URL = "https://developer.api.autodesk.com/data/v1/projects"

class ForgeAuthView(APIView):
    """Get Autodesk Forge OAuth Token"""
    def get(self, request):
        payload = {
            "client_id": FORGE_CLIENT_ID,
            "client_secret": FORGE_CLIENT_SECRET,
            "grant_type": "client_credentials",
            "scope": "data:read data:write"
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        
        response = requests.post(FORGE_AUTH_URL, data=payload, headers=headers)

        if response.status_code == 200:
            return Response(response.json())
        return Response({"error": "Failed to authenticate"}, status=response.status_code)


class GetFileURNView(APIView):
    """Retrieve Forge URN for a file in Autodesk Docs"""
    def get(self, request, project_id, file_id):
        token_response = ForgeAuthView().get(request).data
        print("rahil",token_response)
        token = token_response["access_token"]

        url = f"{FORGE_HUB_URL}/b.{project_id}/items/{file_id}"
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            item_data = response.json()
            urn = item_data["data"]["relationships"]["derivatives"]["data"]["id"]
            return Response({"urn": urn})

        return Response({"error": "Failed to retrieve URN"}, status=response.status_code)
