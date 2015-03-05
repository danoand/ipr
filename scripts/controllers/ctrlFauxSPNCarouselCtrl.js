appControllers.controller("FauxSPNCarouselCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcCarouselData",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcCarouselData) {
    $scope.spnCurrentSlideIndex = 0;

    $scope.spnClass = 'myopague10';
    $scope.spnSlides = [];
    $scope.spnSlides = svcCarouselData.getCarouselData();
    $scope.spnCurrentSlide = $scope.spnSlides[$scope.spnCurrentSlideIndex];

    $scope.spnTransitionNext = function(inIndex) {

      // setTimeout(function(){ $scope.spnClass = 'myopague9' }, 100);
      // setTimeout(function(){ $scope.spnClass = 'myopague8' }, 200);
      // setTimeout(function(){ $scope.spnClass = 'myopague7' }, 300);
      // setTimeout(function(){ $scope.spnClass = 'myopague6' }, 400);
      // setTimeout(function(){ $scope.spnClass = 'myopague5' }, 500);
      setTimeout(function(){ $scope.spnNextSlide(inIndex) },  50);
      // setTimeout(function(){ $scope.spnClass = 'myopague6' }, 700);
      // setTimeout(function(){ $scope.spnClass = 'myopague7' }, 800);
      // setTimeout(function(){ $scope.spnClass = 'myopague8' }, 900);
      // setTimeout(function(){ $scope.spnClass = 'myopague9' }, 1000);
      // setTimeout(function(){ $scope.spnClass = 'myopague10'}, 1100);

    };

    $scope.spnTransitionPrevious = function(inIndex) {

      // setTimeout(function(){ $scope.spnClass = 'myopague9' }, 100);
      // setTimeout(function(){ $scope.spnClass = 'myopague8' }, 200);
      // setTimeout(function(){ $scope.spnClass = 'myopague7' }, 300);
      // setTimeout(function(){ $scope.spnClass = 'myopague6' }, 400);
      // setTimeout(function(){ $scope.spnClass = 'myopague5' }, 500);
      setTimeout(function(){ $scope.spnPreviousSlide(inIndex) },  50);
      // setTimeout(function(){ $scope.spnClass = 'myopague6' }, 700);
      // setTimeout(function(){ $scope.spnClass = 'myopague7' }, 800);
      // setTimeout(function(){ $scope.spnClass = 'myopague8' }, 900);
      // setTimeout(function(){ $scope.spnClass = 'myopague9' }, 1000);
      // setTimeout(function(){ $scope.spnClass = 'myopague10'}, 1100);

    };


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
