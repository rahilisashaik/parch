from rest_framework.serializers import ModelSerializer
from .models import File, Comment, User

class FileSerializer(ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"