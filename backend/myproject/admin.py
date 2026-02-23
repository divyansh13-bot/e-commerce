from django.contrib import admin
from .models import LoginData
from .models import Product

# Register your models here.
admin.site.register(LoginData)
admin.site.register(Product)