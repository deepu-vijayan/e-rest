erestaurant.controller("EditRestaurantControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", "$mdDialog", function ($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService, $mdDialog) {
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
    $scope.addTableGroup = function (){
        $state.go('layout.addTableGroup');
    }
    $scope.viewTableGroup = function(ev){
        $mdDialog.show({
            controller: ViewTableGroupControl,
            templateUrl: 'app/tableGroup/view/viewTableGroup.view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    }

    function ViewTableGroupControl($scope, $mdDialog) {
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
            
            apiService.viewTableGroup().then(function(data){
                $scope.tableGroups = data;
            },
            function(){
                
            })
        }
        init();
    }
}])    