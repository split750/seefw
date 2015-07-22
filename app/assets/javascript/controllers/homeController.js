angular.module('NoteWrangler').controller('HomeController', function($scope, $location, AuthService){
  
  $scope.islogged = AuthService.getUserStatus();
  
  console.log(AuthService.getUserStatus());




});