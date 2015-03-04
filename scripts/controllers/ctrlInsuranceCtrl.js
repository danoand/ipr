// InsuranceCtrl is the controller for the insurance.html view
appControllers.controller("InsuranceCtrl", ["$scope", "$modal", "svcDataPopulation",
  function($scope, $modal, svcDataPopulation) {

    $scope.coverageAmountGeneral = svcDataPopulation.insAmount();
    $scope.coverageAmountWorkers = svcDataPopulation.insAmount();
    $scope.coverageAmountVehicle = svcDataPopulation.insAmount();

    $scope.openInsuranceModal = function(inInsuranceType) {
      svcDataPopulation.insTypeSet(inInsuranceType);

      var modalInstanceInsurance = $modal.open({
        templateUrl: "myModalContentInsurance.html",
        controller: 'InsuranceModalCtrl'
      });
    };

  }
]);
