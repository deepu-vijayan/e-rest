erestaurant.run(["$rootScope", "$state", "$stateParams", "$animate", function ($rootScope, $state, $stateParams, $animate ){
    $animate.enabled(true);
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        $rootScope.slideClass = toParams.effect;
        //console.log("$stateChangeStart " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
}])