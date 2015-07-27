angular.module('app', [
    'ngRoute', 
    'ngResource', 
    "ngGravatar", 
    'ui.bootstrap'
    ])

    .config(function(GravatarProvider, $routeProvider, $locationProvider, $httpProvider) {

      GravatarProvider.setSize(100);

    });

        

