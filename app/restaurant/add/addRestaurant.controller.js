erestaurant.controller("AddRestaurantControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", function ($scope, apiService, $state, $mdSidenav, $timeout, $log) {
    this.myDate = new Date();
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.loadGroups = function () {

        // Use timeout to simulate a 650ms request.
        return 
            $scope.groups = $scope.groups || [
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