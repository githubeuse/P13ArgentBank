import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./features/signIn/signInSlice";
import profileReducer from "./features/profile/profileSlice";

// Configuration du store global
// Les composants utilisent useSelector pour accéder à des données du store

// let state = {};

export const store = configureStore({
  reducer: {
    signIn: signInReducer, // configuration avec signInSlice
    profile: profileReducer,
  },
});
