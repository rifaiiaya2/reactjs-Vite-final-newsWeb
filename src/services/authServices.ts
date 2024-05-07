import axios from "axios";
import { apiURL } from "../utils/apiURL";

interface LoginCredentials {
  email: string;
  password: string;
}
interface SignUpCredentials extends LoginCredentials {
  username: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${apiURL}/login`,
      credentials,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to login");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
export const signupUser = async (
  credentials: SignUpCredentials
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${apiURL}/signup`,
      credentials,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to sign up: Unexpected status code");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
