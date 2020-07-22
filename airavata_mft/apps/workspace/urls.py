from . import views
from django.conf.urls import url

app_name='workspace'
urlpatterns = [
    url(r'^storage/$', views.storage,name="storages"),
    url(r'^storage/(?P<storage_id>[^/]+)/$', views.resources,name="resources")
]