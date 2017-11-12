erestaurant.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function($stateProvider, $urlRouterProvider, $httpProvider) {
  
  
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
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.addGroup", {
            url: "/add-group",
            views: {
                'main-layout': {
                    templateUrl: "app/group/add/addGroup.view.html",
                    controller: 'AddGroupControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.editGroup", {
            url: "/edit-group",
            views: {
                'main-layout': {
                    templateUrl: "app/group/edit/editGroup.view.html",
                    controller: 'EditGroupControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.manageTax", {
            url: "/manage-tax",
            views: {
                'main-layout': {
                    templateUrl: "app/tax/manage/manageTax.view.html",
                    controller: 'ManageTaxControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.addTax", {
            url: "/add-tax",
            views: {
                'main-layout': {
                    templateUrl: "app/tax/add/addTax.view.html",
                    controller: 'AddTaxControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.editTax", {
            url: "/edit-tax",
            views: {
                'main-layout': {
                    templateUrl: "app/tax/edit/editTax.view.html",
                    controller: 'EditTaxControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.addRestaurant", {
            url: "/add-restaurant",
            views: {
                'main-layout': {
                    templateUrl: "app/restaurant/add/addRestaurant.view.html",
                    controller: 'AddRestaurantControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.editRestaurant", {
            url: "/edit-restaurant",
            views: {
                'main-layout': {
                    templateUrl: "app/restaurant/edit/editRestaurant.view.html",
                    controller: 'EditRestaurantControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        })
        .state("layout.manageRestaurant", {
            url: "/manage-restaurant",
            views: {
                'main-layout': {
                    templateUrl: "app/restaurant/manage/manageRestaurant.view.html",
                    controller: 'ManageRestaurantControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        }).state("layout.addTableGroup", {
            url: "/add-table-group",
            views: {
                'main-layout': {
                    templateUrl: "app/tableGroup/add/addTableGroup.view.html",
                    controller: 'AddTableGroupControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        }).state("layout.manageTableGroup", {
            url: "/manage-table-group",
            views: {
                'main-layout': {
                    templateUrl: "app/tableGroup/manage/manageTableGroup.view.html",
                    controller: 'ManageTableGroupControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        }).state("layout.editTableGroup", {
            url: "/edit-table-group",
            views: {
                'main-layout': {
                    templateUrl: "app/tableGroup/edit/editTableGroup.view.html",
                    controller: 'EditTableGroupControl'
                }
            },
            params: {
                'effect': 'slide-left'
            }
        });
      $urlRouterProvider.when("", "/login");
}]);    