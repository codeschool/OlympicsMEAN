import angular from "angular";

import "./olympics-controllers";
import "./olympics-services";
import "./olympics-routes";

angular.module("olympics", ["olympics.routes", "olympics.services", "olympics.controllers"]);
