import React from "react";
import "./Note.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="col-sm-4 col-lg-3 ">
      <div className="card shadow-sm m-1">
        <div className="card-body">
          <h5
            className="card-title fw-bold"
            onClick={() => props.handleEdit(props.id)}
          >
            {props.title}
          </h5>
          <p className="card-text" onClick={() => props.handleEdit(props.id)}>
            {props.content}
          </p>
        </div>
        <button className="btn" onClick={handleClick}>
          <DeleteRoundedIcon className="delete-btn" sx={{ fontSize: 35 }} />
        </button>
      </div>
    </div>
  );
}

export default Note;
