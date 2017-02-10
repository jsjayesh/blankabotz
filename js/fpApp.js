  var config = {
    apiKey: "AIzaSyDhrow6hvKiHNHsNR_VdqiAyRjYX2EG7Ck",
    authDomain: "blankabots-ac85e.firebaseapp.com",
    databaseURL: "https://blankabots-ac85e.firebaseio.com",
    storageBucket: "blankabots-ac85e.appspot.com",
    messagingSenderId: "27466993151"
  };
  firebase.initializeApp(config);

var fpApp = angular.module("fpApp",["ngRoute","ngCookies","firebase"]);

fpApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/",{
		templateUrl:"views/home.html",
        controller:"homeCtrl"
	}).
	otherwise({
		redirectTo:"/",
        controller:"homeCtrl"
	});

}]);

