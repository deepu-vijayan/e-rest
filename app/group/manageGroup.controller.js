erestaurant.controller("ManageGroupControl",["$scope", "apiService", "$state", function($scope, apiService, $state){
    
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

    function init(){
        
        apiService.manageGroup().then(function(data){
            $scope.groups = data;
        },
        function(){
            
        })
    }
    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };
    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }
    init();
}])