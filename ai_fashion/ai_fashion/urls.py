from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

import os

urlpatterns = [
    # Admin panel
    path('admin/', admin.site.urls),

    # API routes
    path('api/', include('api.urls')),

    # Serve React frontend for root URL and unmatched routes
    # re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),  # React's index.html
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, '/../fashion_frontend/'))
