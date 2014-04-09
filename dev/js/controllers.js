'use strict';

angular.module('app.controllers', [])
	.controller('CarInfoCtrl', ['$scope', '$http', function($scope, $http){

		function getHrefByRel(links, rel) {
			var href;

			for (var i = 0; i < links.length; i++) {
				if(links[i].rel === rel) {
					href = links[i].href;
					break;
				}
			};

			return href;
		};

		$scope.getManufacturers = function () {
			$http.get('http://lab01.hr.internal-projects.com/manufacturers').success(function (data) {
				$scope.manufacturers = data.manufacturers;
			});
		};

		$scope.onChangeManufacturer = function () {
			$scope.years = null;
			$scope.models = null;
			$scope.transmissions = null;
			$scope.cylinders = null;
			$scope.drives = null;
			$scope.vehicleInfo = null;
			$scope.getYears();
		};



		$scope.getYears = function () {
			var url = getHrefByRel($scope.manufacturers[$scope.activeManufacturerIdx].links, 'http://lab.internal-projects.com/docs/rels/manufacture-year-collection');

			$http.get(url).success(function (data) {
				$scope.years = data.years;
			});
		};

		$scope.onChangeYear = function () {
			$scope.models = null;
			$scope.transmissions = null;
			$scope.cylinders = null;
			$scope.drives = null;
			$scope.vehicleInfo = null;
			$scope.getModels();
		};



		$scope.getModels = function () {
			var url = getHrefByRel($scope.years[$scope.activeYearIdx].links, 'http://lab.internal-projects.com/docs/rels/car-model-collection');

			$http.get(url).success(function (data) {
				$scope.models = data.models;
			});
		};

		$scope.onChangeModel = function () {
			$scope.transmissions = null;
			$scope.cylinders = null;
			$scope.drives = null;
			$scope.vehicleInfo = null;
			$scope.getTransmissions();
		};



		$scope.getTransmissions = function () {
			var url = getHrefByRel($scope.models[$scope.activeModelIdx].links, 'http://lab.internal-projects.com/docs/rels/transmission-collection');

			$http.get(url).success(function (data) {
				$scope.transmissions = data.transmissions;
			});
		};

		$scope.onChangeTransmission = function () {
			$scope.cylinders = null;
			$scope.drives = null;
			$scope.vehicleInfo = null;
			$scope.getCylinders();
		};



		$scope.getCylinders = function () {
			var url = getHrefByRel($scope.transmissions[$scope.activeTransmissionIdx].links, 'http://lab.internal-projects.com/docs/rels/engine-cylinder-collection');

			$http.get(url).success(function (data) {
				$scope.cylinders = data.cylinders;
			});
		};

		$scope.onChangeCylinder = function () {
			$scope.drives = null;
			$scope.vehicleInfo = null;
			$scope.getDrives();
		};



		$scope.getDrives = function () {
			var url = getHrefByRel($scope.cylinders[$scope.activeCylinderIdx].links, 'http://lab.internal-projects.com/docs/rels/vehicle-drive-collection');

			$http.get(url).success(function (data) {
				$scope.drives = data.drives;
			});
		};

		$scope.onChangeDrive = function () {
			$scope.vehicleInfo = null;
			$scope.getVehicleInfo();
		};



		$scope.getVehicleInfo = function (url) {
			var url = url || getHrefByRel($scope.drives[$scope.activeDriveIdx].links, 'http://lab.internal-projects.com/docs/rels/vehicle-info');

			$http.get(url).success(function (data) {
				$scope.vehicleInfo = data;
				$scope.vehicleInfo.url = getHrefByRel(data.links, 'self');
			});
		};

		$scope.getManufacturers();
		$http.get('http://lab01.hr.internal-projects.com/vehicles/57/2014/s60%20turbo%20(2.5l)/automatic/5cyl/2wd').success(function (data) {
			console.log(13.2, data);
		});
	}])
	.controller('VehicleInfoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		var url = 'http://lab01.hr.internal-projects.com/vehicles/' + 
				  $routeParams.manufacturers + '/' +
				  $routeParams.year + '/' +
				  $routeParams.model + '/' +
				  $routeParams.transmission + '/' +
				  $routeParams.cylinder + '/' +
				  $routeParams.drive;
		
		$http.get(url).success(function (data) {
			$scope.vehicleInfo = data;
		});
	}]);