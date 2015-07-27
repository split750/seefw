angular.module('app').factory('Category', function($resource){
  return $resource('/categories/:id');
});