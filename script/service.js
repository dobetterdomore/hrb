/**
 * Created by A2-20PC on 2016/4/6.
 */
//拦截器
backApp.factory("interceptor",["$q","$cookieStore","infoTransfer","ResultFalse", function ($q,$cookieStore,infoTransfer,ResultFalse) {
    /*
     * 一、对请求进行拦截、添加token和UserUID
     * 二、对响应进行拦截、储存token和UserUID
     * 三、对响应进行拦截、处理错误code
     * */

    /* 三、对响应进行拦截、处理错误code
     * 1、获取code
     * 2、和本地code进行对比
     * 3、弹出框提醒错误信息
     * */

    return {
        'request': function (config) {
            if(config.data){
                if($cookieStore.get("UserUID") && $cookieStore.get("Token")){
                    config.data.Valid = {
                        UserUID:$cookieStore.get("UserUID"),
                        Token:$cookieStore.get("Token")
                    };
                    config.data.Valid = infoTransfer.str(config.data.Valid);

                }else{
                    //登陆框出现
                    $('#myLogin').modal('show')
                }
            }
            console.log("最终发送的请求");
            console.log(config.data);
            return config;
        },
        'response' : function (response) {
            console.log(response.data.Result);
            if(response.data.Result) {
                if (response.data.Result == true) {
                    console.log("Result.True");
                    //请求中的身份验证信息
                    if(response.data.Token){
                        $cookieStore.put("Token", response.data.Token);
                        delete response.data.Token;
                    }else{
                        if(response.data.Data.UserUID){$cookieStore.put("UserUID", response.data.Data.UserUID);}
                        if(response.data.Data.Token){$cookieStore.put("Token", response.data.Data.Token);}


                        delete response.data.Data.Token;
                        delete response.data.Data.UserUID;
                    }

                }
            }else{
                console.log("Result.False");
                //抓取因为错误而生成的token
                if(response.data.Token){
                    $cookieStore.put("Token", response.data.Token);
                    delete response.data.Token;
                }
                else if(response.data.Data){
                    if(response.data.Data.Token){
                        $cookieStore.put("Token", response.data.Data.Token);
                    }
                    if(response.data.Data.UserUID){
                        $cookieStore.put("UserUID", response.data.Data.UserUID);
                    }


                    delete response.data.Data.Token;
                    delete response.data.Data.UserUID;
                }
                //处理错误信息
                //ResultFalse(data.code)
            }
            return response;

        },
        'requestError': function (rejection) {
            return rejection;

        },
        'responseError': function (rejection) {
            return rejection;

        }
    };
}]);


//序列化服务
backApp.factory("infoTransfer",[function () {
    return {
        str: function (a) {
            return JSON.stringify(a);
        }
    }
}]);


//该函数是总成，用于整合所有服务的。
backApp.factory("getData", ["$http","infoTransfer",function ($http,infoTransfer) {
    return {
        sendAjax: function (a,b,c) {
            /*
             * a = url
             * b = 请求数据
             * */


            return $http.post(a,b);
        }
    }
}]);



backApp.factory("pushOrder",["getData","infoTransfer",function(getData,infoTransfer){
    //删除所有为NUll的数据
    function forRequest(a){
        for(x in a){
            if(a[x] === null){
                delete a[x];
            }
        }
        return a;
    }

    var ajaxUrl = {    //这个数据需要放到Controller中！！！！！！！！！！！！！！！！！
        //POST请求接口
        root:"http://a2.bewheat.com:2016/ZZL/",
        common:"CommonHandler.ashx",
        content:"AdminHandler.ashx",
        download:"AdminFileDownload.ashx"
    };
    var url,  //最终地址
        requestParam;  //指令+数据

    //记录每一个接口地址！
    return {
        switchOrder: function (n,p,d,list) {
            /*
             * n：指令
             * p：请求参数
             * d：响应数据
             * index：序列号
             * */
            switch(n){
                //一、COMMON接口
                case "Application_GetList":
                    url = ajaxUrl.root+ajaxUrl.common;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Technique_GetList":
                    url = ajaxUrl.root+ajaxUrl.common;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Library_GetType":
                    url = ajaxUrl.root+ajaxUrl.common;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Files_GetFilesUID":
                    url = ajaxUrl.root+ajaxUrl.common;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Address_GetCountryList":
                    url = ajaxUrl.root+ajaxUrl.common;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Address_GetProvinceList":
                    url = ajaxUrl.root+ajaxUrl.common;
                    p.CountryUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Address_GetCityList":
                    url = ajaxUrl.root+ajaxUrl.common;
                    p.ProvinceUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                case "Address_GetSingleCityInfo":
                    url = ajaxUrl.root+ajaxUrl.common;
                    p.CityUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;


                //二、登录
                case "Login":
                    url = ajaxUrl.root+ajaxUrl.content;
                    requestParam = {
                        Act:n,
                        Param:p
                    };
                    break;
                //三、Banner广告
                case "Banners_Create":
                    url = ajaxUrl.root+ajaxUrl.content;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };

                    break;
                case "Banners_GetSingleInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.BannerUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Banners_Update":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.BannerUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Banners_Delete":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.BannerUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Banners_GetList":

                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                //四、News
                case "News_Create":
                    url = ajaxUrl.root+ajaxUrl.content;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_GetSingleInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.NewsUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_Update":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.NewsUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_Delete":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.NewsUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_SetShowedOrHidden":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.NewsUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_SetTop":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.NewsUID = list.UID;
                    p.SetTop = !list.Showed;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "News_GetList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;

                    //NewsType = 分类按钮
                    // NewsIndex = 排序按钮
                    //KeyWords = 表单输入搜索
                    //PageNumber = 按钮选择页码
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                //五、Library
                case "Library_UploadFile":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.FilesUID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_DelFile":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.UID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_Create":
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.FilesUID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };

                    break;
                case "Library_GetSingleInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_Update":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_Delete":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_Review":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_SetShowedOrHidden":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;
                    p.Showed = !list.Showed;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_SetTop":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.LibraryUID = list.UID;
                    p.SetTop = !list.SetTop;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_GetList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Library_GetFileHtml":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.FilesUID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "LibraryDownload":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.FilesUID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;

                //六、Opportunity
                case "Opportunity_UpdateCollaboration":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ApplicationUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_DeleteCollaboration":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ApplicationUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetSingleCollaborationInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ApplicationUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetCollaborationList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_ReviewCollaboration":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ApplicationUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_SetCollaborationShowedOrHidden":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ApplicationUID = list.UID;
                    p.Showed = !list.Showed;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_DeleteJobRelease":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.JobReleaseUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetSingleJobReleaseInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.JobReleaseUID = list.UID;

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_SetJobReleaseShowedOrHidden":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.JobReleaseUID = list.UID;
                    p.Showed = list.Showed;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetJobReleaseList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_DeleteSampleTest":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.SampleTestUID = list.UID;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    
                    break;
                case "Opportunity_GetSingleSampleTestInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.SampleTestUID = list.UID;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetSampleTestList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_UpdateTechTransfer":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.TechTransferUID = list.UID;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_DeleteTechTransfer":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.TechTransferUID = list.UID;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetSingleTechTransferInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.TechTransferUID = list.UID;
                    
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetTechTransferList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                
                //七、Optical School
                case "OpticalSchool_CreateActivity":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_UpdateActivity":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ActivityUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_DeleteActivity":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ActivityUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "Opportunity_GetSingleActivityInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ActivityUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_GetActivitiesList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_UploadResearchExFile":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_DelResearchExFile":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.UID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_CreateResearchEx":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.FilesUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_GetSingleResearchExInfo":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_UpdateResearchEx":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_DeleteResearchEx":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_ReviewResearchEx":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_SetResearchExShowedOrHidden":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    p.Showed = !list.Showed;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_SetResearchExTop":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.ResearchExUID = list.UID;
                    p.SetTop = !list.SetTop;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_GetResearchExList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.content;
                    //重构请求数据
                    p.PageSize = 10;
                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_GetResearchExFileHtml":

                    break;
                case "OpticalSchool_download":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_CreateVideo":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_UpdateVideo":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_DeleteVideo":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_GetSingleVideoInfo":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_GetVideosList":
                    //确定地址
                    url = ajaxUrl.root+ajaxUrl.download;
                    //重构请求数据

                    requestParam = {
                        Act:n,
                        Param:forRequest(p)
                    };
                    break;
                case "OpticalSchool_SetVideoShowedOrHidden":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
                case "OpticalSchool_SetVideoTop":
                    url = ajaxUrl.root+ajaxUrl.download;
                    break;
            }




            //编译数据
            requestParam.Param = infoTransfer.str(requestParam.Param);

            //发送请求
            return getData.sendAjax(url, requestParam);

        }
    };


    //0、判断动作
}]);







//Result = false 的时候，错误编码对应的错误字段
backApp.factory("ResultFalse",[ function () {
    return function (a) {
        alert(a.Msg);
        console.log(a.Code);
    }
}]);

