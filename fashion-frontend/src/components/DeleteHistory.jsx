import React, { useState } from "react";

const DeleteHistory = ({ baseUrl }) => {
  const [promptId, setPromptId] = useState("");
  const [response, setResponse] = useState("");

  const deleteHistory = async () => {
    setResponse("Deleting entry...");
    try {
      const res = await fetch(`${baseUrl}/history/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt_id: promptId }),
      });
      const result = await res.json();
      if (res.ok) {
        setResponse(
          <div>
            <strong>Message:</strong> {result.message}
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
      <h2>Delete History</h2>
      <input
        type="number"
        value={promptId}
        onChange={(e) => setPromptId(e.target.value)}
        placeholder="Enter Prompt ID"
      />
      <button onClick={deleteHistory}>Delete Entry</button>
      <div className="response">{response}</div>
    </div>
  );
};

export default DeleteHistory;
