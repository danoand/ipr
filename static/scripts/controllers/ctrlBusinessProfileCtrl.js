// BusinessProfileCtrl is a controller for the 06_businessprofile.html view
appControllers.controller("BusinessProfileCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $location, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $rootScope.$emit('evStatusData');

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

    $scope.nextPage = function() {
      $location.path('/pages/insurance');
    };

  }
]);
