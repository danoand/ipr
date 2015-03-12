// TeamBackgroundCtrl is a controller on the teambackground.html view
appControllers.controller("TeamBackgroundCtrl", ["$scope", "$rootScope", "$location", "$modal", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML", "svcDataGaugeChart",
  function($scope, $rootScope, $location, $modal, svcDataPopulation, svcTeamProgressBar, svcDataHTML, svcDataGaugeChart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.progressGaugeStepNum = svcDataGaugeChart.backgroundGaugeStepNum();
    $scope.progressGaugeData    = svcDataGaugeChart.backgroundGaugeData();
    $scope.progressGaugeOptions = svcDataGaugeChart.backgroundGaugeOptions();

    $scope.techFirstName = svcDataPopulation.techLegalNameFirst();
    $scope.techLastName  = svcDataPopulation.techLegalNameLast();
    $scope.techId        = svcDataPopulation.techId();

    $rootScope.$on('evTechProgressBar', function(event, data) {
      $scope.progress.now = svcTeamProgressBar.getProgBarValue();
      $scope.progress.step = svcTeamProgressBar.getProgBarStep();
    });

    $scope.virtualType = function() {
      $scope.techSSN = svcDataPopulation.techSSN();
      $scope.techPrimaryEmail1 = svcDataPopulation.techPrimaryEmailConfirm1();
      $scope.techPrimaryEmail2 = svcDataPopulation.techPrimaryEmailConfirm2();
      $scope.techAlternateEmail1 = svcDataPopulation.techAlternateEmailConfirm1();
      $scope.techAlternateEmail2 = svcDataPopulation.techAlternateEmailConfirm2();
    };

    $scope.nextPage = function() {

    };

  }
]);
