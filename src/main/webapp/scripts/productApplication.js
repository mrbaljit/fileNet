(function (global, angular) {
    'use strict';

    angular.module("nz.com.product", [
        'nz.com.product.productService',
        'nz.com.product.listProduct',
        'nz.com.product.crudProduct',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial'
    ]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                }
            }
        }),
        $stateProvider.state('listProducts', {
            url: '/listProducts',
            views: {
                'content': {
                    templateUrl: 'views/list.html',
                    controller: 'ListController'
                }
            }
        }),
        $stateProvider.state('addProduct', {
            url: '/addProduct',
            data: {
                entryPoint : 'add'
            },

            views: {
                'content': {
                    templateUrl: 'views/add.html',
                    controller: 'CrudController'
                }
            }
        }),
        $stateProvider.state('editProduct', {
            url: '/:id/editProduct',
            data: {
                entryPoint : 'edit'
            },
            views: {
                'content': {
                    templateUrl: 'views/edit.html',
                    controller: 'CrudController'
                }
            }
        }),
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'views/login.html',
                    controller: 'navigation'
                }
            }
        })
    }]).config(function($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format("DD/MM/YYYY");
        };
    }).controller('MainController', function($scope, $state) {

            $scope.showDarkTheme = true;
            $scope.addProduct = function () {
                       return $state.go('addProduct');
            };

            $scope.listProduct = function () {
                       return $state.go('listProducts');
            };
        }).controller('navigation',

            function($rootScope, $scope, $http, $location) {
//https://spring.io/guides/gs/securing-web/
            var authenticate = function(credentials, callback) {

              var headers = credentials ? {authorization : "Basic "
                  + btoa(credentials.username + ":" + credentials.password)
              } : {};

              $http.get('profile/user', {headers : headers}).success(function(data) {
                if (data.name) {
                  $rootScope.authenticated = true;
                } else {
                  $rootScope.authenticated = false;
                }
                callback && callback();
              }).error(function() {
                $rootScope.authenticated = false;
                callback && callback();
              });

            }

            authenticate();
            $scope.credentials = {};
            $scope.login = function() {
                authenticate($scope.credentials, function() {
                  if ($rootScope.authenticated) {
                    $location.path("/");
                    $scope.error = false;
                  } else {
                    $location.path("/login");
                    $scope.error = true;
                  }
                });
            };
          })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
        });
})(this, angular);