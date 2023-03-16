import React from "react";
import "./Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <nav className="navbar text-light">
      <div className="container-fluid">
        <span className="navbar-brand fw-bolder mb-0 ml-2 p-3">
          <HighlightIcon />
          Keeper App
        </span>
      </div>
    </nav>
  );
}

export default Header;
