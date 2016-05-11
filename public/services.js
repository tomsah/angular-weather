
//service
weatherApp.service('cityService', function(){

	this.city = 'london';

});

weatherApp.service('weatherService', ['$resource',function($resource){


	this.getWeather = function(city, days) {
			var weatherAPI = $resource ("http://api.openweathermap.org/data/2.5/forecast/daily");
			return weatherAPI.get({appid: "eb9700e19ca38a67634c2db466088157", q: city, cnt: days });

	};

	
}]);