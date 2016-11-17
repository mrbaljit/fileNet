(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.crudProduct", [])
        .controller("CrudController", CrudController);

    CrudController.$inject = ['$scope', '$http', '$filter', '$stateParams', '$state', 'productService'];

    function CrudController($scope, $http, $filter, $stateParams, $state, productService){


         console.log($state.current.data.entryPoint);
        $scope.dbcol = [];

        var counter = 0;
        $scope.data = {
            fields: []
        }

//        $scope.days = ['Day', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      //  $scope.months = ['Jan', 'Feb', 'Mar'];

        $scope.profile = { };
        $scope.profile.userName = "renewadm";
        $scope.profile.password = "db2admin";
        $scope.profile.port = "50019";
        $scope.profile.schemaName  = "MARVL";
        $scope.profile.databaseName  = "LU2RN2";
        $scope.profile.hostName  = "db2at1.aus.prominagroup.com";

        $scope.addField = function() {
            $scope.data.fields.push({
                name: "test " + counter++
            });
        };


        $scope.connectToDB = function() {
            var dataObj = {
                userName: $scope.profile.userName,
                password : $scope.profile.password,
                schemaName : $scope.profile.schemaName,
                hostName :  $scope.profile.hostName ,
                port : $scope.profile.port,
                databaseName :  $scope.profile.databaseName
            };
            productService.getDBTableName(dataObj).then(function (data) {
                $scope.tableName = data;
                console.log(data, " db col ..");
                console.log($scope.tableName, " tableName");

            });



        };



        productService.getDBColumnName().then(function (data) {
            $scope.dbcol = data;
            $scope.days = data;
            $scope.months = data;
            console.log(data, " db col ..");
        });


       if($state.current.data.entryPoint === 'edit') {
           productService.getProduct($stateParams.id).then(function (data) {
               $scope.profile = data;
           });
       }
        $scope.cancel = function () {
            $state.go('listProducts');
        }

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


       // $scope.product.discountStartDate = new Date();
       // $scope.product.discountEndDate = new Date();

        $scope.saveProduct = function () {

          var dataObj = {
              profileName: $scope.profile.profileName,
              sourceRepository : $scope.profile.sourceRepository,
              targetRepository : $scope.profile.targetRepository
            };

        productService.createUpdateProduct(dataObj);

		}
    }

})(this, angular);
