import User from "../models/user.js";

export const signIn = async (req, res) => {
  if (req.cookies && req.cookies["user_id"]) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signin", { layout: "signin", title: "Sign In" });
};

export const doSignIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (user.password != req.body.password) {
      res.redirect("back");
    } else {
      res.cookie("user_id", user._id);
      res.redirect("/dashboard");
    }
  } else {
    res.redirect("back");
    return;
  }
};

export const signUp = async (req, res) => {
  res.render("signup", { layout: "signup", title: "Sign Up" });
};

export const doSignUp = async (req, res) => {
  console.log({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  console.log("User Created", user);
  res.redirect("/signin");
};

export default { signIn, signUp, doSignIn, doSignUp };
