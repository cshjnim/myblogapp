import React from "react";
import "./style.css";
// example: delete Btn -> need to change to enter-btn function

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function EnterBtn(props) {
  return (
    <span className="enter-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default EnterBtn;