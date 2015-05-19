appControllers.controller("AccountCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcDataTypeUser", "svcSPNSelect",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcDataTypeUser, svcSPNSelect) {
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

    $scope.regSPNs = false;

    $scope.showResendBtn = svcDataTypeUser.getShowResendBtn();

    // Populated the SPN list
    $scope.fetchSPNValues1 = svcSPNSelect.getSPNValues(1);
    $scope.fetchSPNValues2 = svcSPNSelect.getSPNValues(2);
    $scope.fetchSPNValues3 = svcSPNSelect.getSPNValues(3);
    $scope.fetchSPNValues4 = svcSPNSelect.getSPNValues(4);
    $scope.fetchSPNValues5 = svcSPNSelect.getSPNValues(5);

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

    // Function toggRegSPNs toggles a scope varable that
    //   drives the display controls to select an SPN
    $scope.toggRegSPNs = function() {
      if ($scope.regSPNs == true) {
        $scope.regSPNs = false;
      } else {
        $scope.regSPNs = true;
      }

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

    // Function clkSelSPN sets the style and label of the button
    //   clicked when the user selects/de-selects an SPN
    $scope.clkSelSPN = function(inVal) {
      console.log('Just clicked SPN select button with value of: ' + inVal);

      // Toggle the button that was clicked
      svcSPNSelect.togSPNSelectVal(inVal);

      switch (inVal) {
        case 1:
          $scope.fetchSPNValues1 = svcSPNSelect.getSPNValues(1);
          break;
        case 2:
          $scope.fetchSPNValues2 = svcSPNSelect.getSPNValues(2);
          break;
        case 3:
          $scope.fetchSPNValues3 = svcSPNSelect.getSPNValues(3);
          break;
        case 4:
          $scope.fetchSPNValues4 = svcSPNSelect.getSPNValues(4);
          break;
        case 5:
          $scope.fetchSPNValues5 = svcSPNSelect.getSPNValues(5);
      }
    }
  }
])
