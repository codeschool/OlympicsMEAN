import angular from "angular";
import "angular-ui-router";

let app = angular.module("olympics", ["ui.router"]);

app.controller("SportsController", SportsController);

function SportsController($scope, Sport){
  Sport.findAll().success( (data) => {
    $scope.sports = data.sports;
  });
}

app.factory("Sport", SportFactory);

function SportFactory($http){
  return {
    findAll(){
      return $http({ method: "GET", url: "/sports" });
    },

    find(sportId){
      return $http({ method: "GET", url: `/sports/${sportId}` });
   }
  }
}

app.factory("Medal", MedalFactory);

function MedalFactory($http){
  return {
    create(sportId, medal){
      return $http({ method: "POST", url: `/medals/${sportId}`, data: { medal } });
    }
  }
}

app.controller("MedalsController", MedalsController);

function MedalsController($state, Medal){
  this.medal = {};
  this.addMedal = (sportId, medal) => {
    Medal.create(sportId, medal).success( () => {
      $state.go("sports-show", { sportId });
    });
  }
}

app.config( ($stateProvider, $urlRouterProvider) => {

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

