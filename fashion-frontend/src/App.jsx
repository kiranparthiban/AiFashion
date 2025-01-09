import React, { useState } from "react";
import GenerateImage from "./components/GenerateImage";
import FetchHistory from "./components/FetchHistory";
import DeleteHistory from "./components/DeleteHistory";
import "./App.css";

const App = () => {
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [showDeleteHistory, setShowDeleteHistory] = useState(false);
  const baseUrl = "http://127.0.0.1:8000/api";

  return (
    <div className="app">
      {/* Background Animation */}
      <div className="animated-background"></div>

      {/* Chat History Side Panel */}
      <div className={`chat-history-panel ${showChatHistory ? "open" : ""}`}>
        <button
          className="close-chat-history"
          onClick={() => setShowChatHistory(false)}
        >
          &times;
        </button>
        <FetchHistory baseUrl={baseUrl} />
      </div>

      {/* Top Bar */}
      <div className="top-bar">
        <button
          className="chat-history-toggle"
          onClick={() => setShowChatHistory(true)}
        >
          Chat History
        </button>
        <button
          className="delete-history-toggle"
          onClick={() => setShowDeleteHistory(!showDeleteHistory)}
        >
          Delete History
        </button>
      </div>

      {/* Delete History Popup */}
      {showDeleteHistory && (
        <div className="delete-history-container">
          <DeleteHistory baseUrl={baseUrl} />
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <GenerateImage baseUrl={baseUrl} />
      </div>
    </div>
  );
};

export default App;
