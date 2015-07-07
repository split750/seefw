angular.module('NoteWrangler').controller('UsersIndexController', function(Note, Category, User, $scope){
  $scope.users = User.query();

  $scope.search = {};

  $scope.plants = Note.query();

});