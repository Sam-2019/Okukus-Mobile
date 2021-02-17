import React from "react";
import "./imageshow.css";

const ImageShow = () => {
  return (
    <div className="image-container item">
      <img
        src="https://images.unsplash.com/photo-1534429068323-d715c5a6d96b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
        alt="Avatar"
        className="just-image item"
      />
    </div>
  );
};

export default ImageShow;
