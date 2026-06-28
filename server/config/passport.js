import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        // 1. Have we seen this Google user before?
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // 2. Maybe they signed up locally with same email earlier?
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            // link Google to existing local account
            user.googleId = profile.id;
            user.authProvider = "google";
            await user.save();
          } else {
            // 3. Brand new user — create one
            user = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              authProvider: "google",
            });
          }
        }

        return done(null, user); // success — pass user along
      } catch (err) {
        return done(err, null);
      }
    },
  ),
);

// These two control what gets stored in the session cookie
passport.serializeUser((user, done) => {
  done(null, user.id); // only store the Mongo _id in the session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
