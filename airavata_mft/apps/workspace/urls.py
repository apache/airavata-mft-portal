from . import views
from django.urls import path, re_path

urlpatterns = [
    path('storage/', views.storage),
    re_path(r'^storage/ssh-storage1', views.resource) #TODO: correct this
]