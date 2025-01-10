// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ProfileWelcome from "./ProfileWelcome";

import AccountCard from "../../components/AccountCard/AccountCard";

import "./profile.css";

const ProfilePage = () => {
  // const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const token = useSelector((state) => state.signIn.token);

  if (loading) {
    return <p> Loading..</p>;
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
            onEditName={() => alert("Edit name functionality here")}
          />
          <section className="accounts">
            <AccountCard
              title="Argent Bank Checking (x8349)"
              amount="2,082.79"
              description="Available Balance"
            />
            <AccountCard
              title="Argent Bank Savings (x6712)"
              amount="10,928.42"
              description="Available Balance"
            />
            <AccountCard
              title="Argent Bank Credit Card (x8349)"
              amount="184.30"
              description="Current Balance"
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
