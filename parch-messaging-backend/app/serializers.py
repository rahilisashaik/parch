from rest_framework import serializers
from .models import File, Comment, User

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = "__all__"

    def validate_file(self, value):
        if not value.name.endswith('.pdf'):
            raise serializers.ValidationError("Only PDF files are allowed.") # only pdfs for now
        return value


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

    def validate_file_id(self, value):
        if not File.objects.filter(id=value).exists():
            raise serializers.ValidationError("File not found")
        return value

    def validate_user_id(self, value):
        if not User.objects.filter(id=value).exists():
            raise serializers.ValidationError("User not found")
        return value
    
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
