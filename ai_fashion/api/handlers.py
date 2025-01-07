from huggingface_hub import InferenceClient
from PIL import Image
import base64
import io

API_KEY = "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"

class AIHandler:
    def __init__(self):
        # Initialize the Hugging Face Image Generator model with InferenceClient
        self.image_model_id = "MaziyarPanahi/sljm-bag-stable-diffusion-xl-base-1.0"
        self.inference_client = InferenceClient(model=self.image_model_id, token=API_KEY)

    def generate_image(self, user_prompt):
        """
        Generate an image using the Hugging Face Image Generator model and return it as a Base64 string.
        """
        try:
            # Generate the image using the user-provided prompt
            image = self.inference_client.text_to_image(user_prompt)

            # Convert the PIL image to a Base64 string
            buffered = io.BytesIO()
            image.save(buffered, format="PNG")  # Save as PNG format
            img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
            return img_str, None
        except Exception as e:
            return None, str(e)
