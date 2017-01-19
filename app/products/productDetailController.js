(function() {
    'use strict';
    angular.module('productManagement')
        .controller('productDetailController',
            ['product', productDetailController]);

    function productDetailController(product) {
        var vm = this;

        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    };
})();