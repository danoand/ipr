// VerifyCtrl is a controller for the verifyctrl.html view
appControllers.controller("VerifyCtrl", ["$scope", "$rootScope", "$modal", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $modal, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $rootScope.$emit('evStatusData');

    $scope.companyUsername = svcDataPopulation.companyUsername();

    $scope.techFirstName = svcDataPopulation.techLegalNameFirst();
    $scope.techLastName  = svcDataPopulation.techLegalNameLast();
    $scope.techId        = svcDataPopulation.techId();

    $scope.openConfirmEmail = function() {
      var modalConfirmEmail;

      modalConfirmEmail = $modal.open({
        templateUrl: "myModalMailVerify.html",
        size: 'lg'
      });
    };
  }
]);
