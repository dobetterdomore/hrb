/**
 * Created by A2-20PC on 2016/4/6.
 */


//点击发送请求
backApp.directive("cRequest", ["$cookieStore","pushOrder",function ($cookieStore,pushOrder) {
    return {
        scope:{
            attr1:"@",   //指令
            attr2:"=",   //请求
            attr3:"=",   //响应
            attr4:"="
        },
        link: function($scope, $element, attrs) {

            $element[0].onclick = function () {
                console.log($scope.attr4);
                pushOrder.
                    switchOrder($scope.attr1,$scope.attr2,$scope.attr3,$scope.attr4).
                    success(function (data,status,headers,config) {
                        $scope.attr3 = data;  //响应中需要替换的数据
                    }).
                    error(function (data,status,headers,config) {});
            };



        }
    }
}]);

//直接发送请求
backApp.directive("request",["pushOrder",function (pushOrder) {
    return {
        scope:{
            attr1:"@", //指令
            attr2:"=", //请求
            attr3:"="  //响应
        },
        link: function(scope, element, attrs) {
            pushOrder.
                switchOrder(scope.attr1,scope.attr2,scope.attr3).
                success(function (data,status,headers,config) {
                    scope.attr3 = data;
                }).
                error(function (data,status,headers,config) {})
        }
    }
}]);





backApp.directive("pagination", ["pushOrder",function (pushOrder) {
    return {
        scope:{
            attr1:"@", //指令
            attr2:"=", //请求
            attr3:"=",  //响应
            attr4:"="  //响应
        },
        link: function(scope, element, attrs) {
            scope.attr4 = {
                currentPage: 1,
                totalItems: 2000,
                itemsPerPage: 10,
                pagesLength: 9,
                perPageOptions: [10, 20, 30, 40, 50],
                onChange: function(){
                    console.log(13333)
                }};
            console.log(scope.attr4);
            //pushOrder.
            //            switchOrder(scope.attr1,scope.attr2,scope.attr3).
            //            success(function (data,status,headers,config) {
            //                scope.attr3 = data;
            //                scope.attr4 = {
            //                    currentPage: data.Data.PageNumber,
            //                    totalItems: data.Data.TotalCount,
            //                    itemsPerPage: 10,
            //                    pagesLength: 9,
            //                    perPageOptions: [10, 20, 30, 40, 50],
            //                    onChange: function(){
            //                        console.log(13333)
            //                    }};
            //            }).
            //        error(function (data,status,headers,config) {})
}
    }
}]);




backApp.directive('newlist', function() {
    return {
        restrict: 'EACM',
        templateUrl: "./views/listmode.html",
        replace: true
    };
});

//添加、分类、排序
backApp.directive('operation', function() {
    return {
        restrict: 'EACM',
        scope: {
            someProperty: "@someAttr"
        },
        templateUrl: "./views/opreation.html",
        replace: false
    };
});

backApp.directive("leftList", function () {
    return {
        scope:{
            attr1:"=",
            attr2:"="
        },
        templateUrl: "./views/leftList.html"
    }
});






backApp.directive("sort", function () {
    return {
        scope:{
            attr: "="
        },
        controller: function ($element, $scope) {
            if($scope.attr instanceof Array){
                $scope.nmuber = 0;
                //设置默认排序icon
                $($element).addClass("sort");
                //设置点击排序
                $($element).click(function () {
                    if($scope.nmuber === 0){
                        $scope.nmuber = 1;
                        $($element).removeClass("sort").removeClass("sort_down").addClass("sort_up");
                    }else if($scope.nmuber === 1){
                        $scope.nmuber = 0;
                        $($element).addClass("sort");
                        $($element).removeClass("sort").removeClass("sort_up").addClass("sort_down");
                    }
                });
            }
        }
    }
});

//登录界面
backApp.directive("login", function () {
    return {
        templateUrl: "./views/common/login.html"
    }
});


//右边内容区HTML组件
backApp.directive("rightList", function () {
    return {
        templateUrl: "./views/rightList.html"
    }
});

//右边内容区中表格头的HTML组件
backApp.directive("listTop", function () {
    return {
        replace:true,
        scope:{
            attr:"="
        },
        controller: function ($element,$scope) {
            $scope.listEvent = $scope.attr;
            //数据结构在指令内部改，在外部改无效。
        },
        templateUrl: "./views/common/listTop.html"
    }
});

backApp.directive("test", function () {
    return {
        scope:{
            attr:"="
        },
        controller:function($element,$scope){
            //console.log($scope.attr)
        }
    }
});

//右边内容区中表格内容的HTML组件
backApp.directive("listContent", function () {
    return {
        replace:true,
        scope:{
            viewin:"=",  //引入_view中的属性
            datain:"=",  //引入data
            buttonin:"=",  //引入按钮
            otherin:"=",  //数据结构
            indexin:"="  //序列号
        },
        templateUrl: "./views/common/listContent.html"
    }
});

/*
 * news组件：
 * 1、添加 (newsAdd)
 *
 * */


backApp.directive('newsAdd', function() {
    return {
        restrict: 'EACM',
        scope:{
            ajax:"=",
            view:"="
        },
        templateUrl: "./views/news/add.html"
    };
});





/*
 * 广告组件
 * 1、
 * 2、
 * 3、
 * 4、
 * */

backApp.directive('addBanner', function() {
    return {
        restrict: 'EACM',
        templateUrl: "./views/advertising/addBanner.html"
    };
});

backApp.directive('getform', function() {
    return {
        restrict: 'EACM',
        scope:{
            attr1:"="
        },
        controller: function ($element,$scope) {
            $element.on("change", function () {
                console.log($scope.attr1);
                $scope.attr1 = $element[0].files;

            });

        }
    };
});


/*
 * 表单组件：
 * 1、text
 * 2、date
 * 3、choose
 * 4、largetext
 * 5、files  //有问题，需要改成form表单形式，要不然会有兼容问题。
 * */

backApp.directive('text', function() {
    return {
        restrict: 'EACM',
        scope:{
            attr1:"=",
            attr2:"="
        },
        templateUrl: "./views/form/text.html",
        replace: true
    };
});

backApp.directive('date', function() {
    return {
        restrict: 'EACM',
        scope:{
            attr1:"=",
            attr2:"="
        },
        templateUrl: "./views/form/date.html",
        replace: true
    };
});

backApp.directive('choose', function() {
    return {
        restrict: 'EACM',
        scope:{
            attr1:"=",
            attr2:"=",
            attr3:"="
        },
        templateUrl: "./views/form/select.html",
        replace: true
    };
});

backApp.directive('largetext', function() {
    return {
        restrict: 'EACM',
        scope:{
            attr1:"=",
            attr2:"="
        },

        templateUrl: "./views/form/largetext.html",
        replace: true
    };
});



backApp.directive('ckeditor', function() {
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
            var ckeditor = CKEDITOR.replace(element[0], {

            });
            if (!ngModel) {
                return;
            }
            ckeditor.on('instanceReady', function() {
                ckeditor.setData(ngModel.$viewValue);
            });
            ckeditor.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });
            ngModel.$render = function(value) {
                ckeditor.setData(ngModel.$viewValue);
            };
        }
    };
});


