erestaurant.controller("AddTaxControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", function($scope, apiService, $state, $mdSidenav, $timeout, $log){
    this.myDate = new Date();
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function (){
        $state.go('layout.manageTax',{"effect":"slide-right"});
    }
}])    