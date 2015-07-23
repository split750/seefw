angular.module("NoteWrangler").directive('nwPageNav', function($rootScope, AuthService, User){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/nwPageNav.html",
    controller: function($scope, $location, AuthService){
      

      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };

      console.log(User);
      
      console.log(AuthService.isLoggedIn());
    }
  };
});