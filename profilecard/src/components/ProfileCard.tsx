import React, { ReactElement } from "react";
import "../App.css";
import { Profile } from "../model";
import Chip from "./Chip";

// Define the props for the ProfileCard component based on the Profile interface
const ProfileCard: React.FC<Profile> = ({
  name,
  description,
  imgUrl,
  website,
  skills,
}) => {
  return (
    // Container for the entire card component
    <div className="card_container">
      <div className="card">
        {/* Container for the profile image */}
        <div className="image_container">
          <img src={imgUrl} alt="profile pic" />
        </div>
        {/* Display the name and description */}
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
        {/* Container for the message and website buttons */}
        <div className="button_container">
          <div className="button">Message</div>
          {/* Conditionally render the website button if the user has a website */}
          {website && <div className="button outline">Website</div>}
        </div>
      </div>
      {/* Container for the skills section */}
      <div className="skills_container">
        {/* Display the skills section heading */}
        <div className="heading">Skills</div>
        {/* Display the list of skills as chips */}
        <div className="skills">
          {skills.map((skill) => (
            <Chip text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
