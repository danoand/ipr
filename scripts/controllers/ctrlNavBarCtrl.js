// NavBarCtrl is a controller for the main nav bar
appControllers.controller("NavBarCtrl", ["$scope", "$rootScope", "$location", "svcDataHTML",
  function($scope, $rootScope, $location, svcDataHTML) {
    $scope.getCompanyIcon = svcDataHTML.getCompanyIcon();
    $scope.getCompanyName = svcDataHTML.getCompanyName();
    $scope.getAdminIcon   = svcDataHTML.getAdminIcon();
    $scope.getAdminName   = svcDataHTML.getAdminName();

    $rootScope.$on('evCompanyData', function(event, data) {
      $scope.getCompanyName = svcDataHTML.getCompanyName();
      $scope.getCompanyIcon = svcDataHTML.getCompanyIcon();
    });

    $rootScope.$on('evAdminData', function(event, data) {
      $scope.getAdminName = svcDataHTML.getAdminName();
      $scope.getAdminIcon = svcDataHTML.getAdminIcon();
    });

    $rootScope.$on('evStatusData', function(event, data) {
      $scope.getProcessStatus = svcDataHTML.getProcessStatus();
    });

    $scope.gotoProgress = function() {
      $location.path("/ui/timeline");
    }
  }
]);
