//import React, { useState } from "react";
//import { selectNotes } from "./noteSlice";
//import "../../App.css";
//export function Notes() {
//  const notes = useSelector(selectNotes);
//  const dispatch = useDispatch();

//  return <div className="main"></div>;
//}

import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateNote from "./CreateNote";
import "./Note.css";
import Note from "./Note";
import { addNote, selectNotes, deleteNote } from "./noteSlice";
function Notes() {
  const notes = useSelector(selectNotes);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const saveHandler = () => {
    // Add the note to the store
    dispatch(addNote(inputText));
    //clear the textarea
    setInputText("");
  };

  // Controls the text area
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const delNote = (id) => {
    // Delete note from the store
    dispatch(deleteNote(id));
  };

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.content}
          deleteNote={delNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}
export default Notes;
