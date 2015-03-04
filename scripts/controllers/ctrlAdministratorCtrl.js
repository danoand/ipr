// AdministratorCtrl is a controller for the administrator.html view
appControllers.controller("AdministratorCtrl", ["$scope", "svcDataPopulation",
  function($scope, svcDataPopulation) {
    $scope.companyUsername = svcDataPopulation.companyUsername();
    $scope.companyEmail = svcDataPopulation.companyEmail();
    $scope.companyFullNameFirst = svcDataPopulation.companyFullNameFirst();
    $scope.companyFullNameLast = svcDataPopulation.companyFullNameLast();

    $scope.virtualType = function() {
      $scope.companyMiddleName = svcDataPopulation.companyMiddleName();
      $scope.companyJobTitle = svcDataPopulation.companyJobTitle();
      $scope.companyOwnerPrincipal = svcDataPopulation.companyOwnerPrincipal();
    }

  }
]);
