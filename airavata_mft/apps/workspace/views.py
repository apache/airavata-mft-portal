from django.shortcuts import render
import json
# Create your views here.


def storage(request):
    # TODO: grpc calls to backend
    storage_json = [{"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"}]

    return render(request, 'storage.html', {'data': json.dumps(storage_json)})

