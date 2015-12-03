"use strict";

let express = require("express");
let app = express();

let cors = require("permissive-cors");
app.use(cors());

let Sport = require("./sport");

app.get("/sports", (request, response) => {

  Sport.findAll( (sports) => {
    return response.json(sports);
  });

});

app.get("/sports/:id", (request, response) => {

  Sport.findById(request.params.id, (sport) => {
    return response.json(sport);
  });
});

let port = 8181;

app.listen(port, () => {
  console.log( "Listening on port " + port );
});
