from huggingface_hub import InferenceClient
from PIL import Image
import io

API_KEY = "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"

class AIHandler:
    def __init__(self):
        # Initialize the Hugging Face Image Generator model with InferenceClient
        self.image_model_id = "MaziyarPanahi/sljm-bag-stable-diffusion-xl-base-1.0"
        self.inference_client = InferenceClient(model=self.image_model_id, token=API_KEY)

    def generate_image(self, user_prompt):
        """
        Generate an image using the Hugging Face Image Generator model.
        """
        try:
            # Step 1: Generate the image using the user-provided prompt
            image = self.inference_client.text_to_image(user_prompt)

            # Save the generated image to a file
            image.save("generated_image.png")

            # Return success response
            return "Image generated and saved successfully!", None
        except Exception as e:
            # Handle and return any errors
            return None, f"An error occurred: {e}"
