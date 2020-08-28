from . import views
from django.conf.urls import url

app_name='workspace'
urlpatterns = [
    url(r'^storage/$', views.storage,name="storages"),
    url(r'^transfers/$', views.transfers,name="resources"),
    url(r'^storage/filetransfer/$', views.filetransfer,name="file-transfer"),
    url(r'^storage/newunit/$', views.newunit,name="new-unit")
]