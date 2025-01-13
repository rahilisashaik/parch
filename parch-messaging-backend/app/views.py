from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import File, Comment, User
from .serializers import FileSerializer, CommentSerializer, UserSerializer

class FileListCreateView(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer

    def post(self, request, *args, **kwargs):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

