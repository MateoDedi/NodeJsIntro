const express = require("express");
const app = express();
const PORT = 3000;

const userRoute = require('./Routes/user.js');
const commentsRoute = require('./Routes/comments.js');
app.use('/user', userRoute);
app.use('/comments', commentsRoute);

app.listen(PORT, () => {
    console.log("Server Listening to port 3000")
});