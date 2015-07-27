angular.module('app').controller('HomeController', function($scope, $location, AuthService){
  
  $scope.islogged = AuthService.isLoggedIn();
  
  console.log(AuthService.isLoggedIn());

  console.log($scope.islogged);




});