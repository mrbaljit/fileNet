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
        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
        });
})(this, angular);