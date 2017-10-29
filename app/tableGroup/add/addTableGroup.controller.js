erestaurant.controller("AddTableGroupControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "$element", function($scope, apiService, $state, $mdSidenav, $timeout, $log, $element){
    this.myDate = new Date();
    $scope.restaurantGroup ={};
    $scope.restaurantGroup.restaurantName = 'Royal';
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function (){
        $state.go('layout.editRestaurant',{"effect":"slide-right"})
    }

    $scope.taxgroups = ['Tax GP 1' ,'Tax GP 2' ,'Tax GP 3' ,'Tax GP 4' ,'Tax GP 5', 'Tax GP 6'];
    $scope.searchTerm;
    $scope.clearSearchTerm = function() {
      $scope.searchTerm = '';
    };
    $element.find('input').on('keydown', function(ev) {
        ev.stopPropagation();
    });

}])    