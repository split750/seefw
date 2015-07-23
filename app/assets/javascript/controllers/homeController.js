angular.module('NoteWrangler').controller('HomeController', function($scope, $location, AuthService){
  
  $scope.islogged = AuthService.isLoggedIn();
  
  console.log(AuthService.isLoggedIn());




});