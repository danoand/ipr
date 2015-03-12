// MailVerifyCtrl is a controller for the confirm email pop-up
appControllers.controller("MailVerifyCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation",
  function($scope, $rootScope, $location, svcDataPopulation) {
    $scope.emailFirstName = svcDataPopulation.companyFullNameFirst();
    $scope.emailUsername  = svcDataPopulation.companyUsername();

    $scope.nextPage = function() {
      $rootScope.$emit('evAdminData');
      $location.path("/pages/administrator");

      // $modalInstance.close('Clicked Ok button');
    };

  }
]);
