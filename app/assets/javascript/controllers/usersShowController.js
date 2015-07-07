angular.module('NoteWrangler').controller('UsersShowController', function(User, Note, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});

  $scope.user.$promise.then(function(data) {
        
    Note.get({id: data.attachment}, function(data2) {
      $scope.plantName = data2.title;
      console.log($scope.plantName);
    });

  });

});