// TeamBackgroundCtrl is a controller on the teambackground.html view
appControllers.controller("TeamBackgroundCtrl", ["$scope", "$rootScope", "$location", "$modal", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML",
  function($scope, $rootScope, $location, $modal, svcDataPopulation, svcTeamProgressBar, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    svcTeamProgressBar.setProgBarValue('75');
    svcTeamProgressBar.setProgBarStep('4');

    $scope.progress = {};
    $scope.progress.now = svcTeamProgressBar.getProgBarValue();
    $scope.progress.step = svcTeamProgressBar.getProgBarStep();

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
