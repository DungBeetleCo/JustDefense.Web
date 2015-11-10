(function () {
    'use strict';

    angular
        .module('app.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['logger'];
    /* @ngInject */
    function SearchController(logger) {
        var vm = this;
        vm.title = 'Search';

        activate();

        function activate() {
            logger.info('Activated Search View');
        }
    }
})();
