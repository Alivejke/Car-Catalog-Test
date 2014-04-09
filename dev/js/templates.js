angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/car-info.html',
    "<div id=\"car_info\">\r" +
    "\n" +
    "\t<select name=\"manufacturers\" ng-model=\"activeManufacturerIdx\" ng-change=\"onChangeManufacturer()\" ng-disabled=\"!manufacturers\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"manufacturer in manufacturers\">\r" +
    "\n" +
    "\t\t\t{{manufacturer.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<select name=\"years\" ng-model=\"activeYearIdx\" ng-change=\"onChangeYear()\" ng-disabled=\"!years\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"year in years\">\r" +
    "\n" +
    "\t\t\t{{year.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<select name=\"models\" ng-model=\"activeModelIdx\" ng-change=\"onChangeModel()\" ng-disabled=\"!models\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"model in models\">\r" +
    "\n" +
    "\t\t\t{{model.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<select name=\"transmissions\" ng-model=\"activeTransmissionIdx\" ng-change=\"onChangeTransmission()\" ng-disabled=\"!transmissions\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"transmission in transmissions\">\r" +
    "\n" +
    "\t\t\t{{transmission.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<select name=\"cylinders\" ng-model=\"activeCylinderIdx\" ng-change=\"onChangeCylinder()\" ng-disabled=\"!cylinders\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"cylinder in cylinders\">\r" +
    "\n" +
    "\t\t\t{{cylinder.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<select name=\"drives\" ng-model=\"activeDriveIdx\" ng-change=\"onChangeDrive()\" ng-disabled=\"!drives\">\r" +
    "\n" +
    "\t\t<option val=\"\"></option>\r" +
    "\n" +
    "\t\t<option value=\"{{$index}}\" ng-repeat=\"drive in drives\">\r" +
    "\n" +
    "\t\t\t{{drive.name}}\r" +
    "\n" +
    "\t\t</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"vehicle_info\" ng-show=\"vehicleInfo\">\r" +
    "\n" +
    "\t\t<li>Cylinder: {{vehicleInfo.cylinder}}</li>\r" +
    "\n" +
    "\t\t<li>Drive: {{vehicleInfo.drive}}</li>\r" +
    "\n" +
    "\t\t<li>Odometer Units: {{vehicleInfo.odometerUnits}}</li>\r" +
    "\n" +
    "\t\t<li>Retention Status: {{vehicleInfo.retentionStatus}}</li>\r" +
    "\n" +
    "\t\t<li>Trade Cycle: {{vehicleInfo.tradeCycle}}</li>\r" +
    "\n" +
    "\t\t<li>Ttransmission: {{vehicleInfo.transmission}}</li>\r" +
    "\n" +
    "\t\t<li>Vehicle Name: {{vehicleInfo.vehicleName}}</li>\r" +
    "\n" +
    "\t\t<li><a href=\"{{vehicleInfo.url.replace('http://lab01.hr.internal-projects.com', '/#')}}\">Direct link for vehicle info</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('template/vehicle-info.html',
    "<ul class=\"vehicle_info\" ng-show=\"vehicleInfo\">\r" +
    "\n" +
    "\t<li>Cylinder: {{vehicleInfo.cylinder}}</li>\r" +
    "\n" +
    "\t<li>Drive: {{vehicleInfo.drive}}</li>\r" +
    "\n" +
    "\t<li>Odometer Units: {{vehicleInfo.odometerUnits}}</li>\r" +
    "\n" +
    "\t<li>Retention Status: {{vehicleInfo.retentionStatus}}</li>\r" +
    "\n" +
    "\t<li>Trade Cycle: {{vehicleInfo.tradeCycle}}</li>\r" +
    "\n" +
    "\t<li>Ttransmission: {{vehicleInfo.transmission}}</li>\r" +
    "\n" +
    "\t<li>Vehicle Name: {{vehicleInfo.vehicleName}}</li>\r" +
    "\n" +
    "</ul>"
  );

}]);
