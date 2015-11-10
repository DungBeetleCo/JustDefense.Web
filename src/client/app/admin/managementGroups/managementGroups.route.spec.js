/**
 * Created by tmiranda on 10/13/2015.
 */
/* jshint -W117, -W030 */
describe('admin.managementGroups routes', function () {
    describe('state', function () {
        var view = 'app/admin/managementGroups/managementGroups.html';

        beforeEach(function () {
            module('app.admin.managementGroups', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function () {
            $templateCache.put(view, '');
        });

        it('should map state admin.managementGroups to url /admin/managementGroups ', function () {
            expect($state.href('admin.managementGroups', {})).to.equal('/admin/managementGroups');
        });

        it('should map /admin/managementGroups route to admin View template', function () {
            expect($state.get('admin.managementGroups').templateUrl).to.equal(view);
        });

        it('of admin.managementGroups should work with $state.go', function () {
            $state.go('admin.managementGroups');
            $rootScope.$apply();
            expect($state.is('admin.managementGroups'));
        });
    });
});
