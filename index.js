const express = require("express");
var bodyParser = require("body-parser");
var StudentsResource = require("./studentsResource");

var port = ( process.env.PORT || 8282 );

var BASE_API_PATH = "/v1";

var app = express();
app.use(bodyParser.json());

app.get(BASE_API_PATH+"/students", (request, response) => {
    console.log("GET /students");

    StudentsResource.getAllStudents()
    .then((body) => {
        response.send(body);
    })
    .catch((error) => {
        console.log("error: "+error);
        response.sendStatus(500);
    });
});

app.listen(port, () => {

    console.log("Server (client) ready and running!");

});