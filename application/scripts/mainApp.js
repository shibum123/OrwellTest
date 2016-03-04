require('angular');
var angular = typeof global === 'undefined' ? window.angular : global.angular;
angular.module('mainApp',['ngAnimate', 'ui.bootstrap', 'ngRoute', 'route-segment', 'view-segment'])

    .run(function ($interval, $rootScope, $http, $location, $routeParams, $anchorScroll, $window) {
        $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            $location.hash($routeParams.scrollTo);
            $anchorScroll();
        });

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if ($rootScope.loginComplete) {
                console.log("user id " + $rootScope.loggedInUserId );
            } else {
               $location.path('/login');
            }
        });

    })
    .controller('modalInstanceCtrl', ['$scope','$modalInstance', 'modalOptions', require('./controllers/modalInstanceCtrl')])
    .controller('orderController', ['$scope', '$rootScope', '$routeParams', require('./controllers/orderController')])
    .controller('baseController', ['$scope', '$rootScope', '$routeParams', require('./controllers/baseController')])
    .controller('recipeController', ['$scope', '$rootScope', '$routeParams', require('./controllers/recipeController')])
    .controller('loginController', ['$timeout', '$scope', '$rootScope', '$sce', '$location', '$uibModal', require('./controllers/loginController')])
    .controller('recipiesController', ['$scope', '$uibModal', '$rootScope', '$sce',  require('./controllers/recipiesController')])
    /**
     *******************************************************
     configure the angular route module
     *******************************************************
     */
    .config(['$routeSegmentProvider', '$routeProvider', function ($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider.
        when('/home', 'index').
        when('/index', 'index').
        when('/orders', 'orders').
        when('/login', 'login').
        when('/:id', 'overview').

        segment('index', {
            "default": true,
            templateUrl: 'views/home.html',
            title: 'ORWELL' }).

        segment('overview', {
                    "default": true,
                    controller: 'recipeController',
                    templateUrl: 'views/overview.html'}).
        segment('orders', {
                    "default": true,
                    controller: 'orderController',
                    templateUrl: 'views/orders.html'}).
 
        segment('', {
            "default": true,
            templateUrl: 'views/home.html',
            controller: 'recipiesController',
            title: 'ORWELL' }).

        segment('login', {
            "default": true,
            templateUrl: 'views/login.html',
            controller: 'loginController',
            title: 'Login' });
            
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
    }]);
