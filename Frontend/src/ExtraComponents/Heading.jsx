import React from "react";
import "./Heading.css";
function Heading(props) {
  return (
    <div className="page_header_con">
      <div className="container">
        <h1 className="page_heading">{props.heading}</h1>
      </div>
    </div>
  );
}

export default Heading;
