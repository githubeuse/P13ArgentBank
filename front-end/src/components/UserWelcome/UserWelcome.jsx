import React from "react";

const UserWelcome = ({ name, onEditName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}!
      </h1>
      <button className="edit-button" onClick={onEditName}>
        Edit Name
      </button>
    </div>
  );
};

export default UserWelcome;
