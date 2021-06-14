//Author: Asadullah; RollNo: 18L-1008

import React from "react";
import "./ErrorMessage.css";
function ErrorMessage(props) {
  return (
    <div className="container con-error">
      <div class="error-msg">
        <i class="fa fa-times-circle"></i> &nbsp;
        {props.message}
      </div>
    </div>
  );
}
export default ErrorMessage;
