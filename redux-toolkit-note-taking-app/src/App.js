import React from "react";
import Notes from "./features/note/Notes";
import Header from "./features/note/Header";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
