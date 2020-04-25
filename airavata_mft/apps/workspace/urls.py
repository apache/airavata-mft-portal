from . import views
from django.conf.urls import url

urlpatterns = [
    url(r'^storage/$', views.storage),
    url(r'^storage/(?P<storage_id>[^/]+)/$', views.resources)
]