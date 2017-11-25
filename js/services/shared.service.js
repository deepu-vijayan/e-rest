erestaurant.factory("sharedService",["$http", "$q", "baseUrlService", "$mdDialog", "apiService", function ($http, $q, baseUrlService, $mdDialog, apiService){
    var service = {};
    service.viewTables = viewTables;
    service.addTable = addTable;
    return service;

    function viewTables(ev) {
        var defer = $q.defer();
        $mdDialog.show({
            controller: function($scope, $mdDialog){
                $scope.hide = function () {
                    $mdDialog.hide();
                };
        
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
        
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
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

                function init(){
                    
                    apiService.manageTables().then(function(data){
                        $scope.restaurantes = data;
                    },
                    function(){
                        
                    })
                }
                init();
            },
            templateUrl: 'app/table/manage/manageTables.view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
        
    }

    function addTable (ev, group){
        var defer = $q.defer();
        $mdDialog.show({
            controller: function($scope, $mdDialog){
                $scope.hide = function () {
                    $mdDialog.hide();
                };
        
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
        
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
                

                $scope.tableDetails = group;
            },
            templateUrl: 'app/table/add/addTable.view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
    }

    function manageTables (){
        
    }
}]);