appControllers.controller("AppCtrl", ["$scope", "$location",
  function($scope, $location) {
    return $scope.isSpecificPage = function() {
      var path;
      return path = $location.path(), _.contains(["/404", "/pages/signup"], path)
    }, $scope.main = {
      brand: "ServiceLive Registration",
      name: "Lisa Doe"
    }
  }
])
