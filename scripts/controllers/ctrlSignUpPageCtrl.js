// SignUpPageCtrl is the controller for the signup.html view
appControllers.controller("SignUpPageCtrl", ["$scope", "svcDataPopulation",
  function($scope, svcDataPopulation) {
    $scope.primaryIndustry = 'Primary Industry';

    return $scope.clickCompany = function() {
      $scope.company = svcDataPopulation.companyName();
      $scope.zipCode = svcDataPopulation.companyZip();
      $scope.primaryIndustry = svcDataPopulation.primaryIndustry();
    }
  }
])
