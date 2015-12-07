import angular from "angular";
import "angular-ui-router";

angular.module("olympics.routes", ["ui.router"])
  .config( ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state("sports-show", {
      url: "/sports/:sportId",
      templateUrl: "templates/pages/sports/show.html",
      controller: ($scope, $stateParams, Sport) => {
        Sport.find($stateParams.sportId).success( (sport) => {
          $scope.sport = sport;
        });
      }
    })

    .state("medals-new", {
      url: "/sports/:sportId/medals/new",
      templateUrl: "templates/pages/medals/new.html",
      controller: ($scope, $stateParams, Sport) => {
        Sport.find($stateParams.sportId).success( (sport) => {
          $scope.sport = sport;
        });
      }
    });
});
