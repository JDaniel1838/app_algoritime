from django.shortcuts import render,HttpResponse
from django.core.paginator import Paginator
from django.views.generic import ListView


from .models import Post

#---TOOLS---
def tools(request):
    return render(request,'Algoritime_app/tools.html')

def app1(request):
    return render(request,'Algoritime_app/binario_decimal.html')

def app2(request):
    return render(request,'Algoritime_app/decimal_octal.html')

def app_desarrollo(request):
    return render(request,'Algoritime_app/app_en_desarrollo.html')


#---BLOG---
def blog(request):
    posts = Post.objects.all()
    data = {'posts': posts}
    return render(request,'Algoritime_app/blog.html',data)

def post(request,post_id):
    articulo = Post.objects.get(id=post_id)
    art = {'articulo':articulo}
    return render(request,'Algoritime_app/articulo.html',art)

#---FOOTER
def gracias(request):
    return render(request,'Algoritime_app/agradecimientos.html')



def equipo(request):
    return render(request,'Algoritime_app/equipo_desarrollo.html')

def politicas(request):
    return render(request,'Algoritime_app/politicas.html')

def recursos(request):
    return render(request,'Algoritime_app/recursos.html')

def sugerencias(request):
    return render(request,'Algoritime_app/sugerencias.html')