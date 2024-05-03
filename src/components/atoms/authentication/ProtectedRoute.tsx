import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useSelector(
    (state: RootState) => !!state.auth.accessToken
  );

  if (!isAuthenticated) {
    toast.warn("You must be Logged-In to view the News Page.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

      transition: Zoom,
    });

    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
