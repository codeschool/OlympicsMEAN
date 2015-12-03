import angular from "angular";
import "angular-ui-router";
import { BASE_URI } from "./constants";

let app = angular.module("olympics", ["ui.router"]);

app.controller("SportsController", SportsController);

function SportsController($scope, $http){
  $http.get(`${BASE_URI}/sports`).success( (data) => {
    $scope.sports = data.sports;
  });
}

app.config( ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("sports-show", {
      url: "/sports/:sportId",
      templateUrl: "partials/sports-show.html",
      controller: ($http, $scope, $stateParams) => {
        $http.get(`${BASE_URI}/sports/${$stateParams.sportId}`).success( (sport) => {
          $scope.sport = sport;
        });
      }
    });
});
