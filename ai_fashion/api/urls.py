from django.urls import path
from .views import GenerateImageView, HistoryView

urlpatterns = [
    path('generate/', GenerateImageView.as_view(), name='generate_image'),
    path('history/', HistoryView.as_view(), name='history'),
]
