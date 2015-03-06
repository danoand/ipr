appControllers.controller("FauxPromoCarouselCtrl", ["$scope", "$rootScope", "$modal", "$location", "svcDataPopulation", "svcDataHTML", "svcCarouselData",
  function($scope, $rootScope, $modal, $location, svcDataPopulation, svcDataHTML, svcCarouselData) {
    $scope.promoCurrentSlideIndex = 0;

    $scope.promoSlides = [];
    $scope.promoSlides = svcCarouselData.getCarouselDataPromo();
    $scope.promoCurrentSlide = $scope.promoSlides[$scope.promoCurrentSlideIndex];

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
