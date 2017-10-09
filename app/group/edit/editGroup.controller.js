erestaurant.controller("EditGroupControl", ["$scope", "apiService", "$state", "$mdSidenav", "$timeout", "$log", "businessService", "$mdDialog", function ($scope, apiService, $state, $mdSidenav, $timeout, $log, businessService, $mdDialog) {
    this.myDate = new Date();
    $scope.customFullscreen = false;
    init();
    function init() {
        $scope.group = businessService.getGroup();
    }
    $scope.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );
    $scope.cancel = function () {
        $state.go('layout.manageGroup', { "effect": "slide-right" })
    }
    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: RestaurantInGroupControl,
            templateUrl: 'app/group/edit/restaurantInGroup.view.html',
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
    };
    function RestaurantInGroupControl($scope, $mdDialog) {
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
            
            apiService.manageRestaurant().then(function(data){
                $scope.restaurantes = data;
            },
            function(){
                
            })
        }
        init();
    }

}])    