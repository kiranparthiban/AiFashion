import React, { useEffect, useState } from "react";

const FetchHistory = ({ baseUrl }) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`${baseUrl}/history?n=10`);
        const result = await res.json();

        if (res.ok) {
          setResponse(
            result.map((item) => (
              <div key={item.prompt_id} className="history-item">
                <img
                  src={`data:image/png;base64,${item.image_url}`}
                  alt="History"
                />
                <div>
                  <p><strong>ID:</strong> {item.prompt_id}</p>
                  <p><strong>Prompt:</strong> {item.prompt}</p>
                </div>
              </div>
            ))
          );
        } else {
          setResponse(`Error: ${result.error || "Failed to fetch history"}`);
        }
      } catch (error) {
        setResponse(`Error: ${error.message}`);
      }
    };

    fetchHistory();
  }, [baseUrl]);

  return <div className="fetch-history-container">{response}</div>;
};

export default FetchHistory;
