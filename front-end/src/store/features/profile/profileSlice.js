import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../../../services/apiService";

export const loadUserProfile = createAsyncThunk(
  "profile/loadUserProfile",
  async (token, thunkAPI) => {
    try {
      console.log("token envoyé à fetchUserProfile:", token);
      const data = await fetchUserProfile(token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    // user: null, // old
    user: {
      firstName: "",
      lastName: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    clearProfile: (state) => {
      // state.user = null; // old
      state.user.firstName = "";
      state.user.lastName = "";
      state.error = null;
    },
    updateName: (state, action) => { // new
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload.body; // old
        state.user.firstName = action.payload.body.firstName;
        state.user.lastName = action.payload.body.lastName;
      })
      .addCase(loadUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfile, updateName } = profileSlice.actions;

export default profileSlice.reducer;
