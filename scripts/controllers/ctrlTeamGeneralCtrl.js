// TeamGeneralCtrl is the controller for the teamg_eneral.html view
appControllers.controller("TeamGeneralCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML",
  function($scope, $rootScope, $location, svcDataPopulation, svcTeamProgressBar, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    svcTeamProgressBar.setProgBarValue('8');
    svcTeamProgressBar.setProgBarStep('1');

    $scope.progress = {};
    $scope.progress.now = svcTeamProgressBar.getProgBarValue();
    $scope.progress.step = svcTeamProgressBar.getProgBarStep();

    $rootScope.$on('evTechProgressBar', function(event, data) {
      $scope.progress.now = svcTeamProgressBar.getProgBarValue();
      $scope.progress.step = svcTeamProgressBar.getProgBarStep();
    });

    $scope.inspectDispatchCheckbox = function() {

      if ($scope.checkMailingAddressCheckbox) {
        $scope.techAddress1 = svcDataPopulation.companyAddress1();
        $scope.techAddress2 = "";
        $scope.techCity = svcDataPopulation.companyCity();
        $scope.techState = svcDataPopulation.companyState();
        $scope.techZip = svcDataPopulation.companyZip();
      };
    };

    $scope.virtualType = function() {
      $scope.techLegalNameFirst = svcDataPopulation.techLegalNameFirst();
      $scope.techLegalNameLast = svcDataPopulation.techLegalNameLast();
      $scope.techServiceProviderRole = svcDataPopulation.techServiceProviderRole();
      $scope.techServiceRange = svcDataPopulation.techServiceRange();
    };

    $scope.changeCreateUserAccount = function() {
      if ($scope.techCreateUser == 'yes') {
        $scope.showTechUsernameField = true;
      };

      if ($scope.techCreateUser == 'no') {
        $scope.showTechUsernameField = false;
      };
    };

    $scope.nextPage = function() {
      svcTeamProgressBar.setProgBarValue('25');
      svcTeamProgressBar.setProgBarStep('2');

      $location.path("/pages/team/preferences");
    };

  }
]);
