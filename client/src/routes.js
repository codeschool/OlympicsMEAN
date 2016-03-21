import angular from 'angular'
import 'angular-ui-router'

angular.module('olympics.routes', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/sports')

  $stateProvider
    .state('sports', {
      url: '/sports',
      templateUrl: 'sports/sports-nav.html',
      resolve: {
        sportsService: function($http) {
          return $http.get('/sports');
        }
      },
      controller: 'SportsController as sportsCtrl'
    })
    .state('sports.medals', {
      url: '/:sportName',
      templateUrl: 'sports/sports-medals.html',
      resolve: {
        sportService: function($http, $stateParams) {
          return $http.get(`/sports/${$stateParams.sportName}`);
        }
      },
      controller: function(sportService){
        this.sport = sportService.data;
      },
      controllerAs: 'sportCtrl'
    })
    .state('sports.new', {
      url: '/:sportName/medal/new',
      templateUrl: 'sports/new-medal.html',
      controller: 'MedalsController as newMedalCtrl'
    })
})
