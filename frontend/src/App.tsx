import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "./stores/Slice/authSlice";
import axiosInstance from "./utils/axiosConfig";
import { RootState } from "./stores/store";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/CommingSoon";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/me");
        if (res.status === 200) {
          dispatch(loginSuccess({ email: res.data.email }));
        } else {
          dispatch(logoutSuccess());
        }
      } catch (error) {
        console.error("User is not authenticated or session has expired.");
        dispatch(logoutSuccess());
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<ComingSoon />} />
          <Route path="settings" element={<ComingSoon />} />
          <Route path="support" element={<ComingSoon />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
