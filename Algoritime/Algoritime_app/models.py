from django.contrib.auth.models import User
from django.db import models


# Modelos de Base de Datos de BLOG
class Categoria(models.Model):
    titulo = models.CharField(max_length=120)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    class META:
        verbose_name='categoria'
        verbose_name_plural='categorias'

    def __str__(self):
        return self.titulo

class Post(models.Model):
    titulo=models.CharField(max_length=70)
    descripcion = models.CharField(max_length=200)
    contenido=models.CharField(max_length=3000)
    imagen=models.ImageField(upload_to='blog',null=True)

    #relación muchos a uno entre usuarios y post
    #Si eliminas el autor, eliminas todos los post en el blog
    autor=models.ForeignKey(User,on_delete=models.CASCADE)

    #Relacion varios a varios en entre post y categorías
    categoria= models.ManyToManyField(Categoria)

    #Cuando se creo y actualizo el blog
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)


    class META:
        verbose_name='Articulo'
        verbose_name_prural='Articulos'

    def __str__(self):
        return self.titulo

