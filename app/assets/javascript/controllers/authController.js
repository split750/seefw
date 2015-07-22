angular.module('NoteWrangler').controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);

angular.module('NoteWrangler').controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

angular.module('NoteWrangler').controller('registerController',
  ['$scope', '$location', 'AuthService', 'Note', '$filter',
  function ($scope, $location, AuthService, Note, $filter) {

    console.log(AuthService.getUserStatus());
    
    console.log($scope.registerForm.lastName);

    $scope.isSubmitting = false;
    $scope.plants = Note.query();


    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;
      $scope.isSubmitting = true;

      $scope.registerForm.lastname = $filter('uppercase')($scope.registerForm.lastName); 

      // logging values
      console.log($scope.registerForm);

      // call register from service
      AuthService.register(
        $scope.registerForm.username,
        $scope.registerForm.password,
        $scope.registerForm.firstName,
        $scope.registerForm.lastname,
        $scope.registerForm.picture,
        $scope.registerForm.role,
        $scope.registerForm.attachment,
        $scope.registerForm.mail,
        $scope.registerForm.tel
      )
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.isSubmitting = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.isSubmitting = false;
          $scope.registerForm = {};
        });

    };

}]);