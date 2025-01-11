import React, { useState } from "react";

const ProfileWelcome = ({ name, currentFirstName, currentLastName, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalLastName = lastName || currentLastName;
    const finalFirstName = firstName || currentFirstName;
    onSubmit(finalFirstName, finalLastName);
    setIsEditing(false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
          {name || "User"}!
      </h1>
      <button className="edit-button" onClick={handleEditClick}>
        Edit Name
      </button>
      {isEditing && (
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileWelcome;
