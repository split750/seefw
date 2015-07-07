angular.module('NoteWrangler').controller('UsersShowController', function(User, Note, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});
  
  console.log($scope.user.attachment);

  $scope.plantName = Note.get({_id: $scope.user.attachment});

  console.log($scope.plantName);
});