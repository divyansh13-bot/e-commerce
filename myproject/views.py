from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import LoginData
from .models import Product
from .serializer import ProductSerializer
from .serializer import LoginDataSerializer

def index(request):
    return JsonResponse({"message": "API working"})


# REGISTRATION API

@api_view(['POST'])
def save_login_data(request):
    print(request.data)  # 👈 ADD THIS

    email = request.data.get('email')
    phone = request.data.get('phone')
    password = request.data.get('password')

    LoginData.objects.create(
        email=email,
        phone=phone,
        password=password
    )

    return Response({"message": "Login data saved successfully"})

@api_view(["POST"])
def login_view(request):
    serializer = LoginDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Login data saved successfully"})
    return Response(serializer.errors, status=400)


def get_product(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "image": product.image.url if product.image else ""
        })
    except Product.DoesNotExist:
        return JsonResponse(
            {"error": "Product not found"},
            status=404
        )
    

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)