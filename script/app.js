/**
 * Created by A2-20PC on 2016/4/6.
 */
    //供应商系统
var backApp = angular.module("backC", ["ngCookies",'ngRoute','ngAnimate']);

backApp.config(["$routeProvider","$httpProvider", function ($routeProvider,$httpProvider) {
    $httpProvider.interceptors.push("interceptor");
    $httpProvider.defaults.transformRequest = function (obj) {
        var str = [],
            p;
        for (p in obj){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
        return str.join("&")
    };
    $httpProvider.defaults.headers.post = {
        "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        'Content-Type':"application/x-www-form-urlencoded"
    };

    $routeProvider.
        when("/shenpi",{ //审批管理
            templateUrl:"./views/page1.html"
        }).
        when("/activity",{ //
            templateUrl:"./views/page2.html"
        }).
        when("/product",{
            templateUrl:"./views/page3.html"
        }).
        when("/afterSale",{
            templateUrl:"./views/page4.html"
        }).
        when("/user",{
            templateUrl:"./views/page5.html"
        }).
        when("/account",{
            templateUrl:"./views/page6.html"
        }).
        when("/resource",{ //library管理
            templateUrl:"./views/page7.html"
        }).
        when("/banner",{ //广告管理
            templateUrl:"./views/page8.html"
        }).
        when("/news",{ //新闻管理
            templateUrl:"./views/page9.html"
        }).
        when("/exchange",{
            templateUrl:"./views/page10.html"
        }).
        when("/job",{
            templateUrl:"./views/page11.html"
        }).
        otherwise({redirectTo:"/"});
}]);
