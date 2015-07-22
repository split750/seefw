angular.module('NoteWrangler').config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "assets/templates/home.html",
      controller: "HomeController",
    })

    .when('/notes', {
      templateUrl: "assets/templates/notes/index.html",
      controller: "NotesIndexController",
      access: {restricted: true}
    })

    .when('/notes/new', {
      templateUrl: "assets/templates/notes/new.html",
      controller: "NotesCreateController",
      access: {restricted: true}
    })

    .when('/notes/:id', {
      templateUrl: "assets/templates/notes/show.html",
      controller: "NotesShowController",
      access: {restricted: true}
    })

    .when('/notes/:id/edit', {
      templateUrl: "assets/templates/notes/edit.html",
      controller: "NotesEditController",
      access: {restricted: true}
    })

    .when('/users', {
      templateUrl: "assets/templates/users/index.html",
      controller: "UsersIndexController",
      access: {restricted: true}
    })

    .when('/users/new', {
      templateUrl: "assets/templates/users/new.html",
      controller: "UsersCreateController",
      access: {restricted: true}
    })

    .when('/users/:id', {
      templateUrl: "assets/templates/users/show.html",
      controller: "UsersShowController",
      access: {restricted: true}
    })

    .when('/users/:id/edit', {
      templateUrl: "assets/templates/users/edit.html",
      controller: "UsersEditController",
      access: {restricted: true}
    })

    .when('/about', {
      templateUrl: "assets/templates/about.html",
      //controller: "AboutController",
      access: {restricted: true}
    })

    .when('/login', {
      templateUrl: 'assets/templates/login.html', 
      controller: 'loginController',
      access: {restricted: false}
    })

    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })

    .when('/register', {
      templateUrl: 'assets/templates/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })

    .when('/one', {template: '<h1>This is page one!</h1>'})
    .when('/two', {template: '<h1>This is page two!</h1>'})
    
    .otherwise('/');
})

.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && AuthService.isLoggedIn() === false) {
      $location.path('/login');
    }
  });
});