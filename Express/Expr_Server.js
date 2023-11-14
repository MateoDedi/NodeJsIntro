const express = require("express");

// The "express" function returns an object that contains many methods such as 'listen', 'get', 'post', 'use', etc.
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    
    // Store the original res.send function
    const originalSend = res.send;

    // Override the res.send function to log the status code before sending the response
    res.send = function (body) {
        console.log(`${method} ${url} ${res.statusCode}`);
        originalSend.apply(res, arguments);
    };

    // Call the next middleware in the stack
    next();
});

// 'listen' establishes a port to be listened and a callback function that fires as soon as the server is launched.
app.listen(3000, () => {
    console.log("Listening to port 3000");
});

// Just so we don't have to write down {root: __dirname} at every request
const root = __dirname;

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root });
});

app.get("/about", (req, res) => {
    res.sendFile("./about.html", { root });
});

app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

const obj = {
    school: "BeCode",
    year: 2023,
};

app.post("/", (req, res) => {
    // Sends json back
    res.json(obj);
});
// Later, we will eventually be sending data from a database

// Remember that the code will run untill it finds a match. "use" is a match for any request. So in this case, we want to put it at the end as a "catch all"
app.use((req, res) => {
    res.status(404).sendFile("./404.html", { root });
});