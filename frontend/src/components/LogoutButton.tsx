import React from "react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../stores/Slice/authSlice";
import axiosInstance from "../utils/axiosConfig";

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      dispatch(logoutSuccess());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
