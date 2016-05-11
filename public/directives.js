weatherApp.directive("weatherReport", function(){
	return{
		restrict : "E",
		templateUrl:'directives/weatherReport.html',
		replace: true,
		transclude: true,
		scope:{
			 weatherDay: "=", // passing an object
			 convertToStandard: "&", //passing a function
			 convertToDate: "&", //passing a function
			 dateFormat: '@' // passing a string
		}

	}
});



