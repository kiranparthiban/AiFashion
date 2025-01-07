from rest_framework import serializers
from .models import PromptHistory

class PromptHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PromptHistory
        fields = '__all__'
