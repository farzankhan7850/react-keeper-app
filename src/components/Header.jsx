import React from "react";
import "./Header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <nav class="navbar text-light">
      <div class="container-fluid">
        <span class="navbar-brand fw-bolder mb-0 ml-2 p-3">
          <HighlightIcon />
          Keeper App
        </span>
      </div>
    </nav>
  );
}

export default Header;
{
  /* <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
    </header> */
}
