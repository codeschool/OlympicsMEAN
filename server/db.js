"use strict";

let _db = {

  sports: [
    {
      id: 1,
      name: "Cycling",
      goldMedals: [
        { division: "Bogus Too", country: "Bogus 2", year: 2017 },
        { division: "Bogus Category", country: "Bogus 1", year: 1984 },
        { division: "Men's Sprint", country: "UK", year: 2012 },
        { division: "Women's Sprint", country: "Australia", year: 2012 }
      ]
    },

    {
      id: 2,
      name: "Weightlifting",
      goldMedals: [
        { division: "Men's Heavyweight", country: "Ukraine", year: 2012 },
        { division: "Women's Heavyweight", country: "Kazakhstan", year: 2012 }
      ]
    },
  ]
};

module.exports = _db;
