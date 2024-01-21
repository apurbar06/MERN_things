import React from "react";
import "./ImageBackground.css";

const ImageBackground = ({ children }) => {
  return <div className="image-background"> {children} </div>;
};

export default ImageBackground;
