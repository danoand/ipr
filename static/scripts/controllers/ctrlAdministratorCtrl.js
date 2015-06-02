// AdministratorCtrl is a controller for the 05_administrator.html view
appControllers.controller("AdministratorCtrl", ["$scope", "$rootScope", "$modal", "svcDataPopulation", "svcDataHTML", "svcAdminPart",
  function($scope, $rootScope, $modal, svcDataPopulation, svcDataHTML, svcAdminPart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $rootScope.$emit('evStatusData');

    $scope.companyUsername      = svcDataPopulation.companyUsername();
    $scope.companyEmail         = svcDataPopulation.companyEmail();
    $scope.companyFullNameFirst = svcDataPopulation.companyFullNameFirst();
    $scope.companyFullNameLast  = svcDataPopulation.companyFullNameLast();

    $scope.adminPart         = { yes: false, no: false };
    $scope.techSkillCategory = '-- Select Skill Category --';

    $scope.virtualType = function() {
      $scope.companyMiddleName = svcDataPopulation.companyMiddleName();
      $scope.companyJobTitle = svcDataPopulation.companyJobTitle();
      $scope.companyOwnerPrincipal = svcDataPopulation.companyOwnerPrincipal();
    };

    $rootScope.$on('evShowTechSkillCategories', function(event, data) {
      console.log('Fired event: evShowTechSkillCategories and setting $scope.showListEnteredSkills to true.');
      
      $scope.showListEnteredSkills = true;
    });

    $scope.setAdminPart = function() {
      svcAdminPart.setAdminPartFlag($scope.adminPartVal);

      $rootScope.$emit('evAdminIsParticipating');

      if ($scope.adminPartVal == 'yes') {
        $scope.adminPart.yes = true;

        $scope.companyServiceProvider = true;
      } else {
        $scope.adminPart.yes = false;
      }

      if ($scope.adminPartVal == 'no') {
        $scope.adminPart.no = true;
      } else {
        $scope.adminPart.no = false;
      }
    };

    $scope.techSkillCategory = '-- Select Skill Category --';

    $scope.openSkillsetModal = function() {
      var modalInstanceInsurance = $modal.open({
        size: 'lg',
        templateUrl: "myAdminModalSkillset.html",
        controller: 'SkillsetModalCtrl'
      });
    };

  }
]);
