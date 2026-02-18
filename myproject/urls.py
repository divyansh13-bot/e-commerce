from django.urls import path
from . import views
from django.urls import path
from .views import save_login_data
from .views import get_product
from .views import product_list, product_detail

urlpatterns = [
    path("api/login/", save_login_data, name="save_login_data"),
    path("product/<int:ip>/", get_product),
    path('products/', product_list),
    path('products/<int:pk>/', product_detail),
]


