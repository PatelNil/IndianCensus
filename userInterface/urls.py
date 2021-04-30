from django.conf.urls import url
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'userInterface'
urlpatterns = [
    url('index', views.index, name='index'),
    url('^about', views.about, name='about'),
    url('^division', views.division, name='division'),
    url('^blog', views.blog, name='blog'),
    url('^censusForm', views.censusForm, name='censusForm'),
    url('^login', views.loginPage, name="loginPage"),
    url('^logout', views.logoutPage, name="logoutPage"),
    url('^signup', views.signup, name='signup'),
    url('^get_all_data', views.get_all_data, name='all_data'),
    url('^submission', views.submission, name='submission'),
    url('^visual', views.visual, name='visual'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
