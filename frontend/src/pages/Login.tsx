import AuthForm from "../components/AuthForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <h1>Login</h1>
      <AuthForm />
    </div>
  );
};

export default Login;
