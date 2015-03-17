// InsuranceCtrl is the controller for the 07_insurance.html view
appControllers.controller("InsuranceCtrl", ["$scope", "$modal", "$rootScope", "svcDataPopulation", "svcDataHTML", "svcAdminPart",
  function($scope, $modal, $rootScope, svcDataPopulation, svcDataHTML, svcAdminPart) {
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

    $scope.adminPart = svcAdminPart.getAdminPartFlag();
    if ($scope.adminPart == 'no') {
      $scope.showTeamLink  = true;
      $scope.showAdminLink = false;
    } else {
      $scope.showTeamLink  = false;
      $scope.showAdminLink = true;
    }

    $scope.openInsuranceModal = function(inInsuranceType) {
      svcDataPopulation.insTypeSet(inInsuranceType);

      var modalInstanceInsurance = $modal.open({
        templateUrl: "myModalContentinsurance.html",
        controller: 'InsuranceModalCtrl'
      });
    };

  }
]);
