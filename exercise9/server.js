const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

// https://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.urlencoded({ extended: true }));
// expressjs.com/en/resources/middleware/cookie-parser.html
app.use(cookieParser());
app.use(
  session({
    secret: "unfortunately_i_like_black_coffee",
    resave: false, // prevent session from being saved with each request
    saveUninitialized: true, // allow to create empty session
  })
);
app.use(express.static("public")); // serve static files from public folder

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/save", (req, res) => {
  const {
    persistentCookieText,
    sessionCookieText,
    sessionVariableText,
    localStorageText,
  } = req.body;

  const timeLimit = 24 * 60 * 1000;
  res.cookie("persistentCookie", persistentCookieText, { maxAge: timeLimit });
  res.cookie("sessionCookie", sessionCookieText);
  req.session.sessionVariable = sessionVariableText;
  console.log("Set sessionVariableText:", req.session.sessionVariable);
  res.render("result", {
    persistentCookieText,
    sessionCookieText,
    sessionVariableText,
    localStorageText,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
