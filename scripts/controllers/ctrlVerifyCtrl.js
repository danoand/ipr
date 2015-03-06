// VerifyCtrl is a controller for the verifyctrl.html view
appControllers.controller("VerifyCtrl", ["$scope", "$rootScope", "$modal", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $modal, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.companyUsername = svcDataPopulation.companyUsername();

    $scope.openConfirmEmail = function() {
      var modalConfirmEmail;

      modalConfirmEmail = $modal.open({
        templateUrl: "myModalMailVerify.html"
      });
    };
  }
]);
