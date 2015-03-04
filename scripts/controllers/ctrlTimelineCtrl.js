// TimelineCtrl is a controller for the timeline.html view
appControllers.controller("TimelineCtrl", ["$scope", "$location", "svcDataPopulation",
  function($scope, $location, svcDataPopulation) {

    $scope.reroute = function(inRoute) {
      // Redirect to a particular path
      $location.path(inRoute);
    };

  }
]);
