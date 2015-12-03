import angular from "angular";
import "angular-ui-router";

let app = angular.module("olympics", ["ui.router"]);

app.controller("SportsController", SportsController);

function SportsController($scope, $http){
  $http.get(`/sports`).success( (data) => {
    $scope.sports = data.sports;
  });
}

app.config( ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("sports-show", {
      url: "/sports/:sportId",
      templateUrl: "templates/pages/sports/show.html",
      controller: ($http, $scope, $stateParams) => {
        $http.get(`/sports/${$stateParams.sportId}`).success( (sport) => {
          $scope.sport = sport;
        });
      }
    });
});
