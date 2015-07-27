angular.module('app').controller('UsersIndexController', function(Note, Category, User, $scope){
  $scope.users = User.query();

  $scope.search = {};

  $scope.plants = Note.query();

});


angular.module('app').controller('UsersShowController', function(User, Note, $scope, $stateParams){
  $scope.user = User.get({id: $stateParams.id});

  $scope.user.$promise.then(function(data) {
        
    Note.get({id: data.attachment}, function(data2) {
      $scope.plantName = data2.title;
      console.log('user attachment : ' + $scope.plantName);
    });

  });

});



angular.module('app').controller('UsersEditController', function($http, $scope, User, Note, $stateParams, $location){
  
  $scope.user = User.get({id: $stateParams.id})
  $scope.isSubmitting = false;
  $scope.plants = Note.query();


  $scope.saveUser = function(user){
    $scope.isSubmitting = true;

    $http.put('/users/' + $stateParams.id, user).
      success(function(data) {
        $location.url('/app/users/' + $stateParams.id);
      });
  };


  //     Line form controller     //
  console.log($scope.user);

});



angular.module('app').controller('UsersCreateController', function($scope, Note, User, $location){
  $scope.user = new User();
  $scope.isSubmitting = false;
  $scope.plants = Note.query();

  console.log($scope.plants);

  $scope.saveUser = function(user){
    $scope.isSubmitting = true;
    user.$save().then(function(){
      $location.path("/users");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };



});