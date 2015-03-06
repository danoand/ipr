// BusinessProfileCtrl is a controller for the businessprofile.html view
appControllers.controller("BusinessProfileCtrl", ["$scope", "$rootScope", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.companyAddress1 = svcDataPopulation.companyAddress1();
    $scope.companyCity = svcDataPopulation.companyCity();
    $scope.companyZip = svcDataPopulation.companyZip();
    $scope.companyInquiryMethod = svcDataPopulation.companyInquiryMethod();
    $scope.companyLegalName = svcDataPopulation.companyLegalName();
    $scope.companyName = svcDataPopulation.companyName();
    $scope.companyState = svcDataPopulation.companyState();
    $scope.primaryIndustry = svcDataPopulation.primaryIndustry();

    $scope.virtualType = function() {
      $scope.companyBusinessStart = svcDataPopulation.companyBusinessStart();
      $scope.companyBusinessStructure = svcDataPopulation.companyBusinessStructure();
      $scope.companyNumberEmployees = svcDataPopulation.companyNumberEmployees();
    };

    $scope.inspectMailingCheckbox = function() {

      if ($scope.checkMailingAddressCheckbox) {
        $scope.companyMailingAddress1 = $scope.companyAddress1;
        $scope.companyMailingCity = $scope.companyCity;
        $scope.companyMailingState = $scope.companyState;
        $scope.companyMailingZip = $scope.companyZip
      };
    };

  }
]);
