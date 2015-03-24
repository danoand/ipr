// TeamPreferencesCtrl is the controller for the 08_B_team_preferences.html view
appControllers.controller("TeamPreferencesCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML", "svcDataGaugeChart",
  function($scope, $rootScope, $location, svcDataPopulation, svcTeamProgressBar, svcDataHTML, svcDataGaugeChart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.techFirstName = svcDataPopulation.techLegalNameFirst();
    $scope.techLastName  = svcDataPopulation.techLegalNameLast();
    $scope.techId        = svcDataPopulation.techId();

    $scope.progressGaugeStepNum = svcDataGaugeChart.preferencesGaugeStepNum();
    $scope.progressGaugeData    = svcDataGaugeChart.preferencesGaugeData();
    $scope.progressGaugeOptions = svcDataGaugeChart.preferencesGaugeOptions();

    $scope.enAlertsToAltEmail         = false;
    $scope.techAlternateEmailConfirm1 = "";
    $scope.techAlternateEmailConfirm2 = "";

    $scope.virtualType = function() {
      $scope.techPermViewOrderPricing   = svcDataPopulation.techPermViewOrderPricing();
      $scope.techBusinessPhone          = svcDataPopulation.techBusinessPhone();
      $scope.techMobilePhone            = svcDataPopulation.techMobilePhone();
      $scope.techPrimaryEmailConfirm1   = svcDataPopulation.techPrimaryEmailConfirm1();
      $scope.techPrimaryEmailConfirm2   = svcDataPopulation.techPrimaryEmailConfirm2();
      $scope.techAlternateEmailConfirm1 = svcDataPopulation.techAlternateEmailConfirm1();
      $scope.techAlternateEmailConfirm2 = svcDataPopulation.techAlternateEmailConfirm2();
      $scope.techSMSAddressConfirm1     = svcDataPopulation.techSMSAddressConfirm1();
      $scope.techSMSAddressConfirm2     = svcDataPopulation.techSMSAddressConfirm2();
      $scope.techSecondaryContactMethod = svcDataPopulation.techSecondaryContactMethod();
    };

    $scope.useBusEmail = function() {
      if ($scope.techUseBusinessEmail) {
        $scope.techPrimaryEmailConfirm1 = svcDataPopulation.companyEmail();
        $scope.techPrimaryEmailConfirm2 = svcDataPopulation.companyEmail();

      } else {
        $scope.techPrimaryEmailConfirm1 = "";
        $scope.techPrimaryEmailConfirm2 = "";

      }
    };

    $scope.nextPage = function() {
      svcTeamProgressBar.setProgBarValue('50');
      svcTeamProgressBar.setProgBarStep('3');

      $location.path("/pages/team/skills");
    };

    $scope.chkEnableAlerts = function() {
      // If both alt emails are the same then enable the checkbox asking the user if
      //    wants to send order alerts to their alternate email address
      if ($scope.techAlternateEmailConfirm1.length > 0) {
        if ($scope.techAlternateEmailConfirm1 == $scope.techAlternateEmailConfirm2) {
          $scope.enAlertsToAltEmail = true;

          return;
        }
      }

      // Alt emails are not the same, disable checkbox
      $scope.techSendAlertsToAltEmail = false;
      $scope.enAlertsToAltEmail = false;
    };

    $scope.notMe = function(inVal) {
      retValue = true;

      if (inVal) {
        retValue = false;
      }

      return retValue;
    };

  }
]);
