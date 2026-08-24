const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.send("<h2>All fields are required!</h2><a href='/'>Go Back</a>");
    }
    if (age < 18 || age > 100) {
        return res.send("<h2>Age must be between 18 and 100!</h2><a href='/'>Go Back</a>");
    }
    res.send(`
        <h1>Form Submitted Successfully!</h1>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Age:</b> ${age}</p>
        <br>
        <a href="/">Go Back</a>
    `);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});