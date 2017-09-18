erestaurant.config(function($stateProvider, $urlRouterProvider) {
  
  
      $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "app/login/login.view.html",
            controller: 'LoginControl'
        })
        .state("manageGroup", {
            url: "/manage-group",
            templateUrl: "app/group/manageGroup.view.html",
            controller: 'ManageGroupControl'
        });
      $urlRouterProvider.when("", "/login");
});    