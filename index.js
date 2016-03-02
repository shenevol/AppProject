var app = angular.module("app",[]);

// call Azure mobile services
var mobileServiceClient = new WindowsAzure.MobileServiceClient("http://kiliomobileapi.azure-mobile.net/", "HPTNIXeDbTlKwZnIgmwVBijYmJrLHF82");



app.controller("index",function($scope, $http){
  
  //api for deparment list
  mobileServiceClient.invokeApi("AuthorityManage/Departments", {
                method: "GET",
                parameters: { LoginEmpNo: 123456 }

            }).done( 
                (result) => {

                    deparmentData = JSON.parse(result.response);
                    // alert(deparmentData);
                    // alert(deparmentData[0]);
                     $scope.listOfDeparment = deparmentData;
                     // alert($scope.listOfDeparment);
                     $scope.selectedDepartment = deparmentData[0];

                    $scope.$apply();   // 重新 Bind                
                 },
                 (error) => {
                   alert({ title: "error", message: error.message });
                }

                );  

    //api for employee lists
    mobileServiceClient.invokeApi("AuthorityManage/Employees", {
                method: "GET",
                parameters: { LoginEmpNo:123456 }
            }).done(
                (result) => {
                    //alert(result.response);
                    deparmentPeopleData = JSON.parse(result.response);
                   
                    $scope.listOfDeparmentPeople = deparmentPeopleData;
                    $scope.selectedPeople = deparmentPeopleData[0];

                    $scope.$apply();   // 重新 Bind
                                 
                },
                (error) => {
                    alert({ title: "error", message: error.message });
                }

            ); 

    


    var MockData_Department = {
                "Deparments":
                [
                    {   "departmentName" : "MCS",
                        "deparmentNumber" : "1"
                    },
                    {
                        "departmentName": "Premier",
                        "deparmentNumber": "2"
                    },
                    {
                        "departmentName": "Services",
                        "deparmentNumber": "3"
                    }

                ]

    };
    var MockData_DeparmentPeople= {
                "DeparmentPeople":
                [
                    {
                        "name": "Lauren",
                        "peopleNumber": "0012",
                        "deparmentNumber": "1"
                    },

                    {
                        "name": "Lydia",
                        "peopleNumber": "0035",
                        "deparmentNumber": "1"
                    },
                    {
                        "name": "Kilio",
                        "peopleNumber": "0024",
                        "deparmentNumber": "1"
                    },
                    {
                        "name": "Lydia2",
                        "peopleNumber": "0036",
                        "deparmentNumber": "2"
                    },
                    {
                        "name": "Lauren2",
                        "peopleNumber": "0100",
                        "deparmentNumber": "2"
                    },
                    {
                        "name": "Lauren3",
                        "peopleNumber": "0101",
                        "deparmentNumber": "3"
                    },
                    {
                        "name": "Lydia3",
                        "peopleNumber": "0102",
                        "deparmentNumber": "3"
                    },
                    {
                        "name": "Kilio3",
                        "peopleNumber": "0109",
                        "deparmentNumber": "3"
                    }
                ]

    };
    var MockData_Tasks = {
                "Tasks":
                [
                    {
                        "taskName": "Support Advisory",
                        "taskID": "1"
                    },
                    {
                        "taskName": "Indident Management",
                        "taskID": "2"
                    },
                    {
                        "taskName": "Operation",
                        "taskID": "3"
                    }

                ]

    };

             $scope.listOfTasks = MockData_Tasks.Tasks;
             $scope.selectedOption = MockData_Tasks.Tasks[0];

    $scope.submit = function(){

        //api to post option back
        mobileServiceClient.invokeApi("AuthorityManage", {
                method: "POST",
                parameters: { LoginEmpNo:123456,  }
        }).done(
            (result) => {
                    alert("post success");
                                 
            },
            (error) => {
                    alert({ title: "error", message: error.message });
            }

        ); 

    };
            //  $scope.listOfDeparment = MockData_Department.Deparments;
            //  $scope.selectedOption = MockData_Department.Deparments[0];
              // $scope.listOfDeparmentPeople = MockData_DeparmentPeople.DeparmentPeople;
             // function getData(data){
             //      console.log(typeof(data))
             //      return data ;
             // }

            

           
    });       
            
            

