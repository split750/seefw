angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "assets/templates/home.html"
    })

    .when('/notes', {
      templateUrl: "assets/templates/notes/index.html",
      controller: "NotesIndexController"
    })

    .when('/notes/new', {
      templateUrl: "assets/templates/notes/new.html",
      controller: "NotesCreateController"
    })

    .when('/notes/:id', {
      templateUrl: "assets/templates/notes/show.html",
      controller: "NotesShowController"
    })

    .when('/notes/:id/edit', {
      templateUrl: "assets/templates/notes/edit.html",
      controller: "NotesEditController"
    })

    .when('/users', {
      templateUrl: "assets/templates/users/index.html",
      controller: "UsersIndexController"
    })

    .when('/users/new', {
      templateUrl: "assets/templates/users/new.html",
      controller: "UsersCreateController"
    })

    .when('/users/:id', {
      templateUrl: "assets/templates/users/show.html",
      controller: "UsersShowController"
    })

    .when('/users/:id/edit', {
      templateUrl: "assets/templates/users/edit.html",
      controller: "UsersEditController"
    })

    .when('/about', {
      templateUrl: "assets/templates/about.html",
      //controller: "AboutController"
    })
    .otherwise('/');
});