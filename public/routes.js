//ROUTE
weatherApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/views/home.html',
		controller: 'homeController'
	})

	.when('/forecast', {
		templateUrl: 'pages/views/forecast.html',
		controller: 'forecastController'
	})

	.when('/forecast/:days', {
		templateUrl: 'pages/views/forecast.html',
		controller: 'forecastController'
	})
});