angular.module('NoteWrangler').controller('UsersEditController', function($http, $scope, User, Note, $routeParams, $location){
  
  $scope.user = User.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.plants = Note.query();


  $scope.saveUser = function(user){
    $scope.isSubmitting = true;

    $http.put('/users/' + $routeParams.id, user).
      success(function(data) {
        $location.url('/users/' + $routeParams.id);
      });
  };


  //     Line form controller     //
  console.log($scope.user);

});