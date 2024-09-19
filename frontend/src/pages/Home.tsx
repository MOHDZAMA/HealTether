// src/pages/Home.tsx
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // Import Sidebar

const Home = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      {isAuthenticated && <Sidebar />} {/* Render Sidebar if authenticated */}
      <div className="flex-1 p-8">
        <Outlet /> {/* Render nested routes here */}
      </div>
    </div>
  );
};

export default Home;

// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../stores/store";
// import { Outlet, useNavigate } from "react-router-dom";

// const Home = () => {
//   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="flex h-screen bg-gray-100">

//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-4">
//           Welcome to the protected Home page!
//         </h1>
//         <div className="mt-8 p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Main Content Area</h2>
//           <p>This is where you can display your main content.</p>

//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default Home;

// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../stores/store";
// import { useNavigate } from "react-router-dom";
// import LogoutButton from "../components/LogoutButton";

// const Home = () => {
//   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
//   const navigate = useNavigate();
//   console.log("home", isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg">
//         <div className="p-4 border-b">
//           <h2 className="text-lg font-bold text-green-600">HealthEther</h2>
//         </div>
//         <ul className="mt-4">
//           <li className="p-4 hover:bg-green-100 cursor-pointer">Dashboard</li>
//           <li className="p-4 hover:bg-green-100 cursor-pointer">Profile</li>
//           <li className="p-4 hover:bg-green-100 cursor-pointer">Settings</li>
//           <li className="p-4 hover:bg-green-100 cursor-pointer">Support</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-4">
//           Welcome to the protected Home page!
//         </h1>
//         <LogoutButton />
//         <div className="mt-8 p-4 bg-white rounded shadow">
//           <h2 className="text-xl font-semibold">Main Content Area</h2>
//           <p>This is where you can display your main content.</p>
//           {/* Add more content here */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
