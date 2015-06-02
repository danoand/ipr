// MailVerifyCtrl is a controller for the confirm email pop-up
appControllers.controller("ViewSPNIntroCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation",
  function($scope, $rootScope, $location, svcDataPopulation) {
    $scope.adminFirstName = svcDataPopulation.companyFullNameFirst();

  }
]);
