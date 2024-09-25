from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from store.models import Product, User, Order, OrderItem, Cart, CartItem

class UserSerializer(serializers.ModelSerializer):    
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'user_type']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username = serializers.CharField(required=False, allow_blank=True)

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            try:
                user = User.objects.get(email=email)
                if not user.check_password(password):
                    raise serializers.ValidationError("Senha incorreta")
            except User.DoesNotExist:
                raise serializers.ValidationError("Usuário não encontrado")

            attrs['user'] = user
            return super().validate(attrs)
        else:
            raise serializers.ValidationError("Credenciais não fornecidas")

        
class CustomLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()