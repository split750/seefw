angular.module('NoteWrangler').controller('UsersCreateController', function($scope, Note, User, $location){
  $scope.user = new User();
  $scope.isSubmitting = false;
  $scope.plants = Note.query();


  $scope.saveUser = function(user){
    $scope.isSubmitting = true;
    user.$save().then(function(){
      $location.path("/users");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };



});