import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  console.log("home", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Welcome to the protected Home page!</h1>
      <LogoutButton />
    </div>
  );
};

export default Home;
