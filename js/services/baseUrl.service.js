erestaurant.service('baseUrlService', ['$rootScope', function ($rootScope) {

    var getBaseUrl = function (api) {
        var environment = $rootScope.env;
        var baseUrl = "";

        switch (environment) {
        case "uat":
            if (api) {
                baseUrl = "";
            } else {
                baseUrl = "";
            }
            break;
        case "prod":
            if (api) {
                baseUrl = "";
            } else {
                baseUrl = "";
            }
            break;
        }
        return baseUrl;
    }

    return {
        getBaseUrl: getBaseUrl
    }

}]);