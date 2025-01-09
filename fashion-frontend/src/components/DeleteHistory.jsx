import React, { useState } from "react";

const DeleteHistory = ({ baseUrl }) => {
  const [promptId, setPromptId] = useState("");
  const [response, setResponse] = useState("");

  const deleteHistory = async () => {
    try {
      const res = await fetch(`${baseUrl}/history/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt_id: promptId }),
      });
      const result = await res.json();
      setResponse(
        res.ok ? `Message: ${result.message}` : `Error: ${result.error}`
      );
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="delete-history-popup">
      <input
        type="number"
        placeholder="Enter Prompt ID"
        value={promptId}
        onChange={(e) => setPromptId(e.target.value)}
        className="delete-history-input"
      />
      <button onClick={deleteHistory} className="delete-button">
        Delete
      </button>
      <p>{response}</p>
    </div>
  );
};

export default DeleteHistory;
