from rest_framework import serializers
from .models import File, Comment, User

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        if User.objects.filter(email=validated_data['email']).exists():
            raise serializers.ValidationError("User with this email already exists")
        else:
            user = User.objects.create(**validated_data)
            return user
    
    def remove(self, user_id):
        try:
            user = User.objects.get(id=user_id)
            user.delete()
            return user
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found")
