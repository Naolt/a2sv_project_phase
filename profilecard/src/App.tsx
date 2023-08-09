import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import { profiles } from "./data";
import HookComponent from "./hooks_pratice/HookComponent";

function App() {
  return (
    // Container for the entire app
    <div className="container">
      <div className="task">
        <span className="task_title">Hook Exercise</span>

        <HookComponent />
      </div>
      {/* Map over the profiles array and render a ProfileCard component for each profile */}
      <div className="task">
        <span className="task_title">Profile Card Exercise</span>
        {profiles.map((profile) => {
          return <ProfileCard {...profile} />;
        })}
      </div>
    </div>
  );
}

export default App;
