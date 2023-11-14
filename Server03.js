const app = require("express")();

const verifyPassword = (req, res, next) => {
    const {password} = req.query;

    if (password === "IAmTheBigBoss") {
        next();
    } else {
        res.send("Not Authorized");
    }
};

const root = __dirname;

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root});
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html");
});

app.get("/secret", verifyPassword, (req, res) => {
    res.sendFile("./views/secret.html", {root});
});

app.use((req, res) => {
    res.sendFile("./views/404.html", {root});
});

app.listen(3000, () => {
    console.log("listening to port 3000");
    });