erestaurant.controller("ManageRestaurantControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", function($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService){
    $scope.selected = [];
    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };
    $scope.options = {
        rowSelection: false,
        multiSelect: false,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
    };
    $scope.limitOptions = [5, 10, 15];

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };
    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
    $scope.addRestaurant = function(){
        $state.go('layout.addRestaurant');
    }
    $scope.editRestaurant = function(restaurant){
        businessService.setRestaurant(restaurant);
        $state.go('layout.editRestaurant')
    }
    function init(){
        
        apiService.manageRestaurant().then(function(data){
            $scope.restaurantes = data;
        },
        function(){
            
        })
    }
    init();
}])    