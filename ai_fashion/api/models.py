from django.db import models

class PromptHistory(models.Model):
    prompt_id = models.AutoField(primary_key=True)
    prompt = models.TextField()
    image_url = models.TextField()

    def __str__(self):
        return f"Prompt {self.prompt_id}: {self.prompt}"
