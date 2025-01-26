import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignIn } from "../../../services/apiService";

// Gère l'état global de l'authentification
// reçoit les données de apiService
// maj le store Redux
// fournit l'état et les actions pour les composants

export const signInUser = createAsyncThunk(
  "signIn/signInUser",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await SignIn(email, password); // appel de SignIn depuis apiService et maj selon le résultat
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    // état initial
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      // réinit l'état utilisateur et l'état token
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        // active l'état loading et réinit l'erreur
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        // stocke les données utilisateur et token
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.body.token;
        localStorage.setItem("token", action.payload.body.token); // stocke le token dans le local storage si la connexion est réussie
      })
      .addCase(signInUser.rejected, (state, action) => {
        // gère les erreurs
        state.loading = false;
        state.error = action.payload;
        localStorage.removeItem("token"); // supprime le token du local storage en cas d'erreur
      });
  },
});

export const { logout } = signInSlice.actions;

export default signInSlice.reducer;
