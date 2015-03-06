// MailVerifyCtrl is a controller for the confirm email pop-up
appControllers.controller("MailVerifyCtrl", ["$scope", "$modal", "svcDataPopulation",
  function($scope, $modal, svcDataPopulation) {
    $scope.emailFirstName = svcDataPopulation.companyFullNameFirst();
    $scope.emailUsername  = svcDataPopulation.companyUsername();

  }
]);
