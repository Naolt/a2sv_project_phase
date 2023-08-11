import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CreateNote from "./CreateNote";
import { editNote } from "./noteSlice";
import { useDispatch } from "react-redux";

function Note({ id, text, deleteNote }) {
  const [editable, setEditable] = useState(false);
  const [inputText, setInputText] = useState(text);

  const dispatch = useDispatch();

  const makeEditable = () => {
    setEditable(true);
  };

  const saveHandler = () => {
    // Add the note to the store
    dispatch(editNote({ id, content: inputText }));
    //clear the textarea
    setEditable(false);
  };

  // Controls the text area
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      {!editable ? (
        <div className="note" onDoubleClick={() => makeEditable()}>
          <div className="note__body">{text}</div>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <DeleteForeverOutlinedIcon
              className="note__delete"
              aria-hidden="true"
              onClick={() => deleteNote(id)}
            ></DeleteForeverOutlinedIcon>
          </div>
        </div>
      ) : (
        <CreateNote
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
        />
      )}
    </>
  );
}
export default Note;
