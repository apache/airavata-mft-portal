from django.shortcuts import render
import json
# Create your views here.


def storage(request):
    # TODO: grpc calls to backend
    storage_json = [{"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "localhost", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "scp1", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020", "host": "scp2", "port": 22, "user": "root"},
                    {"storageId": "ssh-storage1", "name": "ssh-storage1", "size": "15GB", "occupied": "10GB", "lastModified":"26, March 2020"}]

    return render(request, 'storage.html', {'bundle_name': 'storage',
                                            'data': json.dumps(storage_json),
                                            'title': 'Storage Unit'})


def resources(request, storage_id):
    resource_json = [{"resourceId": "Spring project", "name": "Spring project", "size": "12 GB", "lastModified": "Jan 15, 2020"},
                     {"resourceId": "Trial", "name": "Trial", "size": "12 GB", "lastModified": "Jan 15, 2020"},
                     {"resourceId": "New", "name": "New", "size": "12 GB", "lastModified": "Jan 15, 2020"},
                     {"resourceId": "Random testing", "name": "Random testing", "size": "12 GB", "lastModified": "Jan 15, 2020"}]
    return render(request, 'resources.html', {'bundle_name': 'resources',
                                              'data': json.dumps(resource_json),
                                              'title': 'Storage Unit > ' + storage_id})

