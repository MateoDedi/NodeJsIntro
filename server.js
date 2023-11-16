const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log("Server listening to PORT 3000");
});