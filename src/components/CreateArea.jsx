import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./CreateArea.css";

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  function handleInput(event) {
    const { name, value } = event.target;

    props.setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    if (props.input.title.trim() !== "" || props.input.content.trim() !== "") {
      props.setEditNote(() => {
        return {
          title: "",
          content: "",
        };
      });

      if (props.isEditing) {
        props.setNotes(
          props.notes.map((e, index) => {
            if (index === props.editID) {
              const { title, content } = { e };
              return {
                title: props.input.title,
                content: props.input.content,
              };
            }
            return e;
          })
        );

        props.setInput({
          title: "",
          content: "",
        });
        props.setIsEditing(false);
        props.setEditID(null);
      } else {
        props.AddItem(props.input);
        props.setInput({
          title: "",
          content: "",
        });
      }
    }
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
            value={props.input.title}
          />
        )}

        <textarea
          className="col-12"
          onClick={isExpanded}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={props.input.content}
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
