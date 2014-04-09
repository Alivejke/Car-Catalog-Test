'use strict';

var app = angular.module('app', ['ngRoute', 'app.controllers']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'CarInfoCtrl',
				templateUrl: 'template/car-info.html'
			})
			.when('/vehicles/:manufacturers/:year/:model/:transmission/:cylinder/:drive', {
				controller: 'VehicleInfoCtrl',
				templateUrl: 'template/vehicle-info.html'
			})
	}]);