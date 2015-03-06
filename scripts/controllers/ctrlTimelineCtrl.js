// TimelineCtrl is a controller for the timeline.html view
appControllers.controller("TimelineCtrl", ["$scope", "$rootScope", "$location", "svcDataPopulation", "svcDataHTML",
  function($scope, $rootScope, $location, svcDataPopulation, svcDataHTML) {
    svcDataHTML.setCompanyName(svcDataHTML.htmlCompanyName);
    svcDataHTML.setCompanyIcon(svcDataHTML.htmlCompanyIcon);
    $rootScope.$emit('evCompanyData');

    svcDataHTML.setAdminName(svcDataHTML.htmlAdminName);
    svcDataHTML.setAdminIcon(svcDataHTML.htmlAdminIcon);
    $rootScope.$emit('evAdminData');

    $scope.reroute = function(inRoute) {
      // Redirect to a particular path
      $location.path(inRoute);
    };

  }
]);
