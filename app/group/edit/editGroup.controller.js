erestaurant.controller("EditGroupControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", function($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService){
    this.myDate = new Date();
    init();
    function init(){
        $scope.group = businessService.getGroup();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function (){
        $state.go('layout.manageGroup',{"effect":"slide-right"})
    }

}])    