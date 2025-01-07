from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PromptHistory
from .serializers import PromptHistorySerializer
from .handlers import AIHandler

ai_handler = AIHandler()

class GenerateImageView(APIView):
    def post(self, request):
        prompt = request.data.get('prompt', None)  # Get prompt from request body
        if not prompt:
            return Response({"error": "Prompt is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        generated_image, error = ai_handler.generate_image(prompt)
        if error:
            return Response({"error": error}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # Save to DB
        prompt_history = PromptHistory.objects.create(prompt=prompt, image_url=generated_image)
        prompt_history.save()
        
        return Response({"prompt_id": prompt_history.prompt_id, "image_url": generated_image}, status=status.HTTP_200_OK)

class HistoryView(APIView):
    def get(self, request):
        n = int(request.query_params.get('n', 10))
        history = PromptHistory.objects.all().order_by('-prompt_id')[:n]
        serializer = PromptHistorySerializer(history, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request):
        prompt_id = request.data.get('prompt_id', None)  # Get prompt_id from request body
        if not prompt_id:
            return Response({"error": "prompt_id is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            prompt_history = PromptHistory.objects.get(prompt_id=prompt_id)
            prompt_history.delete()
            return Response({"message": "Prompt deleted successfully"}, status=status.HTTP_200_OK)
        except PromptHistory.DoesNotExist:
            return Response({"error": "Prompt not found"}, status=status.HTTP_404_NOT_FOUND)
