import React from "react";

const ProfileWelcome = ({ name, onEditName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name || "User"}!
      </h1>
      <button className="edit-button" onClick={onEditName}>
        Edit Name
      </button>
    </div>
  );
};

export default ProfileWelcome;
