angular.module('NoteWrangler').controller('UsersShowController', function(User, Note, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});

  $scope.plantName = Note.query();
});