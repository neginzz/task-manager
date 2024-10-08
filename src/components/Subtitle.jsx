import React from "react";

function Subtitle({ page }) {
  return (
    <p className="form-footer">
      {page === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
      <a href={page==="login"?"/signup":"/login"}>{page==="login"?"Signup":"Login"}</a>
    </p>
  );
}

export default Subtitle;
