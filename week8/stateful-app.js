const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const server = express();
const PORT = 3001;
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(
    session({
        secret: "week6-demo-secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 120000
        }
    })
);
const checkLogin = (req, res, next) => {
    if (req.session.loggedIn === true) {
        next();
    } else {
        res.redirect("/login");
    }
};
server.get("/login", (req, res) => {
    res.render("login", { message: null });
});
server.post("/login", (req, res) => {
    const { userId, passcode } = req.body;
    if (userId === "student" && passcode === "456") {
        req.session.loggedIn = true;
        req.session.userId = userId;
        res.cookie("recentVisit", new Date().toLocaleString());
        res.redirect("/dashboard");
    } else {
        res.render("login", {
            message: "Incorrect username or password"
        });
    }
});
server.get("/dashboard", checkLogin, (req, res) => {
    const recentVisit = req.cookies.recentVisit || "No previous visit";
    res.render("dashboard", {
        username: req.session.userId,
        recentVisit: recentVisit
    });
});
server.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.clearCookie("recentVisit");
        res.redirect("/login");
    });
});
server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/login`);
});