// TeamPreferencesCtrl is the controller for the team_preferences.html view
appControllers.controller("TeamPreferencesCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML",
  function($scope, $rootScope, $location, svcDataPopulation, svcTeamProgressBar, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');;

    svcTeamProgressBar.setProgBarValue('25');
    svcTeamProgressBar.setProgBarStep('2');

    $scope.progress = {};
    $scope.progress.now = svcTeamProgressBar.getProgBarValue();
    $scope.progress.step = svcTeamProgressBar.getProgBarStep();

    $rootScope.$on('evTechProgressBar', function(event, data) {
      $scope.progress.now = svcTeamProgressBar.getProgBarValue();
      $scope.progress.step = svcTeamProgressBar.getProgBarStep();
    });

    $scope.virtualType = function() {
      $scope.techPermissionViewOrderPricing = svcDataPopulation.techPermissionViewOrderPricing();
      $scope.techBusinessPhone = svcDataPopulation.techBusinessPhone();
      $scope.techMobilePhone = svcDataPopulation.techMobilePhone();
      $scope.techPrimaryEmailConfirm1 = svcDataPopulation.techPrimaryEmailConfirm1();
      $scope.techPrimaryEmailConfirm2 = svcDataPopulation.techPrimaryEmailConfirm2();
      $scope.techAlternateEmailConfirm1 = svcDataPopulation.techAlternateEmailConfirm1();
      $scope.techAlternateEmailConfirm2 = svcDataPopulation.techAlternateEmailConfirm2();
      $scope.techSMSAddressConfirm1 = svcDataPopulation.techSMSAddressConfirm1();
      $scope.techSMSAddressConfirm2 = svcDataPopulation.techSMSAddressConfirm2();
      $scope.techSecondaryContactMethod = svcDataPopulation.techSecondaryContactMethod();
    };

    $scope.nextPage = function() {
      svcTeamProgressBar.setProgBarValue('50');
      svcTeamProgressBar.setProgBarStep('3');

      $location.path("/pages/team/skills");
    };

  }
]);
