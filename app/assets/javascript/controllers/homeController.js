angular.module('NoteWrangler').controller('HomeController', function($scope, $location, AuthService){
  
  $scope.islogged = false;
  
  console.log(AuthService.getUserStatus());




});