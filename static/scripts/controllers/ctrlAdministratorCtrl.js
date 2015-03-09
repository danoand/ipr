// AdministratorCtrl is a controller for the administrator.html view
appControllers.controller("AdministratorCtrl", ["$scope", "$rootScope", "svcDataPopulation", "svcDataHTML", "svcAdminPart",
  function($scope, $rootScope, svcDataPopulation, svcDataHTML, svcAdminPart) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $rootScope.$emit('evStatusData');

    $scope.companyUsername = svcDataPopulation.companyUsername();
    $scope.companyEmail = svcDataPopulation.companyEmail();
    $scope.companyFullNameFirst = svcDataPopulation.companyFullNameFirst();
    $scope.companyFullNameLast = svcDataPopulation.companyFullNameLast();

    $scope.virtualType = function() {
      $scope.companyMiddleName = svcDataPopulation.companyMiddleName();
      $scope.companyJobTitle = svcDataPopulation.companyJobTitle();
      $scope.companyOwnerPrincipal = svcDataPopulation.companyOwnerPrincipal();
    }

    $scope.setAdminPart = function() {
      svcAdminPart.setAdminPartFlag($scope.adminPartVal);

      $rootScope.$emit('evAdminIsParticipating');
    };

  }
]);
