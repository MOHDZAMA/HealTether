// src/pages/Dashboard.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex flex-col p-8 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">
          Welcome back, {user?.email || "User"}!
        </h2>
        <p className="mt-2 text-gray-600">
          Here’s a quick overview of your account:
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between p-2 border rounded bg-gray-50">
            <span>Total Appointments:</span>
            <span>3</span>
          </li>
          <li className="flex justify-between p-2 border rounded bg-gray-50">
            <span>Upcoming Appointments:</span>
            <span>1</span>
          </li>
          <li className="flex justify-between p-2 border rounded bg-gray-50">
            <span>Messages:</span>
            <span>5</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
