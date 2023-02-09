import React from "react";
import "./Note.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div class="col-sm-4 col-lg-3 ">
      <div class="card shadow-sm m-1">
        <div class="card-body">
          <h5 class="card-title fw-bold">{props.title}</h5>
          <p class="card-text">{props.content}</p>
        </div>
        <button className="btn" onClick={handleClick}>
          <DeleteRoundedIcon className="delete-btn" sx={{ fontSize: 40 }} />
        </button>
      </div>
    </div>
  );
}

export default Note;
{
  /* <div className="note">
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button style={{ backgroundColor: "white" }} onClick={handleClick}>
    <DeleteRoundedIcon sx={{ fontSize: 40 }} />
  </button>
</div>; */
}
