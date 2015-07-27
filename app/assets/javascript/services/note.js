angular.module('app').factory('Note', function($resource){
  return $resource('/notes/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    },
    get: {
      method: "GET"  
    }
  });
});