// CompanyNameCtrl is the controller for the 02_companyname.html view
appControllers.controller("CompanyNameCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML) {
    $rootScope.$emit('evStatusData');
    
    // Initialize the company name
    $scope.companyDBAName = svcDataPopulation.companyName();
    // Initialize 'SELECT' button look & feel
    $scope.selectButton1 = {
      id: 1,
      text: 'SELECT',
      color: 'btn-default'
    };
    $scope.selectButton2 = {
      id: 2,
      text: 'SELECT',
      color: 'btn-default'
    };
    $scope.selectButton3 = {
      id: 3,
      text: 'SELECT',
      color: 'btn-default'
    };

    var helperDefaultMe = function(inButtonId) {
      switch (inButtonId) {
        case 1:
          $scope.selectButton1 = {
            id: 1,
            text: 'SELECT',
            color: 'btn-default'
          };
          break;
        case 2:
          $scope.selectButton2 = {
            id: 2,
            text: 'SELECT',
            color: 'btn-default'
          };
          break;
        case 3:
          $scope.selectButton3 = {
            id: 3,
            text: 'SELECT',
            color: 'btn-default'
          };
      };

    };

    var helperSelectMe = function(inButtonId) {
      switch (inButtonId) {
        case 1:
          $scope.selectButton1 = {
            id: 1,
            text: 'SELECTED',
            color: 'btn-primary'
          };
          break;
        case 2:
          $scope.selectButton2 = {
            id: 2,
            text: 'SELECTED',
            color: 'btn-primary'
          };
          break;
        case 3:
          $scope.selectButton3 = {
            id: 3,
            text: 'SELECTED',
            color: 'btn-primary'
          };
      };

    };

    // Function to change a button to selected
    $scope.selectMe = function(inButtonID) {
      switch (inButtonID) {
        case 1:
          helperSelectMe(1)
          helperDefaultMe(2)
          helperDefaultMe(3)
          break;
        case 2:
          helperDefaultMe(1)
          helperSelectMe(2)
          helperDefaultMe(3)
          break;
        case 3:
          helperDefaultMe(1)
          helperDefaultMe(2)
          helperSelectMe(3)
          break
        default:
          helperDefaultMe(1)
          helperDefaultMe(2)
          helperDefaultMe(3)
      };
    };

    $scope.clickLegalName = function() {
      $scope.companyLegalName = svcDataPopulation.companyLegalName();
    };

    $scope.openIndustry = function() {
      var modelInstanceIndustry;

      modelInstanceIndustry = $modal.open({
        templateUrl: "myModalIndustry.html"
      });

    };

    $scope.openZipCode = function() {
      var modelInstanceZipCode;

      modelInstanceZipCode = $modal.open({
        templateUrl: "myModalZip.html"
      });

    };

    $scope.openEnterAddress = function() {
      var modalInstanceEnterAddress;

      modalInstanceEnterAddress = $modal.open({
        templateUrl: "myModalEnterAddress.html"
      });

    };

    $scope.virtualType = function() {
      $scope.clickLegalName();
    };

    $scope.nextPage = function() {
      svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
      svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);

      $rootScope.$emit('evCompanyData');
      $location.path("/pages/account");
    }
  }
])
