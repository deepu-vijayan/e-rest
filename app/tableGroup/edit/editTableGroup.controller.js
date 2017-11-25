erestaurant.controller("EditTableGroupControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", "$mdDialog", "sharedService", function ($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService, $mdDialog, sharedService) {
    this.myDate = new Date();
    $scope.customFullscreen = false;
    init();
    function init() {
        $scope.tableGroup = businessService.getTableGroup();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function () {
        $state.go('layout.manageTableGroup', { "effect": "slide-right" })
    }
    $scope.viewTables = function (ev) {
        sharedService.viewTables(ev);
    };

}])    