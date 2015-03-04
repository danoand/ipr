appControllers.controller("AccountCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML) {

    $scope.companyPhone = svcDataPopulation.companyPhone();

    $scope.virtualType = function() {
      $scope.companyFullName = svcDataPopulation.companyFullName();
      $scope.companyEmail = svcDataPopulation.companyEmail();
      $scope.companyUsername = svcDataPopulation.companyUsername();
      $scope.companyPassword1 = svcDataPopulation.companyPassword1();
      $scope.companyPassword2 = svcDataPopulation.companyPassword2();
      $scope.companyMobilePhone = svcDataPopulation.companyMobilePhone();
      $scope.companyInquiryMethod = svcDataPopulation.companyInquiryMethod();
    };

    $scope.openIndustry = function() {
      var modelInstanceIndustry;

      modelInstanceIndustry = $modal.open({
        templateUrl: "myModalIndustry.html",
        size: 'lg'
      });

    };

    $scope.openZipCode = function() {
      var modelInstanceZipCode;

      modelInstanceZipCode = $modal.open({
        templateUrl: "myModalZip.html"
      });

    };

    $scope.openViewSPNs = function() {
      var modalInstanceViewSPNs;

      modalInstanceViewSPNs = $modal.open({
        templateUrl: "myModalViewSPNs.html"
      });

    };

    $scope.nextPage = function() {
      svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
      svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);

      $rootScope.$emit('evAdminData');
      $location.path("/pages/verify");
    };

  }
])
