import React from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{backgroundColor: 'white'}} onClick={handleClick}>
       <DeleteRoundedIcon  sx={{ fontSize: 40 }} />
      </button>
    </div>
  );
}

export default Note;
