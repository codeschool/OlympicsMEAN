"use strict";

let _db = require("./db");
let extend = require("extend");

let Sport = {
  /* returns all sports */
  findAll(cb){
    console.log( JSON.stringify(_db.sports) );
    return cb(_db);
  },
  /* returns sport with matching id */
  findById(id, cb) {
    let originalResult = _db.sports.find( (sport) => parseInt(sport.id) === parseInt(id) );
    /* clone/extend the original result so sorting doesn't mutate the _db object */
    let result = extend(true, {}, originalResult);
    result.goldMedals.sort( (a, b) => {
      return a.year - b.year;
    });
    cb(result);
  },
  /* Adds a new medal do the sport */
  addMedal(sportId, medal, cb){
    let sport = _db.sports.find( (sport) => parseInt(sport.id) === parseInt(sportId) );
    sport.goldMedals.push(medal);

    cb(null); // null means no error
  }
};

module.exports = Sport;
