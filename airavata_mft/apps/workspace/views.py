from django.shortcuts import render
import json
# Create your views here.


def storage(request):
    # TODO: grpc calls to backend
    storage_json = [{"storageId": "ssh-storage1", "name": "Source 1","type": "SCP","owner": "Akhil", "lastModified":"01/15/2020"},
                    {"storageId": "ssh-storage2", "name": "Source 2","type": "SCP", "owner": "vivek","lastModified":"01/16/2020"},
                    {"storageId": "ssh-storage3", "name": "Destination 1","type": "S3","owner": "Dimuthu", "lastModified":"02/15/2020"},
                    {"storageId": "ssh-storage4", "name": "Destination 2","type": "SCP","owner": "suresh", "lastModified":"01/15/2019"}]

    return render(request, 'storage.html', {'bundle_name': 'storage',
                                            'data': json.dumps(storage_json),
                                            'title': 'Storage Unit'})


def transfers(request):
    resource_json = [{"transferId": "1", "Initialstorage": "Source 1", "Finalstorage": "Destination 1","Size":"10Mb","FileName":"image.jpeg","TransferDate": "01/15/2020"},
                     {"transferId": "2", "Initialstorage": "Source 2", "Finalstorage": "Destination 2", "Size":"1Mb","FileName":"abc.py","TransferDate": "02/15/2020"}]
    return render(request, 'transfers.html', {'bundle_name': 'transfers',
                                              'data': json.dumps(resource_json),
                                              'title':  'Transfers'})

def filetransfer(request):
    initial_storage_json = [{
  "file1": "image.jpeg",
  "file2": "file2.jpeg",
  "file3": "file3.jpeg",
  "dir1": {
    "file3": "image2.jpeg",
    "file4": "image4.jpeg",
    "dire2": {
      "file4": "file4.py",
      "file5": "file6.py"
    }
  }
}],
    final_storage_json = [{
  "file5": "image.jpeg",
  "file6": "file11.jpeg",
  "file7": "file12.jpeg",
  "dir8": {
    "file9": "image2.jpeg",
    "file10": "image4.jpeg",
    "dire9": {
      "file12": "file4.py",
      "file15": "file6.py"
    }
  }
}]
    return render(request,'filetransfer.html',{'bundle_name':'filetransfer',
                                                'initial_data':json.dumps(initial_storage_json),
                                                'final_data':json.dumps(final_storage_json),
                                                'title':'filetransfer'})


def newunit(request):
    
    return render(request,'newstorage.html',{'bundle_name':'newunit'})
