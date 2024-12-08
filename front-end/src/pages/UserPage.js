import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserWelcome from "../components/UserWelcome/UserWelcome";
import AccountCard from "../components/AccountCard/AccountCard";

const UserPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <UserWelcome
          name="Tony Jarvis"
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
      <Footer />
    </>
  );
};

export default UserPage;
