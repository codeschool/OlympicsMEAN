"use strict";

let express = require("express");
let app = express();


let cors = require("permissive-cors");
app.use(cors());

let _db = {

  sports: [
    { name: "Cycling",
      goldMedals: [
        { division: "Men's Sprint", country: "UK", year: 2012 },
        { division: "Women's Sprint", country: "Australia", year: 2012 }
      ]
    },

    { name: "Weightlifting",
      goldMedals: [
        { division: "Men's Heavyweight", country: "Ukraine", year: 2012 },
        { division: "Women's Heavyweight", country: "Kazakhstan", year: 2012 }
      ]
    },
  ]
};

let Sport = {
  findAll(cb){ return cb(_db); }
};

app.get("/sports", (request, response) => {

  Sport.findAll( (sports) => {
    response.json(sports);
  });

});

let port = 8181;

app.listen(port, () => {
  console.log( "Listening on port " + port );
});
