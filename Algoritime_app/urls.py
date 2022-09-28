#Urls de la aplicación

from django.urls import path

#Importamos las vistas
from Algoritime_app.views import app2, app_desarrollo, equipo, politicas, recursos, sugerencias, tools,app1,gracias #blog,post,

urlpatterns = [
    path('', tools, name='tools'),
    path('binario_decimal', app1, name='binario_decimal'),
    path('decimal_octal', app2, name='decimal_octal'),
    path('app_desarrollo', app_desarrollo, name='app_desarrollo'),
    #path('blog',blog,name='blog'),
    #path('blog/articulo/<post_id>/',post, name='articulo'),
    path('agradecimientos',gracias,name='agradecimientos'),
    path('equipo',equipo,name='equipo'),
    path('politicas_privacidad',politicas,name='politicas'),
    path('recursos',recursos,name='recursos'),
    path('sugerencias',sugerencias,name='sugerencias'),
]

