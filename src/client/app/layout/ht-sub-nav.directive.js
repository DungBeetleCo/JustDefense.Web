/**
 * Created by tmiranda on 10/11/2015.
 */
(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htSubNav', htSubNav);

    /* @ngInject */
    function htSubNav () {
        var directive = {
            bindToController: true,
            controller: SubNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='//,
                //routes: '@routes'
            },
            templateUrl: 'app/layout/ht-sub-nav.html'
        };

        SubNavController.$inject = ['routerHelper'];
        /* @ngInject */
        function SubNavController(routerHelper) {
            var vm = this;
            vm.parentState = 'admin';
            vm.childStates = routerHelper.getChildStates(vm.parentState);
        }

        return directive;
    }
})();
