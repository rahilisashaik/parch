from django.db import models
from django.contrib.auth.models import User

class File(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    url = models.URLField() 
    uploaded_at = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    file_id = models.IntegerField()  # Explicitly using file_id
    user_id = models.IntegerField()  
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
    
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username

