angular.module('app').factory('ContractType', function($resource){
  return $resource('/contractTypes/:id');
});