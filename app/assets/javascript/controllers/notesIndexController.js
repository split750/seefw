angular.module('NoteWrangler').controller('NotesIndexController', function(Note, Category, $scope, $log){
  
  $scope.notes = Note.query();
  $scope.search = {};

  $scope.categoryName = Category.query();

  $scope.totalItems = $scope.notes.length;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 1;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;

});