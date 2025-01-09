import React, { useState } from "react";

const GenerateImage = ({ baseUrl }) => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(
    "/converted_image.png" // Placeholder image
  );
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  const generateImage = async () => {
    setStatus("Generating response...");
    setResponse(""); // Clear previous response

    try {
      const res = await fetch(`${baseUrl}/generate/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus("Successfully generated!");
        setGeneratedImage(`data:image/png;base64,${result.image_url}`);
      } else {
        setStatus("Error incurred");
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus("Error incurred");
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="generate-image-container">
      <div className="generated-image-box">
        <img src={generatedImage} alt="Generated" />
      </div>
      <textarea
        rows="4"
        placeholder="Enter your fashion design prompt here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="prompt-bar"
      ></textarea>
      <button onClick={generateImage} className="generate-button">
        Generate using AI Enhanced Prompt Engine
      </button>
      {/* Status Message */}
      {status && <div className="status-message">{status}</div>}
    </div>
  );
};

export default GenerateImage;




