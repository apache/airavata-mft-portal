from django.shortcuts import render

# Create your views here.
def storage(request):
    return render(request, 'storage.html', {})