// VerifyCtrl is a controller for the verifyctrl.html view
appControllers.controller("VerifyCtrl", ["$scope", "$rootScope", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.companyUsername = svcDataPopulation.companyUsername();
  }
]);
