from django.urls import path
from .views import ProductListCreate, ProductDetailUpdateDelete

urlpatterns = [
    path("products/", ProductListCreate.as_view(), name="produto-list-create"),
    path(
        "products/<str:pk>/",
        ProductDetailUpdateDelete.as_view(),
        name="produto-detail-update-delete",
    ),
]
