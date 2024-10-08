import React from "react";

function Checkbox(props) {
    //more readable
    const {label, id, onChange}=props;
  return (
    <div className="remember-me">
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
