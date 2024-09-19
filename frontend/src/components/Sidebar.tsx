// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

const Sidebar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const userEmail = (user as any).email;

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold text-green-600">HealthEther</h2>
        <p className="text-gray-600">Welcome, {userEmail || "User"}</p>
      </div>
      <ul className="flex-1 mt-4">
        <li className="p-4 hover:bg-green-100 cursor-pointer">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="p-4 hover:bg-green-100 cursor-pointer">
          <Link to="/profile">Profile (Coming Soon)</Link>
        </li>
        <li className="p-4 hover:bg-green-100 cursor-pointer">
          <Link to="/settings">Settings (Coming Soon)</Link>
        </li>
        <li className="p-4 hover:bg-green-100 cursor-pointer">
          <Link to="/support">Support (Coming Soon)</Link>
        </li>
      </ul>
      <div className="p-4 border-t">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
