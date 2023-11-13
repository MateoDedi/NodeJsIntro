const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {

    fs.readFile("./views/index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end;
      } else {
        res.write(data);
        res.statusCode = 200;
        res.end;
      }
    });
  } else if (req.url === "/about-us") {
    res.setHeader("Location", "/about");
    res.statusCode = 301;
    res.end();
  } else {
    fs.readFile("./views/404.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.statusCode = 404;
        res.end();
      }
    });
  }
});

server.listen("3000", "localhost", () => {
  console.log("Listening for request on port 3000");
});