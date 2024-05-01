import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAuthToken } from "../redux/slices/authSlice";

const useAuthLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return () => {
    dispatch(clearAuthToken());
    navigate("/");
  };
};

export default useAuthLogout;
