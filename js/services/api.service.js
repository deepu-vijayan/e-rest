erestaurant.factory("apiService",["$http", "$q", "baseUrlService", function ($http, $q, baseUrlService){
    var service = {};
    service.login = login;
    service.manageGroup = manageGroup;
    service.manageTax = manageTax;
    service.manageRestaurant = manageRestaurant;
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
    function manageTax(){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/manageTax";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        var data ={
            "count": 15,
            "records":[
            {"name":"AC 3 *","tax":"Berlin","status":1},
            {"name":"Ana Trujillo Emparedados y helados","tax":29,"status":1},
            {"name":"Antonio Moreno Taquería","tax":10,"status":0},
            {"name":"Around the Horn","tax":12,"status":0},
            {"name":"B's Beverages","tax":18,"status":1},
            {"name":"Berglunds snabbköp","tax":9,"status":0},
            {"name":"Blauer See Delikatessen","tax":4,"status":0},
            {"name":"Blondel père et fils","tax":12,"status":1},
            {"name":"Bólido Comidas preparadas","tax":11,"status":1},
            {"name":"Bon app'","tax":14,"status":1},
            {"name":"Bottom-Dollar Marketse","tax":15,"status":0},
            {"name":"Cactus Comidas para llevar","tax":18,"status":0},
            {"name":"Centro comercial Moctezuma","tax":15,"status":1},
            {"name":"Chop-suey Chinese","tax":23,"status":1},
            {"name":"Comércio Mineiro","tax":22,"status":1}
            ]
        } 
        def.resolve(data);
        return def.promise;
    }
    function manageRestaurant(){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/manageRestaurant";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        var data ={
            "count": 15,
            "records":[
            {"name":"AC 3 *","group":"A","status":1},
            {"name":"Ana Trujillo Emparedados y helados","group":"B","status":1},
            {"name":"Antonio Moreno Taquería","group":"B","status":0},
            {"name":"Around the Horn","group":"C","status":0},
            {"name":"B's Beverages","group":"B","status":1},
            {"name":"Berglunds snabbköp","group":"D","status":0},
            {"name":"Blauer See Delikatessen","group":"B","status":0},
            {"name":"Blondel père et fils","group":"B","status":1},
            {"name":"Bólido Comidas preparadas","group":"D","status":1},
            {"name":"Bon app'","group":"E","status":1},
            {"name":"Bottom-Dollar Marketse","group":"B","status":0},
            {"name":"Cactus Comidas para llevar","group":"E","status":0},
            {"name":"Centro comercial Moctezuma","group":"F","status":1},
            {"name":"Chop-suey Chinese","group":"B","status":1},
            {"name":"Comércio Mineiro","group":"B","status":1}
            ]
        } 
        def.resolve(data);
        return def.promise;
    }

}]);