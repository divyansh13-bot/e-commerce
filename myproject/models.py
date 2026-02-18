from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class LoginData(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to="products/")

    def __str__(self):
        return self.name