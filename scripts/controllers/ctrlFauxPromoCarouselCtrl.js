appControllers.controller("FauxPromoCarouselCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcCarouselData",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcCarouselData) {
    $scope.promoCurrentSlideIndex = 0;

    $scope.promoSlides = [];
    $scope.promoSlides = svcCarouselData.getCarouselDataPromo();
    $scope.promoCurrentSlide = $scope.promoSlides[$scope.promoCurrentSlideIndex];

    $scope.promoTransitionNext = function(inIndex) {

      // setTimeout(function(){ $scope.promoClass = 'myopague9' }, 100);
      // setTimeout(function(){ $scope.promoClass = 'myopague8' }, 200);
      // setTimeout(function(){ $scope.promoClass = 'myopague7' }, 300);
      // setTimeout(function(){ $scope.promoClass = 'myopague6' }, 400);
      // setTimeout(function(){ $scope.promoClass = 'myopague5' }, 500);
      setTimeout(function() {
        $scope.promoNextSlide(inIndex)
      }, 50);
      // setTimeout(function(){ $scope.promoClass = 'myopague6' }, 700);
      // setTimeout(function(){ $scope.promoClass = 'myopague7' }, 800);
      // setTimeout(function(){ $scope.promoClass = 'myopague8' }, 900);
      // setTimeout(function(){ $scope.promoClass = 'myopague9' }, 1000);
      // setTimeout(function(){ $scope.promoClass = 'myopague10'}, 1100);

    };

    $scope.promoTransitionPrevious = function(inIndex) {

      // setTimeout(function(){ $scope.promoClass = 'myopague9' }, 100);
      // setTimeout(function(){ $scope.promoClass = 'myopague8' }, 200);
      // setTimeout(function(){ $scope.promoClass = 'myopague7' }, 300);
      // setTimeout(function(){ $scope.promoClass = 'myopague6' }, 400);
      // setTimeout(function(){ $scope.promoClass = 'myopague5' }, 500);
      setTimeout(function() {
        $scope.promoPreviousSlide(inIndex)
      }, 50);
      // setTimeout(function(){ $scope.promoClass = 'myopague6' }, 700);
      // setTimeout(function(){ $scope.promoClass = 'myopague7' }, 800);
      // setTimeout(function(){ $scope.promoClass = 'myopague8' }, 900);
      // setTimeout(function(){ $scope.promoClass = 'myopague9' }, 1000);
      // setTimeout(function(){ $scope.promoClass = 'myopague10'}, 1100);

    };


    $scope.promoNextSlide = function(inIndex) {

      if (inIndex == $scope.promoSlides.length - 1) {
        $scope.promoCurrentSlideIndex = 0;
      } else {
        $scope.promoCurrentSlideIndex = inIndex + 1;
      }

      $scope.promoCurrentSlide = $scope.promoSlides[$scope.promoCurrentSlideIndex];

    };

    $scope.promoPreviousSlide = function(inIndex) {

      if (inIndex == 0) {
        $scope.promoCurrentSlideIndex = $scope.promoSlides.length - 1;
      } else {
        $scope.promoCurrentSlideIndex = inIndex - 1;
      }

      $scope.promoCurrentSlide = $scope.promoSlides[$scope.promoCurrentSlideIndex];

    };

  }
])
