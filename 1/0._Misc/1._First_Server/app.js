const express = require("express");
const app = express();
const fs = require("fs");

const workingDir = process.cwd();
const relativeUsersFilePath = '/mock_data/users.json'

// https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
// Til async read af fil - gemt så jeg kan forstå den bedre
/*function readUserFile() {
    fs.readFile(workingDir + relativeUsersFilePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        console.log(data)
        return data;
    })
}*/

app.get("/", (request, response) => {
    response.send({
        message: "First call to /"
    })
});

/*
    3 Forskellige måder at læse min user data på
    FLøsning med JSON.parse er vidst lidt ældre og fra før node fik native json support
    sendFile løsning stammer fra express og er en måde at sende filens indhold direkte
    løsningen der gør brug af require er i følge nedenstående link måden at bruge nodes native json support
    https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-file-into-server-memory/10011078#10011078
*/

// todo -- håndtering af flere users
// todo -- request param
app.get("/users/1", (request, response) => {
    // let userData = JSON.parse(fs.readFileSync(workingDir + relativeUsersFilePath, "utf-8"))
    // response.sendFile(workingDir + relativeUsersFilePath)
    // let userData = require(workingDir + relativeUsersFilePath)
    // response.send(userData)
    response.json(require(workingDir + relativeUsersFilePath))
})

app.get("/users", (request, response) => {
    response.json(require(workingDir + relativeUsersFilePath))
})

// should be at the bottom of the file
app.listen(8080);
