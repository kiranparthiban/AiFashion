import React from "react";
import GenerateImage from "./GenerateImage";
import FetchHistory from "./FetchHistory";
import DeleteHistory from "./DeleteHistory";

const ApiTester = () => {
  const baseUrl = "http://127.0.0.1:8000/api";

  return (
    <div className="container">
      <h1>AI Fashion API Tester</h1>
      <GenerateImage baseUrl={baseUrl} />
      <FetchHistory baseUrl={baseUrl} />
      <DeleteHistory baseUrl={baseUrl} />
    </div>
  );
};

export default ApiTester;
