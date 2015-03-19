// NavBarCtrl is a controller for the main nav bar
appControllers.controller("AlertUserTypeCtrl", ["$scope", "$rootScope", "svcDataTypeUser",
  function($scope, $rootScope, svcDataTypeUser) {
    $scope.userType = svcDataTypeUser.getUserType();

    if ($scope.userType == 'self') {
      $scope.userIsAgent = false;
    } else {
      $scope.userIsAgent = true;
    }

    $rootScope.$on('chgUserType', function(event, data) {
      $scope.userType = svcDataTypeUser.getUserType();
      
      if ($scope.userType == 'self') {
        $scope.userIsAgent = false;
      } else {
        $scope.userIsAgent = true;
      }
    });

  }
]);
