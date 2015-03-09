appControllers.controller("FauxSPNCarouselCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcCarouselData",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcCarouselData) {
    $scope.spnCurrentSlideIndex = 0;

    $scope.spnClass = 'myopague10';
    $scope.spnSlides = [];
    $scope.spnSlides = svcCarouselData.getCarouselData();
    $scope.spnCurrentSlide = $scope.spnSlides[$scope.spnCurrentSlideIndex];

    $scope.spnNextSlide = function(inIndex) {

      if (inIndex == $scope.spnSlides.length - 1) {
        $scope.spnCurrentSlideIndex = 0;
      } else {
        $scope.spnCurrentSlideIndex = inIndex + 1;
      }

      $scope.spnCurrentSlide = $scope.spnSlides[$scope.spnCurrentSlideIndex];

    };

    $scope.spnPreviousSlide = function(inIndex) {

      if (inIndex == 0) {
        $scope.spnCurrentSlideIndex = $scope.spnSlides.length - 1;
      } else {
        $scope.spnCurrentSlideIndex = inIndex - 1;
      }

      $scope.spnCurrentSlide = $scope.spnSlides[$scope.spnCurrentSlideIndex];

    };

  }
])
