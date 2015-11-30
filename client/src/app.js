import angular from "angular";
import { BASE_URI } from "./constants";

angular.module("olympics", [])
  .controller("SportsController", SportsController);


function SportsController($scope, $http){
  $http.get(`${BASE_URI}/sports`).success( (data) => {
    $scope.sports = data.sports;
  });
}

