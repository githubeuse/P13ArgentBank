import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateName } from "./profileSlice";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ProfileWelcome from "./ProfileWelcome";
import AccountCard from "../../components/AccountCard/AccountCard";

import { userData, bankName } from "../../data/mockedData";

import "./profile.css";

const ProfilePage = () => {
  const { user, loading, error } = useSelector((state) => state.profile);
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();

  // const handleSubmit = (firstName, lastName) => {
  //   dispatch(updateName({ firstName, lastName }));
  // };

  const handleSubmit = async (firstName, lastName) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      dispatch(updateName({ firstName: data.body.firstName, lastName: data.body.lastName }));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) {
    return <p> Loading..</p>
    ;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div>
        <main className="profile-bg-dark">
          <ProfileWelcome
            className="profileWelcome"
            name={`${user?.firstName} ${user?.lastName}`}
            currentFirsttName={user?.firstName}
            currentLastName={user?.lastName}
            onSubmit={handleSubmit}
          />
          {/* new */}
          <section className="accounts">
            {userData.map((account, index) => (
              <AccountCard
                key={index}
                type={`${bankName} ${account.type} (x${account.number}) `}
                balance={account.balance}
                description={account.description}
              />
            ))}
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
