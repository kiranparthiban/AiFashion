import React, { useState } from "react";

const FetchHistory = ({ baseUrl }) => {
  const [entries, setEntries] = useState(10);
  const [response, setResponse] = useState("");

  const fetchHistory = async () => {
    setResponse("Fetching history...");
    try {
      const res = await fetch(`${baseUrl}/history?n=${entries}`);
      const result = await res.json();

      if (res.ok) {
        setResponse(
          <div>
            <strong>History:</strong>
            <br />
            {result.map((item) => (
              <div
                key={item.prompt_id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "4px",
                }}
              >
                <strong>ID:</strong> {item.prompt_id}
                <br />
                <strong>Prompt:</strong> {item.prompt}
                <br />
                <strong>Image:</strong>
                <br />
                <img
                  src={`data:image/png;base64,${item.image_url}`}
                  alt="History"
                  style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
                />
              </div>
            ))}
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
      <h2>Fetch History</h2>
      <input
        type="number"
        value={entries}
        onChange={(e) => setEntries(e.target.value)}
        placeholder="Enter number of entries"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={fetchHistory}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Fetch History
      </button>
      <div className="response" style={{ marginTop: "20px" }}>
        {response}
      </div>
    </div>
  );
};

export default FetchHistory;
