// InsuranceModalCtrl is a controller for a modal on the insurance.html view
appControllers.controller("InsuranceModalCtrl", ["$scope", "$modalInstance", "svcDataPopulation",
  function($scope, $modalInstance, svcDataPopulation) {
    $scope.insuranceName = svcDataPopulation.insTypeGet();
    $scope.insPolicy = svcDataPopulation.insPolicy();
    $scope.insAmount = svcDataPopulation.insAmount();
    $scope.insIssueDate = svcDataPopulation.insIssueDate();
    $scope.insExpirationDate = svcDataPopulation.insExpirationDate();
    $scope.insCarrier = svcDataPopulation.insCarrier();
    $scope.insAgency = svcDataPopulation.insAgency();
    $scope.insAgencyCounty = svcDataPopulation.insAgencyCounty();
    $scope.insAgencyState = svcDataPopulation.insAgencyState();

    $scope.ok = function() {
      $modalInstance.close('Clicked Ok button');
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('Clicked Cancel button');
    };

  }
])
