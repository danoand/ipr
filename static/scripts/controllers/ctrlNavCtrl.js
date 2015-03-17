// NavBarCtrl is a controller for the main nav bar
appControllers.controller("NavCtrl", ["$scope", "$rootScope", "svcAdminPart",
  function($scope, $rootScope, svcAdminPart) {
    $scope.showTeamMenu = false;

    // Fire event when Admin participation radio button is changed
    $rootScope.$on('evAdminIsParticipating', function(event, data) {
      tmpAdminPart = svcAdminPart.getAdminPartFlag();

      if (tmpAdminPart == 'no') {
        $scope.showTeamMenu  = true;
        $scope.showAdminMenu = false;
      } else {
        $scope.showTeamMenu  = false;
        $scope.showAdminMenu = true;
      }
    });

  }
]);
