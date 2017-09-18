erestaurant.factory("apiService",["$http", "$q", "baseUrlService", function ($http, $q, baseUrlService){
    var service = {};
    service.login = login;
    return service;

    function login(data){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/login";
        console.log(data);

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        def.resolve();
        return def.promise;

    }
}]);