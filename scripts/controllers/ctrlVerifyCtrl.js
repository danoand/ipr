// VerifyCtrl is a controller for the verifyctrl.html view
appControllers.controller("VerifyCtrl", ["$scope", "svcDataPopulation",
  function($scope, svcDataPopulation) {
    $scope.companyUsername = svcDataPopulation.companyUsername();

  }
]);
