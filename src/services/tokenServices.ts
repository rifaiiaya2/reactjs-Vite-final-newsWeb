import { setAuthToken } from "../redux/slices/authSlice";
import { store } from "../redux/store/store";
export const getAccessToken = (): string | null => {
  const state = store.getState();
  return state.auth.accessToken;
};

export const getRefreshToken = (): string | null => {
  const state = store.getState();
  return state.auth.refreshToken;
};

export const saveAccessToken = (accessToken: string) => {
  const refreshToken = getRefreshToken();
  if (refreshToken) {
    store.dispatch(setAuthToken({ accessToken, refreshToken }));
  } else {
    console.error("No current refresh token available.");
  }
};
