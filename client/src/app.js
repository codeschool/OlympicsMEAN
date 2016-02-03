import angular from 'angular'
angular.module('olympics', [])
.controller('sportsController', function($http){
  $http.get('/sports').then((response) => {
    this.sports = response.data;
  });
})
