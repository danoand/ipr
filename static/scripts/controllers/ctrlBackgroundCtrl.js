// BusinessProfileCtrl is a controller for the 06_businessprofile.html view
appControllers.controller("AdminBackgroundCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation",
  function($scope, $rootScope, $location, svcDataPopulation) {

    $scope.virtualType = function() {
      $scope.adminSSN = svcDataPopulation.adminSSN();
    };

  }
]);
