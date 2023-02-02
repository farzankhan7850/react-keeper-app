import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

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
    <div>
      <form className="create-note">
        {expand && (
          <input
            onChange={handleInput}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        )}

        <textarea
          onClick={isExpanded}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={input.content}
        />
        <Zoom in={expand}>
          <Fab onClick={submitNote}>
            <AddIcon sx={{ fontSize: 35 }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
