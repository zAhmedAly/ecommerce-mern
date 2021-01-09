import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    // <div className="dark-overlay">
    <Spinner
      animation="border"
      role="status"
      style={{
        // position: "fixed",
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        // top: "50%",
        // left: "50%",
        // "margin-top": "-100px",
        // "margin-left": "-100px",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
    // </div>
  );
};

export default Loader;
