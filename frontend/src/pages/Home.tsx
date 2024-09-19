import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

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
      <Sidebar />
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
