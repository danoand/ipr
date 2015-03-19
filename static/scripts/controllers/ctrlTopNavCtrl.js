// NavBarCtrl is a controller for the main nav bar
appControllers.controller("TopNavCtrl", ["$scope", "$rootScope", "svcDataTypeUser",
  function($scope, $rootScope, svcDataTypeUser) {
    $scope.userType = svcDataTypeUser.getUserType();

    if ($scope.userType == 'self') {
      $scope.SLAgentOff = true;
      $scope.SLAgentOn  = false;
    } else {
      $scope.SLAgentOff = false;
      $scope.SLAgentOn  = true;
    }

    $scope.typeSignIn = function(inVal) {

      if (inVal == 'self') {
        // User has changed the user type to 'self'
        $scope.SLAgentOff = true;
        $scope.SLAgentOn  = false;
      }

      if (inVal == 'agent') {
        // User has changed the user type to 'self'
        $scope.SLAgentOff = false;
        $scope.SLAgentOn  = true;
      }

      svcDataTypeUser.setUserType(inVal);
      $rootScope.$emit('chgUserType');

    };

  }
]);
