import React, { useState } from "react";
import "../../../pages/profile/profile.css";

const ProfileWelcome = ({
  name,
  currentFirstName,
  currentLastName,
  onSubmit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalLastName = lastName || currentLastName;
    const finalFirstName = firstName || currentFirstName;
    onSubmit(finalFirstName, finalLastName);
    setIsEditing(false);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name || "User"}!
      </h1>
      {!isEditing && (
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      )}
      {isEditing && (
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            <div className="divInput">
              <div className="firstNameDiv">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder={currentFirstName}
                  defaultValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <button className="save-button" type="submit">
                  Save
                </button>
              </div>
              <div className="lastNameDiv">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder={currentLastName}
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <button
                  className="cancel-button"
                  type="button"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileWelcome;
