erestaurant.factory("apiService",["$http", "$q", "baseUrlService", function ($http, $q, baseUrlService){
    var service = {};
    service.login = login;
    service.manageGroup = manageGroup;
    service.manageTax = manageTax;
    service.manageRestaurant = manageRestaurant;
    service.viewTableGroup = viewTableGroup;
    service.manageTables = manageTables;
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
            {"id":1, "name":"Group 1","registrationId":"XER1234","status":"true","description":"test description","registrationDate":"10-10-2017","noRestaurants":7},
            {"id":2, "name":"Group 2","registrationId":"XER1234","status":"false","description":"test description","registrationDate":"10-10-2017","noRestaurants":4},
            {"id":3, "name":"Group 3","registrationId":"XER1234","status":"true","description":"test description","registrationDate":"10-10-2017","noRestaurants":2},
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
            {"id":1, "name":"AC 3 *","tax":12,"status":1},
            {"id":2, "name":"Ana Trujillo Emparedados y helados","tax":29,"status":1},
            {"id":3, "name":"Antonio Moreno Taquería","tax":10,"status":0},
            {"id":4, "name":"Around the Horn","tax":12,"status":0},
            {"id":5, "name":"B's Beverages","tax":18,"status":1},
            {"id":6, "name":"Berglunds snabbköp","tax":9,"status":0},
            {"id":7, "name":"Blauer See Delikatessen","tax":4,"status":0},
            {"id":8, "name":"Blondel père et fils","tax":12,"status":1},
            {"id":9, "name":"Bólido Comidas preparadas","tax":11,"status":1},
            {"id":10, "name":"Bon app'","tax":14,"status":1},
            {"id":11, "name":"Bottom-Dollar Marketse","tax":15,"status":0},
            {"id":12, "name":"Cactus Comidas para llevar","tax":18,"status":0},
            {"id":13, "name":"Centro comercial Moctezuma","tax":15,"status":1},
            {"id":14, "name":"Chop-suey Chinese","tax":23,"status":1},
            {"id":15, "name":"Comércio Mineiro","tax":22,"status":1}
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
            {"id":1, "name":"Royal","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":2, "name":"Silicon ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":3, "name":"Seeshore ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":4, "name":"New India ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":5, "name":"Aryas ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":6, "name":"Dhanya ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":7, "name":"New India ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":8, "name":"Royal","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":9, "name":"Silicon ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":10, "name":"Seeshore ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":11, "name":"New India ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":12, "name":"Aryas ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":13, "name":"Dhanya ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":14, "name":"New India ","group":"Group2","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            ]
        } 
        def.resolve(data);
        return def.promise;
    }
    function viewTableGroup(){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/viewTableGroup";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        var data ={
            "count": 2,
            "records":[
            {"id":1, "name":"Table group AC","status":1,"noTables": 12, "restaurantName": "Royal"},
            {"id":2, "name":"Table group Non AC ","status":1,"noTables": 45, "restaurantName": "Royal"},
            ]
        } 
        def.resolve(data);
        return def.promise;
    }
    function getRestaurantByGroup(){
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
            {"id":1, "name":"Royal","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":2, "name":"Silicon ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":3, "name":"Seeshore ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":4, "name":"New India ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":5, "name":"Aryas ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":6, "name":"Dhanya ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"},
            {"id":7, "name":"New India ","group":"Group1","status":1, "street":"street1", "city": "city1", "district":"district", "state":"kerala", "pin":"234223", "status":"1", "country":"india", "tinNo": "8634635"}
            ]
        } 
        def.resolve(data);
        return def.promise;
    }

    function manageTables(){
        var def = $q.defer();
        var baseUrl = baseUrlService.getBaseUrl(true);
        var url = baseUrl + "/manageTables";

        // $http.post(url, data).then(function (data) {
        //     def.resolve(data.data);
        // }, function (error) {
        //     def.reject("Network/Connection Error");
        // });
        var data ={
            "count": 15,
            "records":[
            {"id":1, "name":"a","seats":"2"},
            {"id":2, "name":"b","seats":"4"},
            {"id":3, "name":"c","seats":"4"},
            {"id":4, "name":"d","seats":"6"},
            {"id":5, "name":"e","seats":"6"},
            {"id":6, "name":"f","seats":"6"},
            {"id":7, "name":"g","seats":"4"},
            {"id":8, "name":"h","seats":"4"},
            {"id":9, "name":"i","seats":"4"},
            {"id":10, "name":"j","seats":"4"},
            {"id":11, "name":"k","seats":"4"},
            {"id":12, "name":"l","seats":"2"},
            {"id":13, "name":"m","seats":"2"},
            {"id":14, "name":"n","seats":"2"},
            ]
        } 
        def.resolve(data);
        return def.promise;
    }

}]);