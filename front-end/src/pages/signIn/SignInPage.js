import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SignInForm from "../../store/features/signIn/SignInForm";
import "./signIn.css";

// Page complète de connexion
// est inclus dans App.js pour être chargé à la route /login
// logique dépend de SignInForm

const SignInPage = () => {
  const token = useSelector((state) => state.signIn.token);
  console.log("Token in SignInPage:", token);
  if (token) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      <Header />
      <main className="sign-in-bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
