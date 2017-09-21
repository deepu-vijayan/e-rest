erestaurant.factory("apiService",["$http", "$q", "baseUrlService", function ($http, $q, baseUrlService){
    var service = {};
    service.login = login;
    service.manageGroup = manageGroup;
    return service;

    function login(data){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/login";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        def.resolve();
        return def.promise;

    }

    function manageGroup(){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/manageGroup";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        var data ={
            "count": 15,
            "records":[
            {"name":"Alfreds Futterkiste","members":"Berlin","status":1},
            {"name":"Ana Trujillo Emparedados y helados","members":"México D.F.","status":1},
            {"name":"Antonio Moreno Taquería","members":"México D.F.","status":0},
            {"name":"Around the Horn","members":"London","status":0},
            {"name":"B's Beverages","members":"London","status":1},
            {"name":"Berglunds snabbköp","members":"Luleå","status":0},
            {"name":"Blauer See Delikatessen","members":"Mannheim","status":0},
            {"name":"Blondel père et fils","members":"Strasbourg","status":1},
            {"name":"Bólido Comidas preparadas","members":"Madrid","status":1},
            {"name":"Bon app'","members":"Marseille","status":1},
            {"name":"Bottom-Dollar Marketse","members":"Tsawassen","status":0},
            {"name":"Cactus Comidas para llevar","members":"Buenos Aires","status":0},
            {"name":"Centro comercial Moctezuma","members":"México D.F.","status":1},
            {"name":"Chop-suey Chinese","members":"Bern","status":1},
            {"name":"Comércio Mineiro","members":"São Paulo","status":1}
            ]
        } 
        def.resolve(data);
        return def.promise;
    }
}]);