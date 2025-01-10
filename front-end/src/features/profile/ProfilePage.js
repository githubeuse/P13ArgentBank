// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ProfileWelcome from "./ProfileWelcome";
import AccountCard from "../../components/AccountCard/AccountCard";

import { userData, bankName } from "../../data/mockedData";

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
