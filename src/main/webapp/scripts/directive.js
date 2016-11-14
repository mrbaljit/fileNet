(function (global, angular) {
    'use strict';
    angular
        .module("nz.com.product.directive.demoDisplay", [])
        .directive('demoDisplay', function($compile) {
            return {
                scope: {
                    demoDisplay: "=", //import referenced model to our directives scope
                    demoDays: "=",
                    demoMonths: "="
                },
                templateUrl: '/views/template.html',
                link: function(scope, elem, attr, ctrl) {
                    /*
                     scope.$watch('demoDisplay', function() { // watch for when model changes

                     elem.html("") //remove all elements

                     angular.forEach(scope.demoDisplay, function(d) { //iterate list
                     var s = scope.$new(); //create a new scope
                     angular.extend(s, d); //copy data onto it
                     console.log(scope.demoDays);

                     var template = '';
                     elem.append($compile(template)(s)); // compile template & append
                     });
                     }, true) //look deep into object
                     */
                }
            }
        })

})(this, angular);
