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
        user = User.objects.create(**validated_data)
        return user
    
    def remove(self, validated_data):
        user_id = validated_data.get('id')
        try:
            user = User.objects.get(id=user_id)
            user.delete()
            return user
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found")
