from django.shortcuts import render
import json
# Create your views here.


def storage(request):
    # TODO: grpc calls to backend
    storage_json = [{"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "localhost", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "scp1", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "scp2", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"}]

    return render(request, 'storage.html', {'data': json.dumps(storage_json)})


def resource(request):
    resource_json = [{"resourceId": "resource1", "name": "resource1"},
                     {"resourceId": "resource1", "name": "resource1"},
                     {"resourceId": "resource1", "name": "resource1"},
                     {"resourceId": "resource1", "name": "resource1"}]
    return render(request, 'resources.html', {'data': json.dumps(resource_json)})

