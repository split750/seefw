angular.module('app').controller('PlantsIndexController', function(Note, Category, $scope){
  
  $scope.notes = Note.query();
  $scope.search = {};

  $scope.categoryName = Category.query();



});


angular.module('app').controller('PlantsShowController', function(Note, Category, User, $scope, $stateParams, $location, $http){
  
  $scope.note = Note.get({id: $stateParams.id});

  $scope.users = User.query();

  $scope.note.$promise.then(function(data) {
        
    Category.get({id: data.categoryId}, function(data2) {
      $scope.categoryName = data2.name;
    });

  });

  
  $scope.deleteNote = function(note) {
    $http.delete('/notes/' + $stateParams.id).
      success(function() {
        $location.url('/notes');
      });
  }

});



angular.module('app').controller('PlantsEditController', function($http, $scope, User, Note, Category, WasteType, ContractType, $stateParams, $location){
  
  $scope.note = Note.get({id: $stateParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.wasteTypes = WasteType.query();
  $scope.contractTypes = ContractType.query();


  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    $http.put('/notes/' + $stateParams.id, note).
      success(function(data) {
        $location.url('/app/plants/' + $stateParams.id);
      });
  };


  //         Date picker         //

  $scope.clear = function () {
    $scope.note.contracts.contractEndDate = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];


  //     Line form controller     //
  console.log($scope.note);

});



angular.module('app').controller('PlantsCreateController', function($scope, Note, Category, User, WasteType, ContractType, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();
  $scope.wasteTypes = WasteType.query();
  $scope.contractTypes = ContractType.query();


  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){
      $location.path("/app/plants");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  };

  
  //         Date picker         //

  $scope.clear = function () {
    $scope.note.contracts.contractEndDate = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

});