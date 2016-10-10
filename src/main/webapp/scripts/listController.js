(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.listProduct", [])
        .controller("ListController", ListController);

    ListController.$inject = ['$scope', '$http', '$filter', '$state', '$mdDialog', 'productService'];

    function ListController($scope, $http, $filter, $state, $mdDialog, productService) {

        productService.getAllProducts().then(function (data) {
            $scope.products = data;
        });

        $scope.showProfilePage = function () {
            return $state.go('addProduct');
        };

        $scope.deleteProduct = function (ev, id) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this product?')
                .textContent('')
                .ariaLabel('Confirm Delete')
                .targetEvent(ev)
                .ok('Please do it!')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                productService.deleteProduct(id);
            }, function() {

            });
        
        };

    }

})(this, angular);