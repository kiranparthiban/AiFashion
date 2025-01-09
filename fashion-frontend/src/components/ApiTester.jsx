import React from "react";
import GenerateImage from "./GenerateImage";
import FetchHistory from "./FetchHistory";
import DeleteHistory from "./DeleteHistory";

const ApiTester = () => {
  const baseUrl = "http://127.0.0.1:8000/api";

  return (
    <div className="api-tester">
      <div className="top-bar">
        <div className="left-section">
          <FetchHistory baseUrl={baseUrl} />
        </div>
        <div className="right-section">
          <DeleteHistory baseUrl={baseUrl} />
        </div>
      </div>
      <div className="main-content">
        <div className="static-photo">
          <img
            src="/static/photo-placeholder.png"
            alt="AI Enhanced Prompt Engine"
          />
          <h2>AI Enhanced Prompt Engine</h2>
        </div>
        <GenerateImage baseUrl={baseUrl} />
      </div>
    </div>
  );
};

export default ApiTester;
