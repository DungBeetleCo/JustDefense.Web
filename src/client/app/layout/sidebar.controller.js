(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'routerHelper'];
    /* @ngInject */
    function SidebarController($state, routerHelper) {
        var vm = this;
        var states = routerHelper.getRootStates();
        vm.isCurrent = isCurrent;

        activate();

        function activate() {
            getNavRoutes();
        }

        function getNavRoutes() {
            vm.navRoutes = states.filter(function (r) {
                return r.settings && r.settings.nav;
            }).sort(function (r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {

            if ($state.current.parent === route.name) {
                return 'current';
            }

            if ($state.current.title === route.title) {
                return 'current';
            }

            return '';
        }
    }
})();
