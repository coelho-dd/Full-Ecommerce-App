from django.db import models

class User(models.Model):
    USER_TYPE_CHOICES = [
        ('admin', 'Admin'),
        ('customer', 'Customer')
    ]

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=255, unique=True, null=False)
    password = models.CharField(max_length=255, null=False)
    user_type = models.CharField(max_length=50, choices=USER_TYPE_CHOICES, null=False)

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
    update_at = models.DateTimeField(auto_now=True)

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
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, null=False)

    def __str__(self):
        return f'Order {self.id} by {self.user_id}'
    
    class Meta:
        db_table = 'Order'


class OrderItem(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey('Order', on_delete=models.CASCADE)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, null=False)

    def __str__(self):
        return f'OrderItem {self.id} for Order {self.order_id}'
    
    class Meta:
        db_table = 'OrderItem'


class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return f'Cart {self.id} for User {self.user_id}'
    
    class Meta:
        db_table = 'Cart'


class CartItem(models.Model):
    id = models.AutoField(primary_key=True)
    cart_id = models.ForeignKey('Cart', on_delete=models.CASCADE)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)

    def __str__(self):
        return f'CartItem {self.id} - Product {self.product.id} in Cart {self.cart.id}'
    
    class Meta:
        db_table = 'CartItem'


