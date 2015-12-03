"use strict";

let app = require("./server/app");

let port = process.env.PORT || 8181;

app.listen(port, () => {
  console.log( "Listening on port " + port );
});
