// BusinessProfileCtrl is a controller for the 06_businessprofile.html view
appControllers.controller("WrapUpCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcDataHTML", "svcDataGaugeChart", "svcAdminPart",
  function($scope, $rootScope, $location, svcDataPopulation, svcDataHTML, svcDataGaugeChart, svcAdminPart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.wrapupGaugeProfileData = svcDataGaugeChart.wrapupGaugeProfileData();
    $scope.wrapupGaugeProfileOpts = svcDataGaugeChart.wrapupGaugeProfileOpts();
    $scope.wrapupGaugeTechData    = svcDataGaugeChart.wrapupGaugeTechData();
    $scope.wrapupGaugeTechOpts    = svcDataGaugeChart.wrapupGaugeTechOpts();

    $scope.adminPart = svcAdminPart.getAdminPartFlag();
    if ($scope.adminPart == 'no') {
      $scope.optAdminPartYes = false;
      $scope.optAdminPartNo  = true;
    } else {
      $scope.optAdminPartYes = true;
      $scope.optAdminPartNo  = false;
    }

  }
]);
