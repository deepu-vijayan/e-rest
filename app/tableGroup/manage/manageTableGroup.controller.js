erestaurant.controller("ManageTableGroupControl",["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", function($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService){
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
    $scope.editTableGroup = function(tableGroup){
        businessService.setTableGroup(tableGroup);
        $state.go('layout.editTableGroup')
    }
    function init(){
        
        apiService.viewTableGroup().then(function(data){
            $scope.tableGroups = data;
        },
        function(){
            
        })
    }
    init();
    $scope.addTableGroup = function(){
        $state.go('layout.addTableGroup');
    }
}])    