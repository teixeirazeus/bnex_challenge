from django.test import TestCase
from .models import Product


class ProductModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Product.objects.create(
            name="Test Product", description="This is a test product", price=10.99
        )

    def test_name_label(self):
        product = Product.objects.get(id=1)
        field_label = product._meta.get_field("name").verbose_name
        self.assertEqual(field_label, "name")

    def test_description_label(self):
        product = Product.objects.get(id=1)
        field_label = product._meta.get_field("description").verbose_name
        self.assertEqual(field_label, "description")

    def test_price_label(self):
        product = Product.objects.get(id=1)
        field_label = product._meta.get_field("price").verbose_name
        self.assertEqual(field_label, "price")

    def test_name_max_length(self):
        product = Product.objects.get(id=1)
        max_length = product._meta.get_field("name").max_length
        self.assertEqual(max_length, 255)

    def test_object_name_is_name(self):
        product = Product.objects.get(id=1)
        expected_object_name = product.name
        self.assertEqual(str(product), expected_object_name)

    def test_price_decimal_places(self):
        product = Product.objects.get(id=1)
        decimal_places = product._meta.get_field("price").decimal_places
        self.assertEqual(decimal_places, 2)
