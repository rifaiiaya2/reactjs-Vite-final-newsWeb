import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuthToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
  },
});
export const { setAuthToken, clearAuthToken, setRefreshToken } =
  authSlice.actions;
export default authSlice.reducer;
