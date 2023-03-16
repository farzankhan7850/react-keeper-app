import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./App.css";

const getLocalStorage = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(localStorage.getItem("notes"));
  } else {
    return [];
  }
};

function App() {
  const [notes, setNotes] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [editNote, setEditNote] = useState({
    title: "",
    content: "",
  });
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleEdit(id) {
    setIsEditing(true);
    const specificItem = notes.find((e, index) => index === id);
    setEditNote(() => {
      return { title: specificItem.title, content: specificItem.content };
    });
    setInput((e) => {
      return {
        title: editNote.title,
        content: editNote.content,
      };
    });

    setEditID(id);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateArea
        setIsEditing={setIsEditing}
        AddItem={addNote}
        isEditing={isEditing}
        notes={notes}
        editID={editID}
        setNotes={setNotes}
        editNote={editNote}
        setEditNote={setEditNote}
        setEditID={setEditID}
        input={input}
        setInput={setInput}
      />
      <div className="row block" id="box">
        {notes.map((count, index) => {
          return (
            <Note
              id={index}
              key={index}
              title={count.title}
              content={count.content}
              onDelete={deleteNote}
              handleEdit={handleEdit}
              isEditing={isEditing}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default App;
