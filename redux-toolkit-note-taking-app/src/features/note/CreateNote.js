// Import React from the 'react' module
import { React } from "react";

function CreateNote({ textHandler, saveHandler, inputText }) {
  // Set the character limit for the textarea
  const charLimit = 100;

  // Calculate the number of characters left based on the input text length
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      {/* TextArea input for the note */}
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        maxLength="100" // Set the maximum character length for the textarea
        onChange={textHandler} // Handle text changes using the provided textHandler function
      ></textarea>
      {/* Footer section of the note */}
      <div className="note__footer">
        {/* Display the remaining characters */}
        <span className="label">{charLeft} left</span>
        {/* Button to save the note */}
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
