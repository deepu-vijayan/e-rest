erestaurant.controller("EditTaxControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", "$element", function($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService, $element){
    this.myDate = new Date();
    init();
    function init(){
        $scope.tax = businessService.getTax();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function (){
        $state.go('layout.manageTax',{"effect":"slide-right"});
    }
    $scope.restaurantes = ['Royal' ,'Silicon' ,'Seeshore' ,'New India' ,'Dhanya', 'Aryas'];
    $scope.searchTerm;
    $scope.clearSearchTerm = function() {
      $scope.searchTerm = '';
    };
    $element.find('input').on('keydown', function(ev) {
        ev.stopPropagation();
    });
}])    