erestaurant.controller("EditGroupControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", "$mdDialog", function ($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService, $mdDialog) {
    this.myDate = new Date();
    init();
    function init() {
        $scope.group = businessService.getGroup();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function () {
        $state.go('layout.manageGroup', { "effect": "slide-right" })
    }
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/group/edit/dialog1.view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

}])    