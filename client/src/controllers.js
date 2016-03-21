import angular from 'angular';
angular.module('olympics.controllers', [])
.controller( 'MedalsController',
  function($stateParams, $state, $http){
    this.sportName = $stateParams.sportName;

    this.saveMedal = function(medal){
      $http({method: 'POST', url: `/sports/${$stateParams.sportName}/medals`, data: {medal}}).then(function(){
        $state.go('sports.medals', {sportName: $stateParams.sportName});
      });
    };
  }
)
.controller( 'SportsController',
  function SportsController(sportsService, $location) {
    this.sports = sportsService.data;

    this.isActive = (sport) => {
      let pathRegexp = /sports\/(\w+)/;
      let match = pathRegexp.exec($location.path());

      console.log('hi')
      if(match === null || match.length === 0) return false;
      let selectedSportName = match[1];
      console.log('below', selectedSportName, sport)

      return sport === selectedSportName;

    };
  }
);
