"use strict";

let express = require("express");
let app = express();

let cors = require("permissive-cors");
app.use(cors());

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

let Sport = require("./sport");

app.use(express.static(__dirname + "/../client"));

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

app.post("/medals/:sportId", jsonParser, (request, response) => {
  let medal = request.body.medal;

  Sport.addMedal(request.params.sportId, medal, (error) => {
    if(error){
      return response.sendStatus(400);
    }else{
      return response.sendStatus(201);
    }
  });
});


module.exports = app;
