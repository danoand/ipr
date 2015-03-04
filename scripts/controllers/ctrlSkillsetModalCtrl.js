// GetOrganizedCtrl is a controller for a modal on the team_skills.html view
appControllers.controller("SkillsetModalCtrl", ["$scope", "$rootScope", "$location", "$modalInstance",
  "svcDataPopulation", "svcTeamProgressBar",
  function($scope, $rootScope, $location, $modalInstance, svcDataPopulation, svcTeamProgressBar) {
    $scope.ok = function() {
      $modalInstance.close('Clicked Ok button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('Clicked Cancel button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

  }
]);
