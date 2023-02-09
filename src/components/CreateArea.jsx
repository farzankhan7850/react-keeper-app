import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./CreateArea.css";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    (input.title !== "" || input.content !== "") &&
      input.title !== " " &&
      input.content !== " " &&
      props.AddItem(input);
    setInput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function isExpanded() {
    setExpand(true);
  }

  return (
    <div className="container">
      <form className="create-note row ">
        {expand && (
          <input
            className="col-12"
            onChange={handleInput}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        )}

        <textarea
          className="col-12"
          onClick={isExpanded}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={input.content}
        />
        <Zoom in={expand}>
          <Fab className="button" onClick={submitNote}>
            <AddIcon sx={{ fontSize: 35 }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
