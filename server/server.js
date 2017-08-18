const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

app.get("/error", (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App v1.0"
    });
});

app.get("/users", (req, res) => {
    res.status(200).send([{
        name: "Romina",
        age: 3
    }, {
        name: "Jessica",
        age: 30
    }]);
});

/*
app.listen(3000, () => {
    console.log("The server was started")
});
*/

app.listen(3000);

module.exports.app = app;
