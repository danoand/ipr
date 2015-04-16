appControllers.controller("AccountCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcDataTypeUser",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcDataTypeUser) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    $rootScope.$emit('evStatusData');

    $scope.companyPhone = svcDataPopulation.companyPhone();

    $scope.userType = svcDataTypeUser.getUserType();
    if ($scope.userType == 'agent') {
      $scope.userTypeAgent = true;
    }
    $rootScope.$on('chgUserType', function(event, data) {
      $scope.userType = svcDataTypeUser.getUserType();

      if ($scope.userType == 'agent') {
        $scope.userTypeAgent = true;
      }

    });

    $scope.showResendBtn = svcDataTypeUser.getShowResendBtn();

    $scope.virtualType = function() {
      $scope.companyFullName      = svcDataPopulation.companyFullName();
      $scope.companyEmail         = svcDataPopulation.companyEmail();
      $scope.companyUsername      = svcDataPopulation.companyUsername();
      $scope.companyPassword1     = svcDataPopulation.companyPassword1();
      $scope.companyPassword2     = svcDataPopulation.companyPassword2();
      $scope.companyMobilePhone   = svcDataPopulation.companyMobilePhone();
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


    $scope.openConfirmEmail = function() {
      svcDataTypeUser.setShowResendBtn(true);

      $scope.showResendBtn = svcDataTypeUser.getShowResendBtn();

      var modalConfirmEmail;

      modalConfirmEmail = $modal.open({
        templateUrl: "myModalMail04_verify.html",
        size: 'lg'
      });
    };

  }
])
