// GetOrganizedCtrl is a controller for the 01_getorganized.html view
appControllers.controller("GetOrganizedCtrl", ["$scope", "$rootScope", "svcDataPopulation",
  function($scope, $rootScope, svcDataPopulation) {
    $scope.companyName        = svcDataPopulation.companyName();
    $scope.uploadStatus       = svcDataPopulation.uploadStatusNotStarted();
    $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
    $scope.uploadMessage      = false;
    $scope.alerts             = [];

    $scope.postUpload = false;

    $scope.companyAddress1 = svcDataPopulation.companyAddress1();
    $scope.companyCity     = svcDataPopulation.companyCity();
    $scope.companyState    = svcDataPopulation.companyState();
    $scope.companyZip      = svcDataPopulation.companyZip();

    $scope.insArray        = svcDataPopulation.getInsArray();

    $rootScope.$emit('evStatusData');

    tmpSuccessAlert = { type: 'success', msg: 'Your document has been loaded and we have pre-populated some of your business information.  Please verify and make edits if needed.' };

    $scope.uploadStatusClick = function() {
      switch ($scope.uploadStatus.sequence) {
        case 1:
          $scope.uploadStatus = svcDataPopulation.uploadStatusStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
          emptyAlert();
          break;
        case 2:
          $scope.uploadStatus = svcDataPopulation.uploadStatusCompleted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
          addAlert(tmpSuccessAlert);
          break;
        case 3:
          $scope.uploadStatus = svcDataPopulation.uploadStatusNotStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
          emptyAlert();
          break
        default:
          $scope.uploadStatus = svcDataPopulation.uploadStatusNotStarted();
          $scope.uploadStatusMarkup = $scope.uploadStatus.markup;
          emptyAlert();
      }
    };

    addAlert = function(inObject) {
      $scope.alerts.push(inObject);
    };

    emptyAlert = function() {
      $scope.alerts.length = 0;
    };

    $scope.emptyAlert = function() {
      emptyAlert();
    };

    $scope.uploadDoc = function() {
      console.log('Just inside uploadDoc');
      $scope.postUpload = true;
    };

  }
]);
