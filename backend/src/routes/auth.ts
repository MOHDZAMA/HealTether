import { Router } from "express";
import { body } from "express-validator";
import { registerUser, loginUser } from "../controllers/auth";
// import { getAuthStatus } from "../controllers/auth"; // Import the new auth status controller
import verifyToken from "../middleware/verifyToken";
const router: Router = Router();

// Register route
router.post(
  "/register",
  [
    body("name").not().isEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  registerUser
);

// Login route
router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  loginUser
);

//auth status route
router.get("/me", verifyToken, (req, res) => {
  console.log("me route handler reached", req.user);

  if (req.user) {
    res.json({ email: req.user.email });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Logged out successfully" });
});
export default router;
