import React from "react";

function Checkbox(props) {
    //more readable
    const {label, id}=props;
  return (
    <div className="remember-me">
      <input type="checkbox" id={id} />
      <label for={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
