// GetOrganizedCtrl is a controller for a modal on the 08_C_team_skills.html view
appControllers.controller("SkillsetModalCtrl", ["$scope", "$rootScope", "$location", "$modalInstance", "uuid2",
  "svcDataPopulation", "svcTeamProgressBar", "svcSkillSelections",
  function($scope, $rootScope, $location, $modalInstance, uuid2, svcDataPopulation, svcTeamProgressBar, svcSkillSelections) {

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

    // Initialize variables for Addon Skills
    $scope.addonSkillCtr      = 0;
    $scope.addonSkills        = [];
    $scope.addonTypeToggleVal = [
      false,
      false,
      false,
      false
    ];
    $scope.curAddonSkill      = '';
    $scope.curAddonSkillIndex = '';

    // Initialize the Addon Skill Type button style
    $scope.btnAddonTypeStyle = [];
    for (i = 1; i < 5; i++) {
      $scope.btnAddonTypeStyle[i] = intBtnStyle;
    }

    // Disable the Addon Skill Type buttons
    $scope.disableAddonTypeBtns = true;

    // Initialize the Addon Skill Types used in the view
    $scope.addonTypeText  = [];
    for (i = 1; i < 5; i++) {
      $scope.addonTypeText[i] = svcSkillSelections.getBtnTypeText(i);
    }

    // Function pushAddonSkill adds an element on to the list
    //    of Addon Skills
    $scope.pushAddonSkill = function(inVal) {
      // Get the length of the current array (list of Addon Skills)
      tmpIndex = $scope.addonSkills.length;

      // Create an object to push onto the Addon Skills (array)
      tmpPushObj = {
        text: inVal,
        index: fncGetUUID(),
        "typeToggle": [
          false,
          false,
          false,
          false,
          false
        ]
      };

      // Push the object (new Addon Skill) onto the array
      $scope.addonSkills[tmpIndex] = tmpPushObj;

      // Call the "mouse over" function for the new Addon Skill
      $scope.addonMouseEnter($scope.addonSkills[tmpIndex].index);
    };

    fncGetUUID = function() {
      return uuid2.newuuid();
    };

    // Function deleteAddonSkill deletes an element from the list
    //    of Addon Skills
    $scope.deleteAddonSkill = function(inVal) {
      // Iterate through the array and delete the appropriate element
      for (i = 0; i < $scope.addonSkills.length; i++) {
        tmpElement = $scope.addonSkills[i];

        if (tmpElement.index == inVal) {
          // Found the element, grab the Skill Type toggle values
          $scope.addonSkills.splice(i, 1);

          // "Mouse over" the first Addon Skill (if it exists)
          if ($scope.addonSkills.length > 0) {
            // Call the "mouse over" function on the first Addon Skill
            $scope.addonMouseEnter($scope.addonSkills[0].index);
          }
        }
      }
    };

    // Function addonMouseEnter displays the Skill Type buttons for an
    //    Addon Skill
    $scope.addonMouseEnter = function(inVal) {

      // Iterate through the array and find the appropriate element
      for (i = 0; i < $scope.addonSkills.length; i++) {
        tmpElement = $scope.addonSkills[i];

        if (tmpElement.index == inVal) {
          // Found the element, assign the Addon Skill Type toggle values
          $scope.addonTypeToggleVal = tmpElement.typeToggle;

          // Assign the Addon Skill name and index value (identifier)
          $scope.curAddonSkill      = tmpElement.text;
          $scope.curAddonSkillIndex = tmpElement.index;

          // Enable the Addon Skill Type buttons
          $scope.disableAddonTypeBtns = false;

          // Apply styles to the Addon Skill Type buttons
          fncStyleAddonTypeBtns($scope.addonTypeToggleVal);
        }

      };
    };

    // Function fncStyleAddonTypeBtns styles the Addon Skill Type buttons given the Addon Skill Type toggle values
    fncStyleAddonTypeBtns = function(inArray) {
      // Iterate through the toggle values
      for (i = 1; i < 5; i++) {

        tmpAddonTypeToggleVal = inArray[i];

        if (tmpAddonTypeToggleVal) {
          // Toggle value is 'true': apply selected styles

          // Change to default button style
          $scope.btnAddonTypeStyle[i] = selBtnStyleType;

          // Change to default button label text
          $scope.addonTypeText[i] = svcSkillSelections.getInitSkillTypeText(i).toUpperCase();
        } else {
          // Toggle value is 'false': apply default styles

          // Change to default button style
          $scope.btnAddonTypeStyle[i] = intBtnStyle;

          // Change to default button label text
          $scope.addonTypeText[i] = svcSkillSelections.getInitSkillTypeText(i);
        }

      }
    };

    // Function showAddonSkillTypes returns a value that drives whether
    //   the Addon Skill Type buttons should be displayed
    $scope.showAddonSkillTypes = function() {
      tmpRetValue = false;

      if ($scope.addonSkills.length > 0) {
        tmpRetValue = true;
      }

      return tmpRetValue;
    };

    // Function clickAddonTypeBtn applies styling and manages the underlying data structure
    //    after an Addon Skill Type button has been clicked
    $scope.clickAddonTypeBtn = function(inVal) {
      // Iterate through the Addon Skills and find the Skill that is currently "moused over"
      for (i = 0; i < $scope.addonSkills.length; i++) {
        // Grab the data structure representing the Skill
        tmpIterElement = $scope.addonSkills[i];

        // Fetch the Addon Skill Type toggle values from the "moused over" Addon Skill
        if (tmpIterElement.index == $scope.curAddonSkillIndex) {
          // Get the toggle values data
          tmpIterElementToggle = tmpIterElement.typeToggle;

          // Toggle the toggle value due to the click
          if (tmpIterElementToggle[inVal]) {
            // Toggle value is currently 'true', flip to false
            tmpIterElementToggle[inVal] = false;

          } else {
            // Toggle value is currently 'true', flip to true
            tmpIterElementToggle[inVal] = true;

          }

          // "Write" the new toggle values to the Addon Skill data structure
          $scope.addonSkills[i].typeToggle = tmpIterElementToggle;

          // Style the Addon Skill Type buttons according to the updated toggle values
          fncStyleAddonTypeBtns($scope.addonSkills[i].typeToggle);
        }
      }

    };

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
