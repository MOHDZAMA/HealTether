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

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center w-full p-2 mt-4 bg-red-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-red-700 hover:shadow-lg"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
