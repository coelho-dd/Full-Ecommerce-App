from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('O usuário deve ter um email válido')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email=email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = [
        ('admin', 'Admin'),
        ('customer', 'Customer')
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=255, unique=True, null=False)
    user_type = models.CharField(max_length=50, choices=USER_TYPE_CHOICES, null=False)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True
    )

    objects = UserManager()

    USERNAME_FIELDS = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name
    
    class Meta: 
        db_table = 'User'


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    stock = models.IntegerField(null=False)
    image_url = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __srt__(self):
        return self.name
    
    class Meta:
        db_table = 'Product'


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('canceled', 'Canceled')
    ]

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, null=False)

    def __str__(self):
        return f'Order {self.id} by {self.user_id}'
    
    class Meta:
        db_table = 'Order'


class OrderItem(models.Model):
    id = models.AutoField(primary_key=True)
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, null=False)

    def __str__(self):
        return f'OrderItem {self.id} for Order {self.order_id}'
    
    class Meta:
        db_table = 'OrderItem'


class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return f'Cart {self.id} for User {self.user_id}'
    
    class Meta:
        db_table = 'Cart'


class CartItem(models.Model):
    id = models.AutoField(primary_key=True)
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)

    def __str__(self):
        return f'CartItem {self.id} - Product {self.product.id} in Cart {self.cart.id}'
    
    class Meta:
        db_table = 'CartItem'


