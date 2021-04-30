from django.shortcuts import render,redirect
import pymongo
# Create your views here.
from django.contrib.auth.forms import UserCreationForm
from .forms import NewUserForm
from django.contrib import messages
from django.contrib.messages import get_messages
from django.contrib.auth.decorators import login_required
from .models import StatePopulation

def index(request):
    return render(request, 'userInterface/index.html')

from django.contrib.auth import authenticate, login , logout
def loginPage(request):
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request,"User login successful")
            return redirect('index.html')
        else:
            return render(request, 'userInterface/login.html')
    else:
        return render(request, 'userInterface/login.html')

def signup(request):
    form = NewUserForm()
    if request.method == 'POST':
        form = NewUserForm(request.POST)
        if form.is_valid():
            form.save()
            user = form.cleaned_data['username']
            messages.success(request, user+" was created successfully")
            return redirect('login.html')
    icons = ['account','email','lock','lock-outline']
    data = zip(form,icons)
    context ={'form': data,'error':form}
    return render(request, 'userInterface/signup.html',context)
def logoutPage(request):
    logout(request)
    storage = get_messages(request)
    for message in storage:
        del(message)
    return redirect('userInterface:index')
def about(request):
    return render(request, 'userInterface/about.html')


def division(request):
    return render(request, 'userInterface/division.html')


def blog(request):
    return render(request, 'userInterface/blog.html')

def blogsingle(request):
    return render(request, 'userInterface/blog-single.html')

@login_required(login_url="userInterface:loginPage")
def censusForm(request):
    return render(request, "userInterface/censusForm.html")

@login_required(login_url="userInterface:loginPage")
def submission(request):
    data = {'state': request.POST['state'],
            'city': request.POST['city'],
            'taluka': request.POST['taluka'],
            'town': request.POST['town'],
            'pincode': request.POST['pincode'],
            'adhar': request.POST['adhar'],
            'address': request.POST['address'],
            'floor': request.POST['floor'],
            'wall': request.POST['wall'],
            'roof': request.POST['roof'],
            'useofhouse': request.POST['useofhouse'],
            'totalperson': request.POST['totalperson'],
            'headofhouse': request.POST['headofhouse'],
            'headgender': request.POST['headgender'],
            'cast': request.POST['cast'],
            'ownership': request.POST['ownership'],
            'dwellingrooms': request.POST['dwellingrooms'],
            'marriedcoupleno': request.POST['marriedcoupleno'],
            'sourceofwater': request.POST['sourceofwater'],
            'typeoflatrine': request.POST['typeoflatrine'],
            'kitchen': request.POST['kitchen'],
            'fuel': request.POST['fuel'],
            'phone': request.POST['phone'],
            'vehicle': request.POST['vehicle'],
            'drikingwateravailability': request.POST['drikingwateravailability'],
            'sourceoflight': request.POST['sourceoflight'],
            'wastewateroutlet': request.POST['wastewateroutlet'],
            'bathing': request.POST['bathing'],
            'television': request.POST['television'],
            'pc': request.POST['pc'],
            'internet': request.POST['internet'],
            'fourwheel': request.POST['fourwheel'],
            'cereal': request.POST['cereal'],
            }

    client = pymongo.MongoClient(
        'mongodb://team-veteren:NILniki2317@census-data.provendb.io/census-data?ssl=true')
    database = client['census-data']
    posts = database.data
    post_id = posts.insert_one(data).inserted_id
    # for st,pop in statePop.items():
    #     if data['state']==st:
    #         statePop[st] +=100
    st = StatePopulation.objects.get(state=data['state'])
    st.population +=1
    st.save()
    response = posts.find_one({"_id": post_id})
    print(response)
    return render(request, 'userInterface/index.html')

    # deu7cFgr8o1T1wxIlv2c61uowpnVxQ9D

@login_required(login_url="userInterface:loginPage")
def get_all_data(request):
    client = pymongo.MongoClient(
        'mongodb://team-veteren:NILniki2317@census-data.provendb.io/census-data?ssl=true')
    database = client['census-data']
    posts = database.data
    all_data = []
    for post in posts.find():
        
        all_data.append(post)
    return render(request, 'userInterface/all_data.html', {'data': all_data})


def visual(request):
    context = StatePopulation.objects.all()
    return render(request, 'userInterface/visual2.html',{"context":context})

