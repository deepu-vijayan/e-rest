erestaurant.config(function($stateProvider, $urlRouterProvider) {
  
  
      $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "app/login/login.view.html",
            controller: 'LoginControl'
        })
        .state("layout", {
            url: "/layout",
            templateUrl: "app/layout/main.view.html",
            controller: 'MainControl'
        })
        .state("layout.manageGroup", {
            url: "/manage-group",
            views: {
                'main-layout': {
                    templateUrl: "app/group/manage/manageGroup.view.html",
                    controller: 'ManageGroupControl'
                }
            }
        })
        .state("layout.addGroup", {
            url: "/add-group",
            views: {
                'main-layout': {
                    templateUrl: "app/group/add/addGroup.view.html",
                    controller: 'AddGroupControl'
                }
            }
        });
      $urlRouterProvider.when("", "/login");
});    