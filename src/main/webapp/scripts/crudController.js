(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.crudProduct", [])
        .controller("CrudController", CrudController);

    CrudController.$inject = ['$scope', '$http', '$filter', '$stateParams', '$state', 'productService'];

    function CrudController($scope, $http, $filter, $stateParams, $state, productService){


         console.log($state.current.data.entryPoint);


       if($state.current.data.entryPoint === 'edit') {
           productService.getProduct($stateParams.id).then(function (data) {
               $scope.product = data;
               $scope.product.discountEndDate = new Date($scope.product.discountEndDate);
               $scope.product.discountStartDate = new Date($scope.product.discountStartDate);

           });
       }
        $scope.cancel = function () {
            $state.go('listProducts');
        }


        $scope.discountTypes = [
            {
                "id": 1,
                "label": "$NZ"
            },
            {
                "id": 2,
                "label": "% discount"
            }
        ];

        $scope.targetRepository = [
            {
                "id": 1,
                "label": "FileNet P8 5.2.0"
            },
            {
                "id": 2,
                "label": "FileNet P8 5.2.1"
            },
            {
                "id": 3,
                "label": "FileNet P8 5.3.0"
            }
        ];

        $scope.sourceRepository = [{
            'id': 1,
            'label': "CSV" },
            {
            'id': 2,
            'label': 'DB2'},
            {
            'id': 3,
            'label': 'MySQL'},
            {
            'id': 4,
            'label': 'MSSQL'},
            {
            'id': 5,
            'label': 'Oracle'}
        ];

        $scope.product = {};
        $scope.product.discountStartDate = new Date();
        $scope.product.discountEndDate = new Date();

        $scope.saveProduct = function () {

          var dataObj = {
              productId: $scope.product.productId,
              productCategory: $scope.product.productCategory,
              productCode : $scope.product.productCode,
              productName : $scope.product.productName,
              costPrice : $scope.product.costPrice,
              retailPrice : $scope.product.retailPrice,
              productDescription : $scope.product.productDescription,
              productInvoiceDescription : $scope.product.productInvoiceDescription,
              discountStartDate : $scope.product.discountStartDate.toLocaleDateString('en-NZ'),
              discountEndDate : $scope.product.discountEndDate.toLocaleDateString('en-NZ'),
              discountExpires : $scope.product.discountExpires,
              discountType : $scope.product.discountType,
              discountAmount : $scope.product.discountAmount,
              discountPercentage : $scope.product.discountPercentage,
              discountAmountForOrdersOver : $scope.product.discountAmountForOrdersOver,
              discountForProduct : $scope.product.discountForProduct
            };

        productService.createUpdateProduct(dataObj);

		}
    }

})(this, angular);
