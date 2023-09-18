import express from "express";
import cookieParser from "cookie-parser";
// import path from "path";
import expressLayouts from "express-ejs-layouts";

import session from "express-session";
import passport from "passport";
import passportLocal from "./config/passport-local-strategy.js";

import routes from "./routes/index.js";
import "./config/mongoose.js";

const PORT = 1000;
const app = express();

app.use(cookieParser());

app.use(express.urlencoded());

app.use(express.static("./assets"));

app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "Authentication",
    secret: "FNWINON@OVN",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("error running the server", err);
    return;
  }
  console.log(`connection is running on http://localhost:${PORT}`);
});
