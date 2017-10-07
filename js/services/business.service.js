erestaurant.factory("businessService",["$http", function ($http){
    var service = {};
    service.setGroup = setGroup;
    service.storeValue = storeValue;
    service.getValue = getValue;
    service.getGroup =getGroup;
    service.setTax = setTax;
    service.getTax = getTax;
    service.getRestaurant = getRestaurant;
    service.setRestaurant = setRestaurant;
    var storeValue = function (key, value) {
        sessionStorage.setItem(key, value);
    }

    var getValue = function (key) {
        return sessionStorage.getItem(key);
    }
    function setGroup(group){
        storeValue("editGroup", JSON.stringify(group));
    }
    function getGroup(){
        return JSON.parse(getValue("editGroup"));
    }
    function setTax(tax){
        storeValue("editTax", JSON.stringify(tax));
    }
    function getTax(){
        return JSON.parse(getValue("editTax"));
    }
    function setRestaurant(restaurant){
        storeValue("editRestaurant", JSON.stringify(restaurant));
    }
    function getRestaurant(){
        return JSON.parse(getValue("editRestaurant"));
    }
    return service;
}]);