import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.js";

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      User.findOne({ email })
        .then((user) => {
          if (!user || user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        })
        .catch((error) => {
          return done(error);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((error) => {
      return done(error);
    });
});

passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect("/signin");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

export default passport;
