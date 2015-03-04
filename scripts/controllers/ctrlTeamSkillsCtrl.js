// GetOrganizedCtrl is a controller for the team_skills.html view
appControllers.controller("TeamSkillsCtrl", ["$scope", "$rootScope", "$location", "$modal", "svcDataPopulation", "svcTeamProgressBar",
  function($scope, $rootScope, $location, $modal, svcDataPopulation, svcTeamProgressBar) {
    svcTeamProgressBar.setProgBarValue('50');
    svcTeamProgressBar.setProgBarStep('3');

    $scope.progress = {};
    $scope.progress.now = svcTeamProgressBar.getProgBarValue();
    $scope.progress.step = svcTeamProgressBar.getProgBarStep();

    $rootScope.$on('evTechProgressBar', function(event, data) {
      $scope.progress.now = svcTeamProgressBar.getProgBarValue();
      $scope.progress.step = svcTeamProgressBar.getProgBarStep();
    });

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
