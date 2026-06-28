import express from "express";
import session from "express-session";
import passport from "./config/passport.js";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true, // allow cookies to be sent
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/auth?error=google`,
  }),
  (req, res) => {
    // success — redirect back to React app
    res.redirect(`${process.env.CLIENT_URL}/`);
  }
);

app.get("/auth/me", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ user: null });
  }
});

app.post("/auth/logout", (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
    console.log("log_out")
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));


