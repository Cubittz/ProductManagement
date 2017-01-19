(function() {
    angular.module('productManagement')
        .controller('productEditController',
            ['productResource', productEditController]);

    function productEditController() {
        var vm = this;
    };
})();