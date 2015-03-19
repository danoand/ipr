// BusinessProfileCtrl is a controller for the 06_businessprofile.html view
appControllers.controller("AdminBackgroundCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcDataTypeUser",
  function($scope, $rootScope, $location, svcDataPopulation, svcDataTypeUser) {

    $scope.userType = svcDataTypeUser.getUserType();
    if ($scope.userType == 'agent') {
      $scope.userTypeAgent = true;
    }
    $rootScope.$on('chgUserType', function(event, data) {
      $scope.userType = svcDataTypeUser.getUserType();

      if ($scope.userType == 'agent') {
        $scope.userTypeAgent = true;
      }

    });

    $scope.virtualType = function() {
      $scope.adminSSN = svcDataPopulation.adminSSN();
    };

  }
]);
