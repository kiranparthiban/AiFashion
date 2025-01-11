import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GenerateImage from "./components/GenerateImage";
import FetchHistory from "./components/FetchHistory";
import DeleteHistory from "./components/DeleteHistory";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import "./App.css";

const AppContent = ({
  showHistory,
  setShowHistory,
  showDelete,
  setShowDelete,
  baseUrl,
}) => {
  return (
    <div className="app">
      {/* Background Animation */}
      <div className="animated-background"></div>

      {/* Chat History Side Panel */}
      <div className={`chat-history-panel ${showHistory ? "open" : ""}`}>
        <button
          className="close-chat-history"
          onClick={() => setShowHistory(false)}
        >
          &times;
        </button>
        <FetchHistory baseUrl={baseUrl} />
      </div>

      {/* Top Bar */}
      <div className="top-bar">
        <button
          className="chat-history-toggle"
          onClick={() => setShowHistory(true)}
        >
          Chat History
        </button>
        <button
          className="delete-history-toggle"
          onClick={() => setShowDelete(!showDelete)}
        >
          Delete History
        </button>
      </div>

      {/* Delete History Popup */}
      {showDelete && (
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

const App = () => {
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [showDeleteHistory, setShowDeleteHistory] = useState(false);
  const baseUrl = "http://127.0.0.1:8000/api";

  return (
    <Router>
      <div className="app">
        {/* Routes */}
        <Routes>
          {/* Redirect base URL to login */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/app"
            element={
              <AppContent
                showHistory={showChatHistory}
                setShowHistory={setShowChatHistory}
                showDelete={showDeleteHistory}
                setShowDelete={setShowDeleteHistory}
                baseUrl={baseUrl}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

