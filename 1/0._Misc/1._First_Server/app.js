const express = require("express");
const app = express();

// TODO: Consider what datatype to store your data in (file, spreadsheet etc.)
// Note: You are allowed to hardcode the id (instead of getting it from the request url)
// Der er noget på fronter omkring opgaven. Man skal vidst designe API først via excel?

app.get("/", (request, response) => {
    response.send({
        message: "First call to /"
    })
});

app.get("/anotherpath", (request, response) => {
    response.send({
        messsage: "Go away"
    })
})

// should be at the bottom of the file
app.listen(8080);