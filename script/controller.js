/**
 * Created by A2-20PC on 2016/4/6.
 */



backApp.controller("list",["$scope","$cookieStore","pushOrder", function ($scope,$cookieStore,pushOrder) {

    $scope.date = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();

        return year+"-"+month+"-"+day
    };


    //接口
    //通用接口数据结构录入（完成）
    $scope.common = {
        Application_GetList:{
            request:{},
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "436de36e-0694-44a2-ac68-9b87bdb32189",
                                "EnName": "Analysis Center(Many Application)",
                                "CnName": "多种应用领域"
                            },
                            {
                                "UID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "EnName": "Art / Museum",
                                "CnName": "艺术/博物馆"
                            }
                        ]
                }
            }
        },
        Technique_GetList:{
            request:{},
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "Name": "AFM"
                            }
                        ]
                }
            }
        },
        Library_GetType:{
            request:{},
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "4eb44483-c00c-4b9d-9229-843a7c065d53",
                                "EnName": "Application Note",
                                "CnName": "Application Note"
                            }
                        ]
                }
            }
        },
        Address_GetCountryList:{
            request:{},
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "b684e755-539e-48a5-9e9e-dcca7080b351",
                                "EnName": "China",
                                "CnName": "中国"
                            }
                        ]
                }
            }
        },
        Address_GetProvinceList:{
            request:{
                'CountryUID':'b684e755-539e-48a5-9e9e-dcca7080b351'
            },
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "29a63f7c-4044-4e29-96f5-71a88688c2fd",
                                "CountryUID": "b684e755-539e-48a5-9e9e-dcca7080b351",
                                "EnName": "Anhui",
                                "CnName": "安徽"
                            }
                        ]
                }
            }
        },
        Address_GetCityList:{
            request:{
                'ProvinceUID':'29a63f7c-4044-4e29-96f5-71a88688c2fd'
            },
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "ae88bd02-1ec5-4715-840e-cac2bdef1813",
                                "CountryUID": "b684e755-539e-48a5-9e9e-dcca7080b351",
                                "ProvinceUID": "29a63f7c-4044-4e29-96f5-71a88688c2fd",
                                "EnName": "Anqing",
                                "CnName": "安庆",
                                "Zip": "246000"
                            }
                        ]
                }
            }
        },
        Address_GetSingleCityInfo:{
            request:{
                'CityUID':'ae88bd02-1ec5-4715-840e-cac2bdef1813'
            },
            content:{
                Result:null,
                Data:{
                    "List":
                        [
                            {
                                "UID": "ae88bd02-1ec5-4715-840e-cac2bdef1813",
                                "CountryUID": "b684e755-539e-48a5-9e9e-dcca7080b351",
                                "CCnName": "中国",
                                "CEnName": "China",
                                "ProvinceUID": "29a63f7c-4044-4e29-96f5-71a88688c2fd",
                                "PCnName": "安徽",
                                "PEnName": "Anhui",
                                "EnName": "Anqing",
                                "CnName": "安庆",
                                "Zip": "246000"
                            }
                        ]
                }
            }
        },
        Files_GetFilesUID:{
            request:{},
            content:{
                Result:nll,
                Data:{
                    FilesUID:null
                }

            }
        }
    };
    //登录接口数据结构录入（完成）
    $scope.log = {
        Login:{
            request:{
                'UserID':'demo',
                'UserPwd':'123456'
            },
            content:{
                Result:null,
                content: {
                    "UserName": "Demo",
                    "UserUID": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    "Token": "20161130113247@FDA53C4C993BD5A320A4E08283B5EF7F3AD36DD4",
                    "Power": {
                        "UID": "ebb400a5-fb5b-4a4a-885b-cdfdd6e5fb85",
                        "PowerName": "superUser",
                        "Login": true,
                        "Banners": true,
                        "News": true
                    }
                }
            }
        }
    };
    //新闻接口数据结构录入（完成）
    $scope.news = {
        News_Create:{
            request:{
                'NewsTitle':'this is news title',
                'NewsAbstract':'this is abstract',
                'NewsType':'10',
                'NewsContent':'NewsContent',
                'NewsDate':$scope.date(),
                NewsImg01:null,
                NewsImg02:null
            },
            content:{
                Result:null
            }
        },
        News_Update:{
            request:{
                'NewsUID':'9D954966-0D72-47A4-95EA-0BC9CBB0080B',
                'NewsTitle':'this is news title',
                'NewsAbstract':'this is abstract',
                'NewsType':'10',
                'NewsContent':'NewsContent',
                'NewsDate':$scope.date(),
                NewsImg01:null,
                NewsImg02:null
            },
            content:{
                Result:null
            }
        },
        News_GetSingleInfo :{
            request:{
                'NewsUID':'9D954966-0D72-47A4-95EA-0BC9CBB0080B'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "9d954966-0d72-47a4-95ea-0bc9cbb0080b",
                    "NewsTitle": "this is news title",
                    "NewsAbstract": "this is abstract",
                    "NewsType": 10,
                    "NewsContent": "NewsContent",
                    "NewsImage01": "20141130070740510620.jpg",
                    "NewsImage02": "QQ图片201608021345000620.jpg",
                    "NewsDate": "2016-12-02 00:00:00",
                    "Clicks": 0,
                    "Showed": true,
                    "SetTop": false
                }
            }
        },
        News_Delete:{
            request:{
                'NewsUID':'9D954966-0D72-47A4-95EA-0BC9CBB0080B'
            },
            content:{
                Result:null
            }
        },
        News_SetShowedOrHidden:{
            request:{
                'NewsUID':'5f4ef866-17d3-48e3-90fb-ef7029046ea8',
                'Showed':true
            },
            content:{
                Result:null
            }
        },
        News_SetTop:{
            request:{
                'NewsUID':'5f4ef866-17d3-48e3-90fb-ef7029046ea8',
                'SetTop':true
            },
            content:{
                Result:null
            }
        },
        News_GetList:{
            request:{
                'NewsType':null,
                'NewsIndex':'DateTimeDesc',
                'KeyWords':null,
                'PageSize':null,
                'PageNumber':null
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 1,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "0ba566cc-d76d-4f87-8d72-331bdeb53d65",
                                "NewsTitle": "2aathis is news title",
                                "NewsAbstract": "aathis is abstractaa",
                                "NewsType": 20,
                                "NewsContent": "aaNewsContentaa",
                                "NewsImage01": "NoteBook-013504.jpg",
                                "NewsImage02": "NoteBook-033504.jpg",
                                "NewsDate": "2016-12-04 00:00:00",
                                "Clicks": 2,
                                "Showed": true,
                                "SetTop": false
                            }
                        ]
                }
            }
        }
    };
    //广告接口数据结构录入（完成）
    $scope.advertising = {
        Banners_Create:{
            request:{
                BannerTitle:null,
                LinkHref:null,
                Description:null,
                BannerType:null
            },
            content:{
                Result:null
            }
        },
        Banners_GetSingleInfo:{
            request:{
                BannerUID:null
            },
            content:{
                Result:null,
                Data:{
                    "UID": "66a4da03-451c-438e-9de5-23043055899e",
                    "BannerTitle": "this is banner title",
                    "BannerImg": "14774658894242.png",
                    "LinkHref": "linkhref ",
                    "Description": "this is description",
                    "BannerType": 20,
                    "BannerIndex": 0
                }
            }
        },
        Banners_Update:{
            request:{
                BannerUID:null,
                BannerTitle:null,
                LinkHref:null,
                Description:null,
                BannerType:null
            },
            content:{
                Result:null
            }
        },
        Banners_Delete:{
            request: {
                BannerUID: null
            },
            content:{
                Result:null
            }
        },
        Banners_GetList:{
            request:{
                BannerType:null,  //行为改变
                PageSize:null,
                PageNumber:null  //行为改变
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": null,
                    "PageSize": null,
                    "PageNumber": null,
                    "PageTotal": null,
                    "List":
                        [
                            {
                                "UID":null,
                                "BannerTitle":123,
                                "BannerImg":null,
                                "LinkHref":null,
                                "Description":null,
                                "BannerType":null,
                                "BannerIndex":null
                            }
                        ]
                }
            }
        }
    };
    //Library接口数据结构录入（完成）
    $scope.library = {
        Library_UploadFile:{
            request:{
                FilesUID:null
            },
            content:{       //给labal用的内容介绍信息
                Result:null,
                Data:{
                    "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
                }
            }
        },
        Library_DelFile:{
            request:{
                UID:""
            },
            content:{       //给labal用的内容介绍信息
                Result:null,
                Data:{
                    "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
                }
            }
        },
        Library_Create:{
            request:{
                FilesUID:null,
                Title:null,
                Keywords:null,
                ApplicationUID:null,
                TechniqueUID:null,
                LibraryTypeUID:null,
                Author:null,
                Magagine:null,
                Abstract:null,
                RealContent:null,
                Recommend:null,
                WhoCanRead:null
            },
            content:{
                Result:null
            }
        },
        Library_GetSingleInfo:{
            request:{
                LibraryUID:null
            },
            content:{
                Result:null,
                Data:{
                    "UID": "515c3051-0770-4899-89fb-dd48d40b185b",
                    "FilesUID": "12f9dd65-3f02-4fc8-868f-f431227d4f5a-dnzjvrd4",
                    "Title": "No Title",
                    "Keywords": "No Keywords",
                    "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                    "AppCnName": "艺术/博物馆",
                    "AppEnName": "Art / Museum",
                    "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                    "TechName": "AFM",
                    "LibraryTypeUID": "4eb44483-c00c-4b9d-9229-843a7c065d53",
                    "LibTypeEnName": "Application Note",
                    "LibTypeCnName": "Application Note",
                    "Author": "No Author",
                    "Magagine": "No Magagine",
                    "Abstract": "No Abstract",
                    "RealContent": "No RealContent",
                    "Recommend": "No Recommend",
                    "WhoCanRead": 20,
                    "CreatedDate": "2016-12-16 16:22:26",
                    "ModifiedDate": "2016-12-16 16:22:26",
                    "WhoCreated": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    "ReviewDate": "2016-12-16 16:22:26",
                    "WhoReview": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    "WhoReviewName": "Demo",
                    "FromWhere": true,
                    "Status": 100,
                    "ReviewComments": "",
                    "Showed": true,
                    "SetTop": false,
                    "Clicks": 0,
                    "Files":
                        [
                            {
                                "UID": "9dfd8e39-d10d-4b40-aed4-24d00f79c3d4",
                                "FileName": "20151020-软件系统维护合同.doc",
                                "PageCount": "4"
                            }
                        ]
                }
            }

        },
        Library_Update:{
            request:{
                LibraryUID:null,
                FilesUID:null,
                Title:null,
                Keywords:null,
                ApplicationUID:null,
                TechniqueUID:null,
                LibraryTypeUID:null,
                Author:null,
                Magagine:null,
                Abstract:null,
                RealContent:null,
                Recommend:null,
                WhoCanRead:null
            },
            content:{
                Request: null
            }
        },
        Library_Delete:{
            request:{
                LibraryUID:null
            },
            content:{
                Result:null
            }
        },
        //审核请求
        Library_Review:{
            request:{
                'LibraryUID':'515c3051-0770-4899-89fb-dd48d40b185b',
                'Status': 10,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null
            }
        },
        Library_SetShowedOrHidden:{
            request:{
                LibraryUID:null,
                Showed:null
            },
            content:{
                Result:null
            }
        },
        Library_SetTop:{
            request:{
                LibraryUID:null,
                SetTop:null
            },
            content:{
                Result:null
            }
        },
        Library_GetList:{
            request:{
                LibraryTypeUID:null,
                ApplicationUID:null,
                TechniqueUID:null,
                LibraryIndex:null,
                KeyWords:null,
                PageSize:10,
                PageNumber:1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 1,
                    "List":
                        [
                            {
                                "UID": "90e87b31-2643-4e3a-aad6-3e345002223f",
                                "FilesUID": "12f9dd65-3f02-4fc8-868f-f431227d4f5a-dnzjvrd4",
                                "Title": "No Title",
                                "Keywords": "No Keywords",
                                "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "AppCnName": "艺术/博物馆",
                                "AppEnName": "Art / Museum",
                                "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "TechName": "AFM",
                                "LibraryTypeUID": "4eb44483-c00c-4b9d-9229-843a7c065d53",
                                "LibTypeEnName": "Application Note",
                                "LibTypeCnName": "Application Note",
                                "Author": "No Author",
                                "Magagine": "No Magagine",
                                "Abstract": "No Abstract",
                                "RealContent": "No RealContent",
                                "Recommend": "No Recommend",
                                "WhoCanRead": 20,
                                "CreatedDate": "2016-12-16 16:24:55",
                                "ModifiedDate": "2016-12-16 16:24:55",
                                "WhoCreated": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "ReviewDate": "2016-12-18 14:38:22",
                                "WhoReview": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                                "WhoReviewName": "Demo",
                                "FromWhere": false,
                                "Status": 100,
                                "ReviewComments": "No Reason.",
                                "Showed": true,
                                "SetTop": true,
                                "Clicks": 0
                            }
                        ]
                }
            }
        },
        Library_GetFileHtml:{
            request:{
                FileUID:null
            },
            content:{
                Result:null,
                Data:{
                    "FileName": "bb.pptx",
                    "Content": null
                }
            }
        },
        download:{
            request:{
                FileUID:null
            }
        }
    };
    //Opportunity接口数据结构录入（完成）
    $scope.oppounity = {
        Opportunity_UpdateCollaboration:{
            request:{
                'ApplicationUID':'74cf3db2-d52b-4175-b15d-48499cd98887',
                'Company':'my company',
                'CityUID':'ae88bd02-1ec5-4715-840e-cac2bdef1813',
                'Telephone':'my Telephone',
                'Email':'Email@myaaa.com',
                'Description':'my description'
            },
            content:{
                Result:null
            }
        },
        Opportunity_DeleteCollaboration :{
            request:{
                'ApplicationUID':'74cf3db2-d52b-4175-b15d-48499cd98887'
            },
            content:{
                Result:null
            }
        },
        Opportunity_GetSingleCollaborationInfo:{
            request:{
                'ApplicationUID':'bf352934-2141-4bca-b8f5-8d715d4b6851'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "bf352934-2141-4bca-b8f5-8d715d4b6851",
                    "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                    "Company": "my company",
                    "CityUID": "ae88bd02-1ec5-4715-840e-cac2bdef1813",
                    "Telephone": "my Telephone",
                    "Email": "Email@myaaa.com",
                    "Description": "my description",
                    "Image": "20161222132215LD42JN80.jpg",
                    "Status": 0,
                    "AppliedDate": "2016-12-22 13:22:15",
                    "WhoReview": "",
                    "ReviewComments": "",
                    "Showed": true
                }
            }
        },
        Opportunity_GetCollaborationList:{
            request:{
                'ApplicationIndex':'DateTimeDesc',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 1,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "74cf3db2-d52b-4175-b15d-48499cd98887",
                                "Company": "my company",
                                "CityUID": "ae88bd02-1ec5-4715-840e-cac2bdef1813",
                                "Telephone": "my Telephone",
                                "Email": "Email@myaaa.com",
                                "Description": "my description",
                                "Image": "20161222103010HB022008.jpg",
                                "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5"
                            }
                        ]
                }
            }
        },
        Opportunity_ReviewCollaboration:{
            request:{
                'ApplicationUID':'bf352934-2141-4bca-b8f5-8d715d4b6851',
                'Status': 10,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null
            }
        },
        Opportunity_SetCollaborationShowedOrHidden:{
            request:{
                ApplicationUID:null,
                Showed:null
            },
            content:{
                Result: null,
                Token: null
            }
        },
        Opportunity_DeleteJobRelease:{
            request:{
                'JobReleaseUID':'df03a1f0-7d95-41fe-bf3a-1bf5de15997b'
            },
            content:{
                Result:null
            }
        },
        Opportunity_GetSingleJobReleaseInfo:{
            request:{
                'JobReleaseUID':'df03a1f0-7d95-41fe-bf3a-1bf5de15997b'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "c2041be8-1a93-4526-ab4e-2e629c50192e",
                    "JobName": "JobName",
                    "Address": "Address",
                    "Email": "Email@adom.com",
                    "CityUID": "d44783bc-e303-4fd7-badf-356d2fa2200a",
                    "Telephone": "telephone",
                    "ContactPerson": "Contactperson",
                    "ExpirationDate": "2012-12-28 00:00:00",
                    "Description": "description",
                    "JobType": 10,
                    "Showed": true
                }
            }
        },
        Opportunity_SetJobReleaseShowedOrHidden:{
            request:{
                'JobReleaseUID':'c2041be8-1a93-4526-ab4e-2e629c50192e',
                Showed: false
            },
            content:{
                Result:null
            }
        },
        Opportunity_GetJobReleaseList:{
            request:{
                'JobReleaseIndex ':' CreatedDateTime',
                ' JobType ':10,
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 4,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 4,
                    "List":
                        [
                            {
                                UID: "b67a595f-0c60-494a-8681-eb5994d056cb",
                                "JobName": "JobName",
                                "Address": "Address",
                                "Email": "Email@adom.com",
                                "CityUID": "d44783bc-e303-4fd7-badf-356d2fa2200a",
                                "Telephone": "telephone",
                                "ContactPerson": "Contactperson",
                                "ExpirationDate": "2012-12-28 00:00:00",
                                "CreatedDate": "2016-12-26 12:12:20",
                                "Description": "description",
                                "JobType": 10, "Showed": true
                            }
                        ]
                }
            }
        },
        Opportunity_DeleteSampleTest:{
            request:{
                'SampleTestUID':'ed2bed4e-37a6-4a42-90de-8649e1e331cf'
            },
            content:{
                Result:null
            }
        },
        Opportunity_GetSingleSampleTestInfo:{
            request:{
                'SampleTestUID':'6badda70-d1f3-4552-96fe-7ed76da8e9ce'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "6badda70-d1f3-4552-96fe-7ed76da8e9ce",
                    "ApplyUID": "ef8c34e9-ce69-4fdf-93e7-4ffa9688414f",
                    "TargetUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                    "Name": "Name",
                    "Phone": "Phone",
                    "Email": "Email@email.com",
                    "Organization": "Organization",
                    "Responsible": "Responsible",
                    "ResearchArea": "ResearchArea",
                    "PurposeOfMeasurement": "PurposeOfMeasurement",
                    "SampleInformation": "SampleInformation",
                    "ExpectationOfTheResult": "ExpectationOfTheResult",
                    "HistoryOfSampleMeasurements": "HistoryOfSampleMeasurements",
                    "Requirements": "Requirements",
                    "Notes": "Notes",
                    "AppliedDate": "2016-12-23 13:47:58",
                    "ReviewComments": "",
                    "Status": 0
                }
            }
        },
        Opportunity_GetSampleTestList:{
            request:{
                'SampleTestIndex ':'DateTimeDesc',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 3,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 3,
                    "List":
                        [
                            {
                                "UID": "4720ba36-51ed-4fad-a4c4-d5227dcfbd9c",
                                "ApplyUID": "ef8c34e9-ce69-4fdf-93e7-4ffa9688414f",
                                "TargetUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "Name": "Name",
                                "Phone": "Phone",
                                "Email": "Email@email.com",
                                "Organization": "Organization",
                                "Responsible": "Responsible",
                                "ResearchArea": "ResearchArea",
                                "PurposeOfMeasurement": "PurposeOfMeasurement",
                                "SampleInformation": "SampleInformation",
                                "ExpectationOfTheResult": "ExpectationOfTheResult",
                                "HistoryOfSampleMeasurements": "HistoryOfSampleMeasurements",
                                "Requirements": "Requirements",
                                "Notes": "Notes",
                                "AppliedDate": "2016-12-23 13:48:17",
                                "ReviewComments": "",
                                "Status": 0
                            }
                        ]
                }
            }
        },
        Opportunity_UpdateTechTransfer:{
            request:{
                'TechTransferUID':'4e12613e-c0ba-46d5-b655-73b7e5a7c1c8',
                'Name':'name',
                'Phone':'pnhone',
                'Email':'mail@mail.con',
                'Organization':'orgnaizaiton',
                'ResearchArea':'researcharea',
                'Department':'departmen',
                'Technology':'technology',
                'Description':'description'
            },
            content:{
                Result:null
            }
        },
        Opportunity_DeleteTechTransfer:{
            request:{
                'TechTransferUID':'4e12613e-c0ba-46d5-b655-73b7e5a7c1c8'
            },
            content:{
                Result:null
            }
        },
        Opportunity_GetSingleTechTransferInfo:{
            request:{
                'TechTransferUID':' 09936509-d615-41fa-8a08-17b8e4b8358e'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "e8ae2331-7831-4fc6-929f-9eaf610dc367",
                    "Name": "nameaaa",
                    "Phone": "pnhonebb",
                    "Email": "mail@mail.con",
                    "Organization": "orgnaizaiton",
                    "ResearchArea": "researcharea",
                    "Department": "departmen",
                    "Technology": "technology",
                    "Description": "description",
                    "CreatedDate": "2016-12-27 14:07:26",
                    "WhoCreated": "178cd187-adf3-41c4-bd69-b99e88b477c5"
                }
            }
        },
        Opportunity_GetTechTransferList:{
            request:{
                'TechTransferIndex ':'DateTime',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 4,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 4,
                    "List":
                        [
                            {
                                "UID": "7c94ef5f-ffcf-4536-9773-271f9b15c58c",
                                "Name": "name",
                                "Phone": "pnhone",
                                "Email": "mail@mail.con",
                                "Organization": "orgnaizaiton",
                                "ResearchArea": "researcharea",
                                "Department": "departmen",
                                "Technology": "technology",
                                "Description": "description",
                                "CreatedDate": "2016-12-27 14:08:03",
                                "WhoCreated": "178cd187-adf3-41c4-bd69-b99e88b477c5"
                            }
                        ]
                }
            }
        }
    };
    //School接口数据结构录入（完成）
    $scope.school = {
        OpticalSchool_CreateActivity:{
            request:{
                'ActivityName':'ActivityName',
                'Keywords':'Keywords',
                'StartDate':'2016-12-29',
                'EndDate':'2017-01-20',
                'MaxCount':300,
                'Points':10,
                'WhoCanRead':0,
                'WhoCanJoin':10,
                'ShowStatus':30,
                'CityUID':'d44783bc-e303-4fd7-badf-356d2fa2200a',
                'Organizer':'Organizerkkkk',
                ' ActivityType':10,
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'Contents':'contents',
                'Links':'links'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_UpdateActivity:{
            request:{
                'ActivityUID':'e71620eb-6e9a-4052-8f6f-07035a8eaa7b',
                'ActivityName':'ActivityName',
                'Keywords':'Keywords',
                'StartDate':'2016-12-29',
                'EndDate':'2017-01-20',
                'MaxCount':300,
                'Points':10,
                'WhoCanRead':0,
                'WhoCanJoin':10,
                'ShowStatus':30,
                'CityUID':'d44783bc-e303-4fd7-badf-356d2fa2200a',
                'Organizer':'Organizerkkkk',
                ' ActivityType':10,
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'Contents':'contents',
                'Links':'links'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_DeleteActivity:{
            request:{
                'ActivityUID':'fd1bc481-9f35-4e7b-976f-1872bc30ad2d'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_GetSingleActivityInfo:{
            request:{
                'ActivityUID':'fd1bc481-9f35-4e7b-976f-1872bc30ad2d'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_GetActivitiesList:{
            request:{
                'ActivityType':10,
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'ActivityIndex':' Country ',
                ' StartDate':'2008-01-01',
                ' EndDate':'2020-12-20',
                'ShowStatus':30,
                'KeyWords':'w',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 6,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 6,
                    "List":
                        [
                            {
                                "UID": "b2871da0-b84c-49e7-913d-2482258d4fb2",
                                "ActivityName": "ActivityName",
                                "Keywords": "Keywords",
                                "Clicks": 0,
                                "StartDate": "2016-12-29 00:00:00",
                                "EndDate": "2017-01-20 00:00:00",
                                "MaxCount": 300,
                                "SignInCount": 0,
                                "Points": 10,
                                "WhoCanRead": 0,
                                "WhoCanJoin": 10,
                                "ShowStatus": 30,
                                "CityUID": "d44783bc-e303-4fd7-badf-356d2fa2200a",
                                "Organizer": "Organizerkkkk",
                                "ActivityType": 10,
                                "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "Contents": "contents",
                                "Links": "links",
                                "CreatedDate": "2016-12-29 10:48:21"
                            }
                        ]
                }
            }
        },
        OpticalSchool_UploadResearchExFile:{
            request:{
                'FilesUID': '1fd24fc6-d0b8-4c4b-a273-dcb236525d98-8ljxxd2n'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
                }
            }
        },
        OpticalSchool_DelResearchExFile:{
            request:{
                "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
            },
            content:{
                Result:null,
                Data:{
                    "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
                }
            }
        },
        OpticalSchool_CreateResearchEx:{
            request:{
                'FilesUID':'1fd24fc6-d0b8-4c4b-a273-dcb236525d98-8ljxxd2n',
                'Title':'No Title',
                'Keywords':'No Keywords',
                'ResearchExType':10,
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'CityUID':'4e1268c3-b8be-4128-aee6-9be15e9c621f',
                'Author':'No Author',
                'Description':'No Descriptione',
                'RealContent':'No RealContent',
                'WhoCanRead':20
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_GetSingleResearchExInfo:{
            request:{
                'ResearchExUID':'394bf46b-5b55-49b9-873e-7da726995b74'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "394bf46b-5b55-49b9-873e-7da726995b74",
                    "FilesUID": "1fd24fc6-d0b8-4c4b-a273-dcb236525d98-8ljxxd2n",
                    "Title": "No Title",
                    "Keywords": "No Keywords",
                    "ResearchExType": 10,
                    "CityUID": "4e1268c3-b8be-4128-aee6-9be15e9c621f",
                    "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                    "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                    "Author": "No Author",
                    "Description": "No Descriptione",
                    "RealContent": "No RealContent",
                    "WhoCanRead": 20,
                    "CreatedDate": "2017-01-03 00:24:47",
                    "ModifiedDate": "2017-01-03 00:24:47",
                    "WhoCreated": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    "ReviewDate": "2017-01-03 00:24:47",
                    "WhoReview": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    "FromWhere": true,
                    "Status": 100,
                    "ReviewComments": "",
                    "Showed": true,
                    "SetTop": false,
                    "Clicks": 0,
                    "Files":
                        [
                            {
                                "UID": "0bca90d8-33be-4534-a117-84ed0ab69aba",
                                "FileName": "THE UNIVERSITY OF WINNIPE1.docx",
                                "PageCount": "1"
                            }
                        ]
                }
            }
        },
        OpticalSchool_UpdateResearchEx:{
            request:{
                'ResearchExUID':'394bf46b-5b55-49b9-873e-7da726995b74',
                'Title':'aNo Title',
                'Keywords':'aNo Keywords',
                'ResearchExType':10,
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'CityUID':'4e1268c3-b8be-4128-aee6-9be15e9c621f',
                'Author':'aNo Author',
                'Description':'aNo Descriptione',
                'RealContent':'aNo RealContent',
                'WhoCanRead':20
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_DeleteResearchEx:{
            request:{
                'ResearchExUID':'394bf46b-5b55-49b9-873e-7da726995b74'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_ReviewResearchEx:{
            request:{
                'ResearchExUID':'515c3051-0770-4899-89fb-dd48d40b185b',
                'Status': 10,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_SetResearchExShowedOrHidden:{
            request:{
                'ResearchExUID':'90e87b31-2643-4e3a-aad6-3e345002223f',
                'Showed':true
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_SetResearchExTop:{
            request:{
                'ResearchExUID':'90e87b31-2643-4e3a-aad6-3e345002223f',
                'SetTop':true
            },
            content:{
                Result:null
            }
        },
        OpticalSchool_GetResearchExList:{
            request:{
                'ResearchExType':10,
                'ApplicationUID':'4eb44483-c00c-4b9d-9229-843a7c065d53',
                'TechniqueUID':'4eb44483-c00c-4b9d-9229-843a7c065d53',
                'ResearchExIndex':'DateTimeDesc',
                'KeyWords':'2',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 4,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 4,
                    "List":
                        [
                            {
                                "UID": "2a1b7649-a0b3-4d55-b995-73f12f7fead0",
                                "FilesUID": "1fd24fc6-d0b8-4c4b-a273-dcb236525d98-8ljxxd2b",
                                "Title": "No Title",
                                "Keywords": "No Keywords",
                                "ResearchExType": 10, "CityUID": "4e1268c3-b8be-4128-aee6-9be15e9c621f",
                                "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "Author": "No Author",
                                "Description": "No Descriptione",
                                "RealContent": "No RealContent",
                                "WhoCanRead": 20,
                                "CreatedDate": "2017-01-03 00:25:22",
                                "ModifiedDate": "2017-01-03 00:25:22",
                                "WhoCreated": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                                "ReviewDate": "2017-01-04 14:00:02",
                                "WhoReview": "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                                "FromWhere": true,
                                "Status": 100,
                                "ReviewComments": "No Reason.",
                                "Showed": true,
                                "SetTop": true,
                                "Clicks": 0
                            }
                        ]
                }
            }
        },
        downLoad:{
            request:{
                'FileUID':'25eaa840-4355-4136-adf9-18125c4eef92'
            }
        },
        OpticalSchool_CreateVideo:{
            request:{
                ActivityName:'ActivityName',
                Keywords:'Keywords',
                StartDate:'2016-12-29',
                EndDate:'2017-01-20',
                MaxCount:300,
                Points:10,
                WhoCanRead:0,
                WhoCanJoin:10,
                ShowStatus:30,
                CityUID:'d44783bc-e303-4fd7-badf-356d2fa2200a',
                Organizer:'Organizerkkkk',
                ActivityType:10,
                ApplicationUID:'0c036878-f162-4aab-a59a-a3a0c68ca058',
                TechniqueUID:'f58c107b-827a-4f3f-935c-8c964013cb92',
                Contents:'contents',
                Links:'links'
            },
            content:{
                Result: null,
                Token: null
            }
        },
        OpticalSchool_UpdateVideo:{
            request:{
                VideoUID:'c29b003e-6893-4977-8cfe-c26eddb6c94b',
                VideoName:'VideoName',
                Keywords:'Keywords',
                CityUID:'8c230a56-d26b-433d-b03c-2f66b01b1a8d',
                Author:'Author',
                VideoType:10,
                ApplicationUID:'0c036878-f162-4aab-a59a-a3a0c68ca058',
                TechniqueUID:'f58c107b-827a-4f3f-935c-8c964013cb92',
                Description:'Description',
                Contents:'Contents',
                Links:'Link',
                WhoCanRead:0
            },
            content:{
                Result: null,
                Token: null
            }
        },
        OpticalSchool_DeleteVideo:{
            request:{
                VideoUID:' f0d43a8a-1b0c-4885-bf35-4f115e0ce5f6'
            },
            content:{
                Result: null,
                Token: null
            }
        },
        OpticalSchool_GetSingleVideoInfo:{
            request:{
                VideoUID:' f0d43a8a-1b0c-4885-bf35-4f115e0ce5f6'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "c29b003e-6893-4977-8cfe-c26eddb6c94b",
                    "VideoName": "UpdateVideoName",
                    "Keywords": "Keywords",
                    "CityUID": "8c230a56-d26b-433d-b03c-2f66b01b1a8d",
                    "Author": "Author",
                    "VideoType": 10,
                    "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                    "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                    "Description": "Description",
                    "Contents": "Contents",
                    "Links": "Link",
                    "Image": "2017010513202866NXDFL4.jpg",
                    "WhoCanRead": 0,
                    "CreatedDate": "2017-01-05 12:53:19"
                }
            }
        },
        OpticalSchool_GetVideosList:{
            request:{
                VideoType:10,
                ApplicationUID:'0c036878-f162-4aab-a59a-a3a0c68ca058',
                TechniqueUID:' f58c107b-827a-4f3f-935c-8c964013cb92',
                VideoIndex:'VideoName',
                KeyWords:'w',
                PageSize:1,
                PageNumber:1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 4,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 4,
                    "List":
                        [
                            {
                                "UID": "c29b003e-6893-4977-8cfe-c26eddb6c94b",
                                "VideoName": "UpdateVideoName",
                                "Keywords": "Keywords",
                                "CityUID": "8c230a56-d26b-433d-b03c-2f66b01b1a8d",
                                "Author": "Author",
                                "VideoType": 10,
                                "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "Description": "Description",
                                "Contents": "Contents",
                                "Links": "Link",
                                "Image": "2017010513202866NXDFL4.jpg",
                                "WhoCanRead": 0,
                                "Showed": true,
                                "SetTop": false,
                                "CreatedDate": "2017-01-05 12:53:19"
                            }
                        ]
                }
            }
        },
        OpticalSchool_SetVideoShowedOrHidden:{
            request:{
                VideoUID:'c29b003e-6893-4977-8cfe-c26eddb6c94b',
                Showed:true
            },
            content:{
                Result: null,
                Token: null
            }
        },
        OpticalSchool_SetVideoTop:{
            request:{
                VideoUID:'c29b003e-6893-4977-8cfe-c26eddb6c94b',
                SetTop:true
            },
            content:{
                Result: null,
                Token: null
            }
        }
    };
    //Comments接口数据结构录入（完成）
    $scope.comments = {
        Comments_Update:{
            request:{
                'CommentUID':'c7e512f9-e503-4b70-b0c2-08fb707b2251',
                'Comments':'my comments'
            },
            content:{
                Result:null
            }
        },
        Comments_Delete:{
            request:{
                'CommentUID':'c7e512f9-e503-4b70-b0c2-08fb707b2251'
            },
            content:{
                Result:null,
                Data:{}
            }
        },
        Comments_GetSingleInfo:{
            request:{
                'CommentUID': '9c7cd015-4e40-4f06-9802-a9de495be118'
            },
            content:{
                Result:null,
                Data:{
                    "UID": "9c7cd015-4e40-4f06-9802-a9de495be118",
                    "CommentType": 10,
                    "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                    "ArticleUID": "90e87b31-2643-4e3a-aad6-3e345002223f",
                    "Comments": "aaaamy comments",
                    "CreatedDate": "2017-01-09 13:15:18"
                }
            }
        },
        Comments_GetList:{
            request:{
                'CommentIndex':'DateTiumeDesc',
                'ArticleUID':'90e87b31-2643-4e3a-aad6-3e345002223f',
                'UserUID':'178cd187-adf3-41c4-bd69-b99e88b477c5',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                Result:null,
                Data:{
                    "TotalCount": 3,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 3,
                    "List":
                        [
                            {
                                "UID": "9c7cd015-4e40-4f06-9802-a9de495be118",
                                "CommentType": 10,
                                "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "ArticleUID": "90e87b31-2643-4e3a-aad6-3e345002223f",
                                "Comments": "aaaamy comments",
                                "CreatedDate": "2017-01-09 13:15:18"
                            }
                        ]
                }
            }
        }
    };
    //AfterSalePerson接口数据结构录入（完成）
    $scope.afterSale = {
        Products_CreateAfterSalesServiceStaff:{
            request:{
                Name:'staff name',
                Phone:'staff phone'
            },
            content:{
                Result:null
            }
        },
        Products_UpdateAfterSalesServiceSatff:{
            request:{
                StaffUID:'626cf063-e593-4015-a37e-25ecdcd8fecf',
                Name:'staff name',
                Phone:'staff phone'
            },
            content:{
                Result:null
            }
        },
        Products_DeleteAfterSalesServiceSatff:{
            request:{
                StaffUID:'626cf063-e593-4015-a37e-25ecdcd8fecf'
            },
            content:{
                Result:null
            }
        },
        Products_GetSingleAfterSalesServiceSatffInfo:{
            request:{
                StaffUID:'bcb7cd80-2a06-4b4d-adbc-692b7b8da1f2'
            },
            content:{
                Result:null,
                Data: {
                    "UID": "bcb7cd80-2a06-4b4d-adbc-692b7b8da1f2", 
                    "Name": "staff name", 
                    "Phone": "staff phone",
                    "CreatedDate": "2017-01-12 10:10:32" 
                }
            }
        },
        Products_GetAfterSalesServiceSatffList:{
            request:{
                StaffIndex:'DateTime',
                KeyWords:'s',
                PageSize:1,
                PageNumber:1
            },
            content:{
                Result:null,
                Data: {
                    TotalCount: 3,
                    PageSize: 1,
                    PageNumber: 1,
                    PageTotal: 3,
                    List:
                        [
                            {
                                UID: "77f69f00-b46d-4679-b7ff-fd5143227dde",
                                Name: "staff name",
                                Phone: "staff phone",
                                CreatedDate: "2017-01-12 10:10:01"
                            }
                        ]
                }
            }
        }
    };
    //PeocutSystem接口数据结构录入（完成）
    $scope.product = {
        Products_UploadProductFile:{
            request:{
                'FilesUID': '1fd24fc6-d0b8-4c4b-a273-dcb236525d98-8ljxxd2n'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
                }
            }
        },
        Products_DelProductFile:{
            request:{
                "UID": "056b4b50-16cf-4e20-b414-3a38839a9cda"
            },
            content:{}
        },
        Products_CreateProduct:{
            request:{
                'FilesUID':'6fe74b15-79d0-4f5b-ab14-54676e308643-lrj0426z',
                'ProductsName':'Products Name',
                'Model':'Model',
                'Introduction':'Introduction',
                'WarrantyDays':200,
                'ApplicationField':'applicationField',
                'SoftwareVersion':'softwareversion',
                'SerialNumber':'serialNuambe',
                'Notes':'the Notes',
                'AfterSalesServiceSatffUID':''
            },
            content:{}
        },
        Products_UpdateProduct:{
            request:{
                'ProductUID':'0d563b6c-0511-4bf9-b987-77e631242763',
                'ProductsName':'Products Name',
                'Model':'Model',
                'Introduction':'Introduction',
                'WarrantyDays':200,
                'ApplicationField':'applicationField',
                'SoftwareVersion':'softwareversion',
                'SerialNumber':'serialNuambe',
                'Notes':'the Notes',
                'AfterSalesServiceSatffUID':''
            },
            content:{}
        },
        Products_DeleteProduct:{
            request:{
                ProductUID:'0d563b6c-0511-4bf9-b987-77e631242763'
            },
            content:{}
        },
        Products_GetSingleProductInfo:{
            request:{
                ProductUID:'387d9f32-4ce2-4898-85ca-320afdcb4219'
            },
            content:{
                Result: true,
                Data: {
                    UID: "387d9f32-4ce2-4898-85ca-320afdcb4219",
                    FilesUID: "0b405812-f27d-4341-b269-90e498a445bd-86b64pt0",
                    ProductsName: "Products Name",
                    Image: "20170112133824D862RHLP.jpg",
                    Model: "Model",
                    Introduction: "Introduction",
                    WarrantyDays: "200",
                    ApplicationField: "applicationField",
                    SoftwareVersion: "softwareversion",
                    SerialNumber: "serialNuambe",
                    Notes: "the Notes",
                    AfterSalesServiceSatffUID: "",
                    CreatedDate: "2017-01-12 13:38:24",
                    WhoCreated: "588b6bf5-fb3c-4c49-bb66-6a94680ee50b",
                    Files: []
                }
            }
        },
        Products_GetProductList:{
            request:{
                ProductIndex: 'ProductsName',
                KeyWords:'a',
                PageSize:1,
                PageNumber:1
            },
            content:{
                Result: true,
                Data: {
                    TotalCount: 2,
                    PageSize: 1,
                    PageNumber: 1,
                    PageTotal: 2,
                    List:
                        [
                            {
                                UID: "387d9f32-4ce2-4898-85ca-320afdcb4219",
                                FilesUID: "0b405812-f27d-4341-b269-90e498a445bd-86b64pt0",
                                ProductsName: "Products Name",
                                Image: "20170112133824D862RHLP.jpg",
                                Model: "Model",
                                Introduction: "Introduction",
                                WarrantyDays: "200",
                                ApplicationField: "applicationField",
                                SoftwareVersion: "softwareversion",
                                SerialNumber: "serialNuambe",
                                Notes: "the Notes",
                                AfterSalesServiceSatffUID: "",
                                CreatedDate: "2017-01-12 13:38:24",
                                WhoCreated: "588b6bf5-fb3c-4c49-bb66-6a94680ee50b"
                            }
                        ]
                }
            }
        },
        Products_GetProductFileHtml:{
            request:{
                FileUID:null
            },
            content:{
                Result: null,
                Data: {
                    FileName: null,
                    Content:null
                }
            }
        },
        download:{
            request:{
                FileUID:null
            }
        }
    };
    //Points接口数据结构录入（完成）
    $scope.points = {
        Points_DeleteRequire:{
            request:{
                'PointRequireUID':'b1e960a4-87c5-4d1d-89e8-ff49974cea32'
            },
            content:{
                Result:null,
                Data:{}
            }
        },
        Points_UpdateRequire:{
            request:{
                'PointRequireUID':'e10f5803-4fd9-4940-af5e-725e85fa9cee',
                'Type':10,
                'Description':'aabbhere description'
            },
            content:{
                Result:null,
                Data:{}
            }
        },
        Points_GetSingleRequireInfo:{
            request:{
                'PointRequireUID':' e10f5803-4fd9-4940-af5e-725e85fa9cee'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "e10f5803-4fd9-4940-af5e-725e85fa9cee",
                    "Type": 10,
                    "Points": 0,
                    "Description": "aabbhere description",
                    "CreatedDate": "2017-01-15 09:11:19",
                    "ReviewDate": "",
                    "WhoReview": "",
                    "Status": 0
                }
            }
        },
        Points_GetRequireList:{
            request:{
                'PointRequireIndex':'DateTimeDesc',
                'Status':0,
                'UserUID':'178cd187-adf3-41c4-bd69-b99e88b477c5',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 3,
                    "PageSize": 10,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "6466b70f-669c-4da7-907b-9644802ce860",
                                "Type": 10,
                                "Points": 0,
                                "Description": "here description",
                                "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "CreatedDate": "2017-01-15 09:11:36",
                                "ReviewDate": "",
                                "WhoReview": "",
                                "Status": 0
                            }
                        ]
                }
            }
        },
        Points_ReviewRequire:{
            request:{
                'PointRequireUID':'e10f5803-4fd9-4940-af5e-725e85fa9cee',
                'Status': 100,
                'Points': 100,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null,
                Data:{}
            }
        },
        Points_GetPointsHistoryList:{
            request:{
                'PointsHistoryIndex':'DateTimeDesc',
                'UserUID':'178cd187-adf3-41c4-bd69-b99e88b477c5',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 4,
                    "PageSize": 10,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "847bcd20-e332-4526-a4cf-9c11be8195ad",
                                "PointRulerUID": "2053e8e1-f13f-48db-97f5-f240d2d8cb4b",
                                "PointType": 0,
                                "Point": 100,
                                "Description": "Require Points",
                                "RelevantID": "e10f5803-4fd9-4940-af5e-725e85fa9cee",
                                "UserUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "CreatedDate": "2017-01-15 10:57:14"
                            }
                        ]
                }

            }
        }
    };
    //GiftMarketManagement接口数据结构录入（完成）
    $scope.exchange = {
        Gifts_CreateGift:{
            request:{
                'GiftTitle':'giftstitle',
                'Description':'description',
                'Points':20,
                'GiftType':10,
                'Parameter':'parameter',
                'Contents':'contents'
            },
            content:{
                Result:null,
                content:{}
            }
        },
        Gifts_UpdateGift:{
            request:{
                'GiftUID':'9da9cf07-6fd5-423e-bcee-c9d0501b4792',
                'GiftTitle':'giftstitle',
                'Description':'description',
                'Points':20,
                'GiftType':10,
                'Parameter':'parameter',
                'Contents':'contents'
            },
            content:{
                Result:null,
                content:{}
            }
        },
        Gifts_DeleteGift:{
            request:{
                'GiftUID':'9da9cf07-6fd5-423e-bcee-c9d0501b4792'
            },
            content:{
                Result:null,
                content:{}
            }
        },
        Gifts_GetSingleGiftInfo:{
            request:{
                'GiftUID':'805aec7c-b408-4683-9471-b800f008c6a0'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "805aec7c-b408-4683-9471-b800f008c6a0",
                    "GiftTitle": "giftstitle",
                    "Description": "description",
                    "Image": "201701131547526H8008L2.jpg",
                    "Points": 20,
                    "GiftType": 10,
                    "Parameter": "parameter",
                    "Contents": "contents",
                    "Showed": true,
                    "CreatedDate": "2017-01-13 15:47:52"
                }
            }
        },
        Gifts_GetGiftsList:{
            request:{
                'GiftType':10,
                'GiftIndex':'GiftTitle',
                'KeyWords':'w',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 3,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 3,
                    "List":
                        [
                            {
                                "UID": "805aec7c-b408-4683-9471-b800f008c6a0",
                                "GiftTitle": "giftstitle",
                                "Description": "description",
                                "Image": "201701131547526H8008L2.jpg",
                                "Points": 20,
                                "GiftType": 10,
                                "Parameter": "parameter",
                                "Contents": "contents",
                                "Showed": true,
                                "CreatedDate": "2017-01-13 15:47:52"
                            }
                        ]
                }
            }
        },
        Gifts_SetGiftShowedOrHidden:{
            request:{
                'GiftUID':'805aec7c-b408-4683-9471-b800f008c6a0',
                'Showed':true
            },
            content:{
                Result:null,
                content:{}
            }
        }
    };
    //afterSaleServiceApply接口数据结构录入（完成）
    $scope.afterSaleServiceApply = {
        AfterSaleService_Delete:{
            request:{
                'AfterSaleServiceUID':'6c926393-6b0b-428c-8b73-f97710552971'
            },
            content:{
                Result:null
            }
        },
        AfterSaleService_Update:{
            request:{
                'AfterSaleServiceUID':'63973e68-49d9-4198-a29a-2ab5a60b6806',
                'PurchasedProductUID':'0e5d762c-bdcf-4327-99f3-99837ba4103b',
                'UserUID':'c42ae76f-4411-4849-a955-ebfea3356bf5',
                'Title':'aathis is title',
                'ContactInfo':'aathis is contactinfo',
                'Description':'aahere description'
            },
            content:{
                Result:null
            }
        },
        AfterSaleService_GetSingleInfo:{
            request:{
                AfterSaleServiceUID:'63973e68-49d9-4198-a29a-2ab5a60b6806'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "63973e68-49d9-4198-a29a-2ab5a60b6806",
                    "PurchasedProductUID": "0e5d762c-bdcf-4327-99f3-99837ba4103b",
                    "UserUID": "c42ae76f-4411-4849-a955-ebfea3356bf5",
                    "Title": "aathis is title",
                    "ContactInfo": "aathis is contactinfo",
                    "Description": "aahere description",
                    "CreatedDate": "2017-01-15 00:47:58",
                    "ReviewDate": "",
                    "WhoReview": "",
                    "Status": 0
                }
            }
        },
        AfterSaleService_GetList:{
            request:{
                'AfterSaleServiceIndex':'DateTimeDesc',
                'Status':0,
                'UserUID':'c42ae76f-4411-4849-a955-ebfea3356bf5',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 5,
                    "PageSize": 10,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "a607c401-e71d-42eb-b532-17fa487c1e7d",
                                "PurchasedProductUID": "0e5d762c-bdcf-4327-99f3-99837ba4103b",
                                "UserUID": "c42ae76f-4411-4849-a955-ebfea3356bf5",
                                "Title": "this is titleaa ",
                                "ContactInfo": "this is contactinfo",
                                "Description": "here description",
                                "CreatedDate": "2017-01-15 00:56:41",
                                "ReviewDate": "",
                                "WhoReview": "",
                                "Status": 0
                            }
                        ]
                }
            }
        },
        AfterSaleService_Review:{
            request:{
                'AfterSaleServiceUID':'f882d125-a753-487d-909e-82dfb37c0812',
                'Status': 10,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null
            }
        }
    };
    //HORIBA工作发布管理接口数据结构录入（完成）
    $scope.HoribaJob = {
        HoribaJob_CreateJobRelease:{
            request:{
                'JobName':'JobName',
                'Address':'Address',
                'Email':'Email@adom.com',
                'CityUID':'d44783bc-e303-4fd7-badf-356d2fa2200a',
                'Telephone':'telephone',
                'ContactPerson':'Contactperson',
                'ExpirationDate':'2012-12-28',
                'Description':'description',
                'JobType':10
            },
            content:{
                Result:null,
                content:{}
            }
        },
        HoribaJob_UpdateJobRelease:{
            request:{
                'JobReleaseUID':'650989ce-eebd-4685-8b86-d1f6d54bccca',
                'JobName':'JobName',
                'Address':'Address',
                'Email':'Email@adom.com',
                'CityUID':'d44783bc-e303-4fd7-badf-356d2fa2200a',
                'Telephone':'telephone',
                'ContactPerson':'Contactperson',
                'ExpirationDate':'2012-12-28',
                'Description':'description',
                'JobType':10
            },
            content:{
                Result:null,
                content:{}
            }
        },
        HoribaJob_DeleteJobRelease:{
            request:{
                'JobReleaseUID':'df03a1f0-7d95-41fe-bf3a-1bf5de15997b'
            },
            content:{
                Result:null,
                content:{}
            }
        },
        HoribaJob_GetSingleJobReleaseInfo:{
            request:{
                'JobReleaseUID':'df03a1f0-7d95-41fe-bf3a-1bf5de15997b'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "c2041be8-1a93-4526-ab4e-2e629c50192e",
                    "JobName": "JobName",
                    "Address": "Address",
                    "Email": "Email@adom.com",
                    "CityUID": "d44783bc-e303-4fd7-badf-356d2fa2200a",
                    "Telephone": "telephone",
                    "ContactPerson": "Contactperson",
                    "ExpirationDate": "2012-12-28 00:00:00",
                    "Description": "description",
                    "JobType": 10,
                    "Showed": true
                }
            }
        },
        HoribaJob_SetJobReleaseShowedOrHidden:{
            request:{
                'JobReleaseUID':'0cfc4401-1bc7-4c5f-ad1a-2bea5866b434',
                Showed: false
            },
            content:{
                Result:null,
                content:{}
            }
        },
        HoribaJob_GetJobReleaseList:{
            request:{
                'JobReleaseIndex ':' CreatedDateTime',
                ' JobType ':10,
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 4,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 4,
                    "List":
                        [
                            {
                                "UID": "b67a595f-0c60-494a-8681-eb5994d056cb",
                                "JobName": "JobName",
                                "Address": "Address",
                                "Email": "Email@adom.com",
                                "CityUID": "d44783bc-e303-4fd7-badf-356d2fa2200a",
                                "Telephone": "telephone",
                                "ContactPerson": "Contactperson",
                                "ExpirationDate": "2012-12-28 00:00:00",
                                "CreatedDate": "2016-12-26 12:12:20",
                                "Description": "description",
                                "JobType": 10,
                                "Showed": true
                            }
                        ]
                }
            }
        }
    };
    //用户上传文档管理获取积分管理接口数据结构录入（完成）
    $scope.clientDocument = {
        ClientDocuments_GetSingleInfo:{
            request:{
                'ClientDocumentsUID':'8ad1a4c6-1397-4191-acc9-1651f46a47d4'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "8ad1a4c6-1397-4191-acc9-1651f46a47d4",
                    "FilesUID": "0b9e4743-7004-4968-b2ca-6a04794728ea-bvpn62n8",
                    "Title": "No Title",
                    "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                    "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                    "Description": "No Description",
                    "CreatedDate": "2017-01-15 04:21:16",
                    "ModifiedDate": "2017-01-15 04:21:16",
                    "WhoCreated": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                    "ReviewDate": "",
                    "WhoReview": "",
                    "Status": 0,
                    "ReviewComments": "",
                    "Files":
                        [
                            {
                                "UID": "8c134c7a-05ec-4f8f-a424-524083d56bc4",
                                "FileName": "狗狗认领.docx",
                                "PageCount": "2"
                            }
                        ]
                }
            }
        },
        ClientDocuments_Delete:{
            request:{
                'ClientDocumentsUID':'db9a76f9-a5bc-44ef-9bc6-be9cbd549536'
            },
            content:{
                Result:null
            }
        },
        ClientDocuments_GetList:{
            request:{
                'ApplicationUID':'0c036878-f162-4aab-a59a-a3a0c68ca058',
                'TechniqueUID':'f58c107b-827a-4f3f-935c-8c964013cb92',
                'UserUID':'178cd187-adf3-41c4-bd69-b99e88b477c5',
                'ClientDocumentsIndex':'DateTimeDesc',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 3,
                    "PageSize": 10,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "71e69ff2-9e18-47db-a243-e4ba3453cdf4",
                                "FilesUID": "4690ca5d-9947-407d-8788-911099a83cdb-88r6dvd4",
                                "Title": "No Title",
                                "ApplicationUID": "0c036878-f162-4aab-a59a-a3a0c68ca058",
                                "TechniqueUID": "f58c107b-827a-4f3f-935c-8c964013cb92",
                                "Description": "No Description",
                                "CreatedDate": "2017-01-15 04:22:18",
                                "ModifiedDate": "2017-01-15 04:22:18",
                                "WhoCreated": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "ReviewDate": "",
                                "WhoReview": "",
                                "Status": 0,
                                "ReviewComments": ""
                            }
                        ]
                }
            }
        },
        ClientDocuments_GetFileHtml:{
            request:{
                'FileUID':'2493fd26-e22a-463a-82fc-b9d151e11cef'
            },
            content:{
                "Result": true,
                "Data": {
                    "FileName": "bb.pptx",
                    "Content":null
                }
            }
        },
        download:{
            request:{
                'FileUID':'8c134c7a-05ec-4f8f-a424-524083d56bc4'
            },
            content:{
                Result:null
            }
        },
        ClientDocuments_Review:{
            request:{
                'ClientDocumentsUID':'8ad1a4c6-1397-4191-acc9-1651f46a47d4',
                'Status': 100,
                'ReviewComments': 'No Reason.'
            },
            content:{
                Result:null
            }
        }
    };
    //user管理接口数据结构录入（完成）
    $scope.UserAccount = {
        ClientUsers_RegLabClientUser:{
            request:{
                'Account': 'my123345',
                'Pwd':'pwd12234',
                'Email':'myemail@email.com',
                'VerificationCode':'code',
                'CallNumber':'123345',
                'NickName':'My Nick name',
                'ApplicationCode':'mayApplication',
                'Company':'company',
                'Department':'department',
                'CityUID':' ae88bd02-1ec5-4715-840e-cac2bdef1813',
                'Job':'job',
                'Degree':'degree',
                'ApplicationField':'application',
                'InterestedTech':'interested tech'
            },
            content:{
                Result:null
            }
        },
        ClientUsers_SetClientUserLogin:{
            request:{
                'ClientUserUID':'c42ae76f-4411-4849-a955-ebfea3356bf5',
                'AllowLogin':false
            },
            content:{
                Result:null
            }
        },
        ClientUsers_GetSingleClientUserInfo:{
            request:{
                'ClientUserUID':'c42ae76f-4411-4849-a955-ebfea3356bf5'
            },
            content:{
                "Result": true,
                "Data": {
                    "UID": "c42ae76f-4411-4849-a955-ebfea3356bf5",
                    "Account": "aamy123345",
                    "Pwd": "pwd12234",
                    "Email": "aamyemail@email.com",
                    "CallNumber": "123345",
                    "NickName": "My Nick name",
                    "UserType": 30,
                    "ApplyUserRole": false,
                    "LabUID": "",
                    "ApplicationCode": "mayApplication",
                    "InvitationUID": "",
                    "InvitationCode": "",
                    "MyInvitationCode": "0PJJHX0T",
                    "TotalPoint": 0,
                    "CreatedDate": "2017-01-14 11:58:02",
                    "IsCollaboration": false,
                    "Login": false,
                    "Company": "company",
                    "Department": "department",
                    "CityUID": "ae88bd02-1ec5-4715-840e-cac2bdef1813",
                    "Job": "job",
                    "Degree": "degree",
                    "ApplicationField": "application",
                    "InterestedTech": "interested tech"
                }
            }
        },
        ClientUsers_GetClientUserList:{
            request:{
                'ClientUserIndex':'Account',
                'UserType':10,
                'Login':true,
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 1,
                    "PageSize": 1,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "ef8c34e9-ce69-4fdf-93e7-4ffa9688414f",
                                "Account": "mpoing",
                                "Pwd": "pwd12234aa",
                                "Email": "jj@maysy-sh.com",
                                "CallNumber": "123345",
                                "NickName": "My Nick name",
                                "UserType": 10,
                                "ApplyUserRole": false,
                                "LabUID": "",
                                "ApplicationCode": "mayApplication",
                                "InvitationUID": "178cd187-adf3-41c4-bd69-b99e88b477c5",
                                "InvitationCode": "ZJ0ZNFBV",
                                "MyInvitationCode": "P62VBN8H",
                                "TotalPoint": 0,
                                "CreatedDate": "2016-11-03 12:54:36",
                                "IsCollaboration": false,
                                "Login": true,
                                "Company": "",
                                "Department": "",
                                "CityUID": "",
                                "Job": "",
                                "Degree": "",
                                "ApplicationField": "",
                                "InterestedTech": ""
                            }
                        ]
                }
            }
        },
        ClientUsers_AddProductsToLabAccount:{
            request:{
                'ClientUserUID': 'c42ae76f-4411-4849-a955-ebfea3356bf5',
                'ProductUID':'387d9f32-4ce2-4898-85ca-320afdcb4219',
                'PurchasedDate':'2017-01-10'
            },
            content:{
                Result:null
            }
        },
        ClientUsers_DeleteProductsFromLabAccount:{
            request:{
                'PurchasedProductUID': '27ac1854-140d-4a13-886e-6985b36ea209'
            },
            content:{
                Result:null
            }
        },
        ClientUsers_GetLabProductList:{
            request:{
                'ProductIndex': 'ProductsName',
                'ClientUserUID':'c42ae76f-4411-4849-a955-ebfea3356bf5',
                'PageSize':1,
                'PageNumber':1
            },
            content:{
                "Result": true,
                "Data": {
                    "TotalCount": 3,
                    "PageSize": 5,
                    "PageNumber": 1,
                    "PageTotal": 1,
                    "List":
                        [
                            {
                                "UID": "0e5d762c-bdcf-4327-99f3-99837ba4103b",
                                "ProductUID": "387d9f32-4ce2-4898-85ca-320afdcb4219",
                                "FilesUID": "0b405812-f27d-4341-b269-90e498a445bd-86b64pt0",
                                "ProductsName": "Products Name",
                                "Image": "20170112133824D862RHLP.jpg",
                                "Model": "Model",
                                "Introduction": "Introduction",
                                "WarrantyDays": "200",
                                "ApplicationField": "applicationField",
                                "SoftwareVersion": "softwareversion",
                                "SerialNumber": "serialNuambe",
                                "Notes": "the Notes",
                                "AfterSalesServiceSatffUID": "" }
                        ]
                }
            }
        }
    };

    //缺少HoribaAccount的管理??没有文档
    $scope.HoribaAccount = {};







    $scope.autoAjax={
        advertising:{
            PageSize:10,
            PageNumber:1
        }
    };

    $scope.linkHref = {
        leftList:[
            "#/shenpi",
            "#/activity",
            "#/product",
            "#/afterSale",
            "#/user",
            "#/account",
            "#/resource",
            "#/banner",
            "#/news",
            "#/exchange",
            "#/job"
        ]
    };

    //本地数据
    $scope._view = {
        leftlist:[
            "审批管理",
            "活动",
            "产品",
            "售后人员",
            "用户账号管理",
            "管理员账号管理",
            "资源管理",
            "广告",
            "新闻",
            "兑换中心管理",
            "HORIBA招聘"
        ],
        button:{
            deleting:"删除",
            edit:"编辑",
            up:"上架",
            down:"下架"
        },
        news:{
            create:{
                'NewsTitle':'标题',
                'NewsAbstract':'描述',
                'NewsType':'种类',
                'NewsContent':'内容'
            },
            list:{
                    NewsTitle:"标题",
                    NewsType:"种类",
                    NewsDate:"发布日期",
                    Clicks:"点击数",
                    SetTop:"置顶"
            },
            button:{
                News_Delete:"删除",
                News_GetSingleInfo:"查看",
                News_Update:"编辑",
                News_SetShowedOrHidden:"显示/隐藏",
                News_SetTop:"置顶"
            }
        },
        library:{
            create:{
                FilesUID:"Document Upload：",
                Title:"Title：",
                Keywords:"Keyword：",
                ApplicationUID:"Application：",
                TechniqueUID:"Technique：",
                LibraryTypeUID:"Type：",
                Author:"Author",
                Magagine:"Magazine：",
                Abstract:"Abstract：",
                RealContent:"Content：",
                Recommend:"Recommend：",
                WhoCanRead:"Authority："
            },
            list:{
                Title:"标题",
                Author:"作者",
                Magagine:"来源杂志",
                AppCnName:"分类项",
                CreatedDate:"创建时间",
                SetTop:"置顶",
                Clicks:"点击量"
            },
            button:{
                Library_GetSingleInfo:"查看",
                Library_Update:"编辑",
                Library_Delete:"删除",
                Library_DelFile:"删除文件",
                Library_SetShowedOrHidden:"显示/隐藏",
                Library_SetTop:"置顶",
                Library_GetFileHtml:"获取HTML",
                download:"下载"
            }
        },
        banner:{
            create:{
                BannerTitle:"Banner Title：",
                LinkHref:"Link Address：",
                Description:"Description：",
                BannerType:"Banner Type"

            },
            list:{
                BannerTitle:"标题",
                BannerImg:"图片",
                BannerType:"种类"
            },
            button:{
                Banners_Update:"编辑",
                Banners_Delete:"删除",
                Banners_GetSingleInfo:"查看"
            },
            data:[]
        },
        add:{
            request:{
                NewsTitlte:null,
                NewsAbstract:null,
                NewsType:null,
                NewsContent:null,
                NewsDate:null
            },
            content:{       //给labal用的内容介绍信息
                NewsTitlte:"Title：",
                NewsAbstract:"Abstract：",
                NewsType:"Type：",
                NewsContent:"Content：",
                NewsDate:"Date："
            }
        },
        getInfo:{
            request:{
                NewsUID:null
            },
            content:{       //给labal用的内容介绍信息
                NewsTitlte:"Title：",
                NewsAbstract:"Abstract：",
                NewsType:"Type：",
                NewsContent:"Content：",
                NewsDate:"Date："
            }
        },
        edit:{
            request:{
                NewsTitlte:null,
                NewsAbstract:null,
                NewsType:null,
                NewsContent:null,
                NewsDate:null,
                NewsUID:null
            },
            content:{       //给labal用的内容介绍信息
                NewsTitlte:"Title：",
                NewsAbstract:"Abstract：",
                NewsType:"Type：",
                NewsContent:"Content：",
                NewsDate:"Date："
            }
        },
        deleting:{
            request:{
                NewsUID:null
            }
        },
        show:{
            request:{
                NewsUID:null,
                Showed:null
            }
        },
        top:{
            request:{
                NewsUID:null,
                SetTop:null
            }
        },

    };

    $scope._view.type = {
        1:1,
        2:1,
        3:1,
        4:1,
        5:1,
        6:1,
        7:1
    };






    $scope.submitUp = "submit";
    $scope.personalInfo = {
        nickName:"Brand"
    };

    $scope.listEvent = {

        materials:{
            id:"#",
            cName:["公司名称"],
            type:"供应种类",
            product:"产品",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        trans:{
            index:"#",
            companyName:"公司名称",
            transType:"运输类型",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        production:{
            index:"#",
            productName:"产品名称",
            ingredients:"规格",
            ratio :"单位",
            standards:"配料",
            shelfLife:"保质期（月）",
            weight:"产品重量",
            active:"操作"
        },
        Storage:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        officeSupplies:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        agent:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        }
    };
    //list内容区
    $scope.button = {
        delete:"删除",
        edit:"编辑",
        up:"上架",
        down:"下架"
    };


    $scope.items = [{
        a:123
    }];

    //登录请求API—param

    $scope.logsucessState = function () {
        $('#myModal').modal('hide')
    };
    $scope.logsucessData = function (a) {
        alert(a);
        console.log(a);
        $scope.userName = a.Data.UserName;
        $scope.usrePower = a.Data.Power;
        console.log($scope.usrePower);
    };



    $scope.list = "listTab";
    $scope.tab = function () {
        $("li.active").removeClass("active");
        $(event.target).parent().addClass("active");
    };
    $scope.state = null;






    $scope.currentState = function (a) {
        $scope.state = a;
        $('#mainListHerder').append("<newlist></newlist>");
        console.log($('#mainListHerder'));
    };

    pushOrder.switchOrder("Application_GetList").success(function (data) {
        $scope.common.Application_GetList.content = data;
    });
    pushOrder.switchOrder("Technique_GetList").success(function (data) {
        $scope.common.Technique_GetList.content = data;
    });
    pushOrder.switchOrder("Library_GetType").success(function (data) {
        $scope.common.Library_GetType.content = data;
    });
    pushOrder.switchOrder("Files_GetFilesUID").success(function (data) {
        $scope.common.Files_GetFilesUID.content = data;
    });
    pushOrder.switchOrder("Address_GetCountryList").success(function (data) {
        $scope.common.Address_GetCountryList.content = data;
    });
    pushOrder.switchOrder("Address_GetProvinceList").success(function (data) {
        $scope.common.Address_GetProvinceList.content = data;
    });
    pushOrder.switchOrder("Address_GetCityList").success(function (data) {
        $scope.common.Address_GetCityList.content = data;
    });
    pushOrder.switchOrder("Address_GetSingleCityInfo").success(function (data) {
        $scope.common.Address_GetSingleCityInfo.content = data;
    });

}]);


backApp.controller("transportation",["$scope", function ($scope) {
    $scope.items = {
        item1:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item2:{
            index:"#",
            companyName:"公司名称",
            transType:"短途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item3:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item4:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item5:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item6:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item7:{
            index:"#",
            companyName:"公司名称",
            transType:"长途",
            area:"负责区域",
            startingPoint:"运输起点",
            destination:"运输终点",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        }
    }
}]);

backApp.controller("product",["$scope", function ($scope) {
    $scope.items = {
        item1:{
            UID:"XXA111",
            index:"#",
            productName:"产品名称",
            spec:"300",
            unit:"克",
            ingredients:"猪肉300克，牛肉400克，牛肉400克，牛肉400克，牛肉400克，牛肉400克，牛肉400克，牛肉400克",
            shelfLife:"12"
        }


    }
}]);

backApp.controller("materials",["$scope", function ($scope) {

    $scope.items = {
        item1:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item2:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item3:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item4:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item5:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item6:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        },
        item7:{
            id:1,
            cName:2,
            type:3,
            product:4,
            price:5,
            call:6,
            address:7
        }
    }
}]);

backApp.controller("Storage",["$scope", function ($scope) {
    $scope.items = {
        item1:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item2:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item3:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item4:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item5:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item6:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        },
        item7:{
            index:"#",
            companyName:"公司名称",
            square :"总面积",
            UsesQuare :"使用面积",
            area:"负责送货区域",
            price:"价格",
            call:"联系电话",
            address:"联系地址",
            active:"操作"
        }
    }
}]);

backApp.controller("officeSupplies",["$scope", function ($scope) {
    $scope.items = {
        item1:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item2:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item3:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item4:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item5:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item6:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        },
        item7:{
            index:"#",
            companyName:"公司名称",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            webStore:"网址",
            address:"地址" ,
            active:"操作"
        }
    }
}]);

backApp.controller("agent",["$scope", function ($scope) {
    $scope.items = {
        item1:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"联系地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item2:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item3:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item4:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item5:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item6:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        },
        item7:{
            index:"#",
            companyName:"公司/名称",
            type:"种类",
            productL:"产品",
            price:"价格",
            call:"联系电话",
            market:"菜场",
            address:"地址",
            stall:"摊位",
            area:"所属地区",
            storageFrom:"所属仓库",
            active:"操作"
        }
    }
}]);