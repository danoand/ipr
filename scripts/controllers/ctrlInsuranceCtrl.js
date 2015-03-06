// InsuranceCtrl is the controller for the insurance.html view
appControllers.controller("InsuranceCtrl", ["$scope", "$modal", "$rootScope", "svcDataPopulation", "svcDataHTML",
  function($scope, $modal, $rootScope, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $rootScope.$emit('evStatusData');

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
