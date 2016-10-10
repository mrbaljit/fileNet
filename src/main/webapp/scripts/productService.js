(function (global, angular) {
    'use strict';

    angular.module("nz.com.product.productService", [])
        .service("productService", ['$http', '$filter', '$state', '$q',
            function ($http, $filter, $state, $q) {

                return{
                    getAllProducts:getAllProducts,
                    createUpdateProduct : createUpdateProduct,
                    deleteProduct : deleteProduct,
                    getProduct : getProduct
                }

                function getProduct(id) {
                    var def = $q.defer();
                    $http.get('http://localhost:9090/product/' + id +'/getProduct').success(function (data) {
                        console.log(data, " get Product");
                        def.resolve(data);
                        //return data;
                    }).error(function (data, status) {
                        console.log('Error ' + data)
                    });
                    return def.promise;
                }                
                
                

        function createUpdateProduct(dataObj) {

            var res = $http.post('http://localhost:9090/product/createUpdateProduct', dataObj);

            res.success(function(data, status, headers, config) {
                console.log("eeee");
                $state.go('listProducts');
            });
            res.error(function(data, status, headers, config) {
                alert( "failure message: " + JSON.stringify({data: data}));
            });
        }

                function deleteProduct(id) {
                    $http.post('http://localhost:9090/product/' + id +'/deleteProduct')
                        .then(
                            function(response){
                                console.log(response, "success ");
                                $state.go('listProducts', {}, {reload: true})
                            },
                            function(response){
                                // failure call back
                                console.log( "failure message: " );
                            }
                        );
                }


       function getAllProducts() {
           var def = $q.defer();
            $http.get('http://localhost:9090/product/allProducts').success(function (data) {
                console.log(data, " vvvv");
                def.resolve(data);
                //return data;
            }).error(function (data, status) {
                console.log('Error ' + data)
            });
           return def.promise;
        }

    }]);
    
})(this, angular);