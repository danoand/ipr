// GetOrganizedCtrl is a controller for the getorganized.html view
appControllers.controller("GetOrganizedCtrl", ["$scope", "svcDataPopulation",
  function($scope, svcDataPopulation) {
    $scope.companyName = svcDataPopulation.companyName();
    $scope.uploadStatus = svcDataPopulation.uploadStatusNotStarted();
    $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
    $scope.uploadMessage = false;

    $scope.uploadStatusClick = function() {
      switch ($scope.uploadStatus.sequence) {
        case 1:
          $scope.uploadStatus = svcDataPopulation.uploadStatusStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup
          $scope.uploadMessage = false;
          break;
        case 2:
          $scope.uploadStatus = svcDataPopulation.uploadStatusCompleted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup
          $scope.uploadMessage = true;
          break;
        case 3:
          $scope.uploadStatus = svcDataPopulation.uploadStatusNotStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup
          $scope.uploadMessage = false;
          break
        default:
          $scope.uploadStatus = svcDataPopulation.uploadStatusNotStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup
          $scope.uploadMessage = false;
      }
    };

  }
]);
