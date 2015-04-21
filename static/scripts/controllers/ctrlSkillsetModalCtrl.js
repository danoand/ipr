// GetOrganizedCtrl is a controller for a modal on the 08_C_team_skills.html view
appControllers.controller("SkillsetModalCtrl", ["$scope", "$rootScope", "$location", "$modalInstance",
  "svcDataPopulation", "svcTeamProgressBar", "svcSkillSelections",
  function($scope, $rootScope, $location, $modalInstance, svcDataPopulation, svcTeamProgressBar, svcSkillSelections) {
    console.log('Just inside the SkillsetModalCtrl controller');

    // Initialize the button styles used in the view
    var intBtnStyle      = svcSkillSelections.initBtnStyle();
    var selBtnStyleSkill = svcSkillSelections.selectedBtnStyleSkill();
    var selBtnStyleType  = svcSkillSelections.selectedBtnStyleType();

    // Initialize the Skill and Skill Type toggle values (selection indicators)
    svcSkillSelections.resetSkillToggleValues();
    svcSkillSelections.resetTypeToggleValues();

    // Initialize the service vertical and skill names used in the view
    $scope.techServiceCategory = 'Home Electronics';
    $scope.techSkillText  = [];
    for (i = 1; i < 5; i++) {
      $scope.techSkillText[i] = svcSkillSelections.getBtnSkillText(i);
    }

    // Initialize variable to hold the current Skill name and number (1, 2, 3, 4)
    $scope.curSkill    = '';
    $scope.curSkillNbr = 0;

    // Initialize the Skill Types used in the view
    $scope.techTypeText  = [];
    for (i = 1; i < 5; i++) {
      $scope.techTypeText[i] = svcSkillSelections.getBtnTypeText(i);
    }

    // Initialize the Skill button style
    $scope.btnSkillStyle = [];
    for (i = 1; i < 5; i++) {
      $scope.btnSkillStyle[i] = intBtnStyle;
    }

    // Initialize the Skill Type button style
    $scope.btnTypeStyle = [];
    for (i = 1; i < 5; i++) {
      $scope.btnTypeStyle[i] = intBtnStyle;
    }

    // Disable the Skill Type buttons
    $scope.disableTypeBtns = true;

    $scope.ok = function() {
      $modalInstance.close('Clicked Ok button');

    };

    $scope.cancel = function() {
      $modalInstance.dismiss('Clicked Cancel button');

    };

    // Skill button has been clicked, take appropriate actions
    $scope.clickSkillBtn = function(inVal) {
      // Fetch the current Skill toggle value
      tmpSkillToggleValue = svcSkillSelections.isSkillSelected(inVal);

      if (tmpSkillToggleValue) {
        // Skill is currently selected... take appropriate action

        // Set current toggle value to false
        svcSkillSelections.setSkillToggle(inVal, false);

        // Change to default button style
        $scope.btnSkillStyle[inVal] = intBtnStyle;

        // Change to default button label text
        $scope.techSkillText[inVal] = svcSkillSelections.getInitSkillText(inVal);

        // Disable the Skill Type buttons
        $scope.disableTypeBtns = true;

      }

      if (!tmpSkillToggleValue) {
        // Skill is currently not selected... take appropriate action

        // Set current toggle value to false
        svcSkillSelections.setSkillToggle(inVal, true);

        // Change to default button style
        $scope.btnSkillStyle[inVal] = selBtnStyleSkill;

        // Change to default button label text
        $scope.techSkillText[inVal] = svcSkillSelections.getInitSkillText(inVal).toUpperCase();

        // Enable the Skill Type buttons
        $scope.disableTypeBtns = false;

      }

    };

    // Skill Type button has been clicked, take appropriate actions
    $scope.clickTypeBtn = function(inVal) {
      // Fetch the current Skill toggle value
      tmpSkillTypeToggleValue = svcSkillSelections.isSkillTypeSelected($scope.curSkillNbr, inVal);


      if (tmpSkillTypeToggleValue) {

        // Skill Type is currently selected... take appropriate action

        // Set current toggle value to false
        svcSkillSelections.setSkillTypeToggle($scope.curSkillNbr, inVal, false);

        // Change to default button style
        $scope.btnTypeStyle[inVal] = intBtnStyle;

        // Change to default button label text
        $scope.techTypeText[inVal] = svcSkillSelections.getInitSkillTypeText(inVal);

      }

      if (!tmpSkillTypeToggleValue) {
        // Skill Type is currently not selected... take appropriate action

        // Set current toggle value to false
        svcSkillSelections.setSkillTypeToggle($scope.curSkillNbr, inVal, true);

        // Change to default button style
        $scope.btnTypeStyle[inVal] = selBtnStyleType;

        // Change to default button label text
        $scope.techTypeText[inVal] = svcSkillSelections.getInitSkillTypeText(inVal).toUpperCase();

      }

    };

    // Function skillMouseEnter drives the display of Skill Types when
    //    the user mouses over a Skill Type
    $scope.skillMouseEnter = function(inVal) {
      // Set the number of the Skill (that was 'overmoused')
      $scope.curSkillNbr = inVal;

      // Get the title of the Skill so we can display it to the User as a header
      $scope.curSkill = svcSkillSelections.getInitSkillText(inVal);

      // Disable the Skill Type buttons
      $scope.disableTypeBtns = true;

      // Get the Skill Type toggle values for this Skill
      tmpTypeToggleValues = svcSkillSelections.getSkillTypeToggleValues(inVal);

      console.log('tmpTypeToggleValues is now: ' + JSON.stringify(tmpTypeToggleValues));

      // Style the Skill Type buttons given the array of toggle values
      fncStyleTypeBtns(tmpTypeToggleValues);

      // Determine if the Skill is marked as selected
      if (svcSkillSelections.isSkillSelected(inVal)) {
        // User has previously selected this skill, enable the Skill Type buttons
        $scope.disableTypeBtns = false;
      }
    };

    // Function to style the Skill Type buttons given the Skill Type toggle values
    fncStyleTypeBtns = function(inArray) {
      // Iterate through the toggle values
      for (i = 1; i < 5; i++) {

        tmpSkillTypeToggleVal = inArray[i];

        if (tmpSkillTypeToggleVal) {
          // Change to default button style
          $scope.btnTypeStyle[i] = selBtnStyleType;

          // Change to default button label text
          $scope.techTypeText[i] = svcSkillSelections.getInitSkillTypeText(i).toUpperCase();
        }

        if (!tmpSkillTypeToggleVal) {
          // Change to default button style
          $scope.btnTypeStyle[i] = intBtnStyle;

          // Change to default button label text
          $scope.techTypeText[i] = svcSkillSelections.getInitSkillTypeText(i);
        }

      }
    };

  }
]);
