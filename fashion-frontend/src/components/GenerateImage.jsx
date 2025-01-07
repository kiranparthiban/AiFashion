import React, { useState } from "react";

const GenerateImage = ({ baseUrl }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const generateImage = async () => {
    setResponse("Generating image...");
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
        setResponse(
          <div>
            <strong>Prompt ID:</strong> {result.prompt_id}
            <br />
            <strong>Image:</strong>
            <br />
            <img
              src={`data:image/png;base64,${result.image_url}`}
              alt="Generated"
              style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
            />
          </div>
        );
      } else {
        setResponse(
          <div>
            <strong>Error:</strong> {result.error}
          </div>
        );
      }
    } catch (error) {
      setResponse(
        <div>
          <strong>Error:</strong> {error.message}
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Generate Image</h2>
      <textarea
        rows="4"
        placeholder="Enter your fashion design prompt here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      ></textarea>
      <button
        onClick={generateImage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Generate Image
      </button>
      <div className="response" style={{ marginTop: "20px" }}>
        {response}
      </div>
    </div>
  );
};

export default GenerateImage;
