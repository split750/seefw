angular.module('app').factory('WasteType', function($resource){
  return $resource('/wasteTypes/:id');
});