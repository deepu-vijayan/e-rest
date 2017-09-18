erestaurant.controller("LoginControl",["$scope", "apiService", "$state", function($scope, apiService, $state){
    $scope.login = function (){
        apiService.login($scope.user).then(function(){
                $state.go("manageGroup");
            }, function(){

        })
    }
}])