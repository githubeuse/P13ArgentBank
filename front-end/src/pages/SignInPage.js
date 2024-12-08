import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SigninForm/SigninForm";

const SignInPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="sign-in-content">
          <h1>Sign In</h1>
          <SignInForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
