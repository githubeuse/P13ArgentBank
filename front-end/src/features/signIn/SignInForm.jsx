import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "./signInSlice";
import "./signIn.css";

import { loadUserProfile } from "../profile/profileSlice";

// composant pour le forumulaire de connexion
// dépend de signInSlice pour : state et actions
// est inclus dans signInPage

const SignInForm = () => {
  const [email, setEmail] = useState(""); // capture et stocke l'email
  const [password, setPassword] = useState(""); // capture et stocke le mdp

  const dispatch = useDispatch(); // pour envoyer les actions au store

  const { loading, error } = useSelector((state) => state.signIn); // pour récupérer l'état de loading et les erreurs

  // fonction pour le bouton du form
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(signInUser({ email, password })) // est appelé lors de la soumission du formulaire //fait l'authenti à l'api
      //load
      .then((data) => {
        const token = localStorage.getItem("token"); //récupération du token dans le local storage
        dispatch(loadUserProfile(token)); //chargement du profil dans SignInForm
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Login OK", data);
      })
      .catch((error) => {
        console.log("Erreur au login", error);
      });
  };

  return (
    <div className="bg-white">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="sign-in-title">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </button>
        {error && <p className="error">{error}</p>}{" "}
      </form>
    </div>
  );
};

export default SignInForm;
