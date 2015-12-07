import angular from "angular";

angular.module("olympics.services", [])
  .factory("Sport", SportFactory)
  .factory("Medal", MedalFactory);

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

function MedalFactory($http){
  return {
    create(sportId, medal){
      return $http({ method: "POST", url: `/medals/${sportId}`, data: { medal } });
    }
  }
}
