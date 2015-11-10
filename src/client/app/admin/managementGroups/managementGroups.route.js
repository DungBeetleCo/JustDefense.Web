/**
 * Created by tmiranda on 10/13/2015.
 */
(function() {
    'use strict';

    angular
        .module('app.admin.managementGroups')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'admin.managementGroups',
                config: {
                    url: '/managementGroups',
                    parent: 'admin',
                    templateUrl: 'app/admin/managementGroups/managementGroups.html',
                    controller: 'ManagementGroupsController',
                    controllerAs: 'vm',
                    title: 'Management Groups',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Management Groups'
                    }
                }
            }
        ];
    }
})();
