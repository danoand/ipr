// MailVerifyCtrl is a controller for the confirm email pop-up
appControllers.controller("MailVerifyCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation",
  function($scope, $rootScope, $location, svcDataPopulation) {
    $scope.emailFirstName = svcDataPopulation.companyFullNameFirst();
    $scope.emailUsername  = svcDataPopulation.companyUsername();

    $scope.firstLogin = function() {
      $rootScope.$emit('evAdminData');
      $location.path("/pages/verify");

      // $modalInstance.close('Clicked Ok button');
    };

  }
]);
