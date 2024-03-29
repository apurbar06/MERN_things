import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
