from rest_framework.routers import DefaultRouter
from ..views import UserViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet, CartViewSet, CartItemViewSet, RegisterView, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path


router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)
router.register(r'carts', CartViewSet)
router.register(r'cart-items', CartItemViewSet)

urlpatterns = [
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]

urlpatterns += router.urls