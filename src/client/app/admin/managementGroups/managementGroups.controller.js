(function () {
    'use strict';

    angular
        .module('app.admin.managementGroups')
        .controller('ManagementGroupsController', ManagementGroupsController);

    ManagementGroupsController.$inject = ['logger'];
    /* @ngInject */
    function ManagementGroupsController(logger) {
        var vm = this;
        vm.title = 'Management Groups';

        activate();

        function activate() {
            logger.info('Activated Admin Management Groups View');
        }
    }
})();
