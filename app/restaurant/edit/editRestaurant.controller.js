erestaurant.controller("EditRestaurantControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", function ($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService) {
    this.myDate = new Date();
    init();
    function init(){
        $scope.restaurant = businessService.getRestaurant();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.loadGroups = function () {

        // Use timeout to simulate a 650ms request.
        return  $scope.groups = $scope.groups || [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
                { id: 3, name: 'C' },
                { id: 4, name: 'D' },
                { id: 5, name: 'E' }
            ];

    }
    $scope.cancel = function (){
        $state.go('layout.manageRestaurant',{"effect":"slide-right"});
    }
}])    