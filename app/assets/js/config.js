/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',

        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $urlRouterProvider
                .otherwise('/home');

            var authenticated = ['$q', 'Auth', function ($q, Auth) {
                var deferred = $q.defer();
                Auth.isLoggedIn(false)
                  .then(function (isLoggedIn) {
                    if (isLoggedIn) {
                      deferred.resolve();
                    } else {
                      deferred.reject('Not logged in');
                    }
                  });
                return deferred.promise;
            }];

            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "assets/templates/home.html"
                })

                .state('login', {
                    templateUrl: 'assets/templates/login.html',
                    controller: 'loginController',
                    url: '/login',
                })

                .state('app', {
                    abstract: true,
                    url: "/app",
                    templateUrl: "tpl/app.html"
                })

                .state('app.dashboard', {
                    url: "/home",
                    templateUrl: "tpl/home.html",
                    controller: 'HomeCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/home.js'
                                    ]);
                                });
                        }],
                        authenticated: authenticated
                    }
                })

                .state('app.users', {
                    url: "/users",
                    templateUrl: "assets/templates/users/index.html",
                    controller: 'UsersIndexController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/usersController.js'
                                    ]);
                                });
                        }]
                    }
                })
                
                .state('app.userid', {
                    url: "/users/:id",
                    templateUrl: "assets/templates/users/show.html",
                    controller: 'UsersShowController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/usersController.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.useridedit', {
                    url: "/users/:id/edit",
                    templateUrl: "assets/templates/users/edit.html",
                    controller: 'UsersEditController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/usersController.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.usercreate', {
                    url: "/register",
                    templateUrl: "assets/templates/register.html",
                    controller: 'registerController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/authController.js'
                                    ]);
                                });
                        }]
                    }
                })


                .state('app.plants', {
                    url: "/plants",
                    templateUrl: "assets/templates/plants/index.html",
                    controller: 'PlantsIndexController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/plantsController.js'
                                    ]);
                                });
                        }]
                    }
                })
                
                .state('app.plantid', {
                    url: "/plants/:id",
                    templateUrl: "assets/templates/plants/show.html",
                    controller: 'PlantsShowController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/plantsController.js'
                                    ]);
                                });
                        }]
                    }
                })

                .state('app.plantidedit', {
                    url: "/plants/:id/edit",
                    templateUrl: "assets/templates/plants/edit.html",
                    controller: 'PlantsEditController',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                    /* 
                                        Load any ocLazyLoad module here
                                        ex: 'wysihtml5'
                                        Open config.lazyload.js for available modules
                                    */
                                ], {
                                    insertBefore: '#lazyload_placeholder'
                                })
                                .then(function() {
                                    return $ocLazyLoad.load([
                                        'assets/javascript/controllers/plantsController.js'
                                    ]);
                                });
                        }]
                    }
                });

        }
    ])

    .run(function ($rootScope, $state, $log) {
      $rootScope.$on('$stateChangeError', function () {
        // Redirect user to our login page
        $state.go('login');
      });
    });