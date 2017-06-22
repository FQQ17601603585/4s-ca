//  智能保养方案
var app = angular.module("myApp",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
	     $routeProvider
	     .when("/maintainpage",{
	     	   templateUrl:"maintainpage.html",
	     	   controller:"myCtrl"
	     })
	     .when("/curing",{
	     	 templateUrl:"curing.html"
	     })
	     .when("/repair",{
	     	 templateUrl:"repair.html"
	     })
	     .otherwise({
	     	    redirectTo:"/maintainpage"
	     });
}]) ;
app.controller("myCtrl",function($scope,$http){
	    $scope.arr=[];
	    $http.get("../data/maintain.json").success(function(obj){
	    	   $scope.arr=obj;
//	    	   console.log(obj);
	    })
})


//app.controller("mainCtrl",function($scope,$element,$timeout){
//	   
//	   $scope.zongjia ="157";
//	   $scope.oldZongjia ="178";
//	   $scope.newZongjia="198";
////     $timeout(function(){
////	       	$("input[type='checkbox']").click(function(){
////		   	     $rootScope.len = $("input:checkbox:checked").length; 
//////		   	     alert($rootScope.len);  
////		   })	       
////     },1000)
//   $scope.choose = function(){
//   	   $scope.zongjia = $scope.arr.presentPrice;
//   }
//     
//    
//})





