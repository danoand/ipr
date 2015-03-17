// GetOrganizedCtrl is a controller for the 08_C_team_skills.html view
appControllers.controller("TeamSkillsCtrl", ["$scope", "$rootScope", "$location", "$modal", "svcDataPopulation", "svcTeamProgressBar", "svcDataHTML", "svcDataGaugeChart",
  function($scope, $rootScope, $location, $modal, svcDataPopulation, svcTeamProgressBar, svcDataHTML, svcDataGaugeChart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.progressGaugeStepNum = svcDataGaugeChart.skillsGaugeStepNum();
    $scope.progressGaugeData    = svcDataGaugeChart.skillsGaugeData();
    $scope.progressGaugeOptions = svcDataGaugeChart.skillsGaugeOptions();

    $scope.techFirstName = svcDataPopulation.techLegalNameFirst();
    $scope.techLastName  = svcDataPopulation.techLegalNameLast();
    $scope.techId        = svcDataPopulation.techId();

    $scope.techSkillCategory = '-- Select Skill Category --';

    $scope.openSkillsetModal = function() {
      var modalInstanceInsurance = $modal.open({
        size: 'lg',
        templateUrl: "myModalSkillset.html",
        controller: 'SkillsetModalCtrl'
      });
    };

    $scope.virtualType = function() {
      $scope.showListEnteredSkills = true;
    };

    $rootScope.$on('evShowTechSkillCategories', function(event, data) {
      $scope.showListEnteredSkills = true;
    });

    $scope.nextPage = function() {
      svcTeamProgressBar.setProgBarValue('75');
      svcTeamProgressBar.setProgBarStep('4');

      $location.path("/pages/team/background");
    };

  }
]);
