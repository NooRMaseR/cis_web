from django_bolt.testing import TestClient
from django.test import TestCase
from .api import app

# Create your tests here.
class TestAPI(TestCase):
    def test_slides(self):
        with TestClient(app) as client:
            res = client.get("/slides/")
            print(res.json())
            self.assertEqual(res.status_code, 200)