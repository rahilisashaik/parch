from django.urls import path
from .views import FileListCreateView, CommentListCreateView, UserListCreateView, UserRemoveView

urlpatterns = [
    path('files/', FileListCreateView.as_view(), name='file-list-create'),
    path('comments/', CommentListCreateView.as_view(), name='comment-list-create'),
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('user/remove/', UserRemoveView.as_view(), name='user-remove'),
    path('comments/<int:fileId>/', CommentListCreateView.as_view(), name='comment-list-by-file-create'),
    path('comments/<int:userId>/', CommentListCreateView.as_view(), name='comment-list-by-user-create'),
]
