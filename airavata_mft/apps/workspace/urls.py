from . import views
from django.urls import path

urlpatterns = [
    path('storage/', views.storage)
]