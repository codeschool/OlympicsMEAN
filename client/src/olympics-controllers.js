import angular from "angular";

angular.module("olympics.controllers", [])
  .controller("SportsController", SportsController)
  .controller("MedalsController", MedalsController);


function SportsController($scope, Sport){
  Sport.findAll().success( (data) => {
    $scope.sports = data.sports;
  });
}

function MedalsController($state, Medal){
  this.medal = {};
  this.addMedal = (sportId, medal) => {
    Medal.create(sportId, medal).success( () => {
      $state.go("sports-show", { sportId });
    });
  }
}

