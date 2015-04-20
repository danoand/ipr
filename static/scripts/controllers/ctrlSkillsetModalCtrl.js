// GetOrganizedCtrl is a controller for a modal on the 08_C_team_skills.html view
appControllers.controller("SkillsetModalCtrl", ["$scope", "$rootScope", "$location", "$modalInstance",
  "svcDataPopulation", "svcTeamProgressBar", "svcSkillSelections",
  function($scope, $rootScope, $location, $modalInstance, svcDataPopulation, svcTeamProgressBar, svcSkillSelections) {

    var intBtnStyle      = 'btn btn-block btn-default';
    var selBtnStyleSkill = 'btn btn-block btn-primary';
    var selBtnStyleType  = 'btn btn-block btn-warning';

    $scope.techServiceCategory = 'Home Electronics';
    $scope.techSkillText1 = svcSkillSelections.getBtnSkillText1();
    $scope.techSkillText2 = svcSkillSelections.getBtnSkillText2();
    $scope.techSkillText3 = svcSkillSelections.getBtnSkillText3();
    $scope.techSkillText4 = svcSkillSelections.getBtnSkillText4();

    $scope.curSkill = '';
    $scope.curSkillNbr = 0;
    $scope.techTypeText1 = svcSkillSelections.getBtnTypeText1();
    $scope.techTypeText2 = svcSkillSelections.getBtnTypeText2();
    $scope.techTypeText3 = svcSkillSelections.getBtnTypeText3();
    $scope.techTypeText4 = svcSkillSelections.getBtnTypeText4();

    $scope.btnSkillStyle1 = svcSkillSelections.getBtnSkillStyle(1);
    $scope.btnSkillStyle2 = svcSkillSelections.getBtnSkillStyle(2);
    $scope.btnSkillStyle3 = svcSkillSelections.getBtnSkillStyle(3);
    $scope.btnSkillStyle4 = svcSkillSelections.getBtnSkillStyle(4);

    $scope.btnTypeStyle1 = svcSkillSelections.getBtnTypeStyle(1);
    $scope.btnTypeStyle2 = svcSkillSelections.getBtnTypeStyle(2);
    $scope.btnTypeStyle3 = svcSkillSelections.getBtnTypeStyle(3);
    $scope.btnTypeStyle4 = svcSkillSelections.getBtnTypeStyle(4);

    $scope.btnSkillToggle1 = svcSkillSelections.getBtnSkillToggle1();
    $scope.btnSkillToggle2 = svcSkillSelections.getBtnSkillToggle2();
    $scope.btnSkillToggle3 = svcSkillSelections.getBtnSkillToggle3();
    $scope.btnSkillToggle4 = svcSkillSelections.getBtnSkillToggle4();

    $scope.btnTypeToggle1 = svcSkillSelections.getBtnTypeToggle(0, 1);
    $scope.btnTypeToggle2 = svcSkillSelections.getBtnTypeToggle(0, 2);
    $scope.btnTypeToggle3 = svcSkillSelections.getBtnTypeToggle(0, 3);
    $scope.btnTypeToggle4 = svcSkillSelections.getBtnTypeToggle(0, 4);

    // fncResetDisableTypeBtns disables and resets the styling of the Type buttons
    fncResetDisableTypeBtns = function(inVal) {
      // Disable the visible buttons
      $scope.disableTypeBtns = true;

      // Reset Type buttons
      svcSkillSelections.resetTypeBtns(inVal);

    };
    // fncEnableTypeBtns enables the styling of the Type buttons
    fncEnableTypeBtns = function() {
      // Enable the visible buttons
      $scope.disableTypeBtns = false;
    };

    // fncStyleTypeBtns styles the Type buttons based on a toggle button passed to the function
    fncStyleTypeBtns = function(inToggleVal) {
      console.log('Just in fncStyleTypeBtns with params:' + JSON.stringify(inToggleVal));

      // Reset to default
      $scope.btnTypeStyle1 = intBtnStyle;
      $scope.btnTypeStyle2 = intBtnStyle;
      $scope.btnTypeStyle3 = intBtnStyle;
      $scope.btnTypeStyle4 = intBtnStyle;

      // Style if the toggle value is true
      if (inToggleVal[1]) {
        $scope.btnTypeStyle1 = selBtnStyleType;
      }
      if (inToggleVal[2]) {
        $scope.btnTypeStyle2 = selBtnStyleType;
      }
      if (inToggleVal[3]) {
        $scope.btnTypeStyle3 = selBtnStyleType;
      }
      if (inToggleVal[4]) {
        $scope.btnTypeStyle4 = selBtnStyleType;
      }

    };

    $scope.ok = function() {
      $modalInstance.close('Clicked Ok button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('Clicked Cancel button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

    $scope.clickSkillBtn = function(inVal) {
      // Determine the button being clicked
      switch (inVal) {
        case 1:
          // Determine if the skill is enabled or not
          if ($scope.btnSkillToggle1) {
            // Skill has been de-selected, convert to default
            $scope.btnSkillToggle1 = false;
            $scope.btnSkillStyle1 = intBtnStyle;
            $scope.techSkillText1 = svcSkillSelections.intBtnSkillText1();

            // Reset and disable the Skill Type buttons
            fncResetDisableTypeBtns(inVal);

          } else {
            $scope.btnSkillToggle1 = true;
            $scope.btnSkillStyle1 = selBtnStyleSkill;
            $scope.techSkillText1 = svcSkillSelections.intBtnSkillText1().toUpperCase();

            // Enable the Skill Type buttons
            fncEnableTypeBtns();
          }

          svcSkillSelections.setBtnSkillToggle1($scope.btnSkillToggle1);
          svcSkillSelections.setBtnSkillText1($scope.techSkillText1);

          break;
        case 2:
          // Determine if the skill is enabled or not
          if ($scope.btnSkillToggle2) {
            // Skill has been de-selected, convert to default
            $scope.btnSkillToggle2 = false;
            $scope.btnSkillStyle2 = intBtnStyle;
            $scope.techSkillText2 = svcSkillSelections.intBtnSkillText2();

            // Reset and disable the Skill Type buttons
            fncResetDisableTypeBtns(inVal);

          } else {
            $scope.btnSkillToggle2 = true;
            $scope.btnSkillStyle2 = selBtnStyleSkill;
            $scope.techSkillText2 = svcSkillSelections.intBtnSkillText2().toUpperCase();

            // Enable the Skill Type buttons
            fncEnableTypeBtns();
          }

          svcSkillSelections.setBtnSkillToggle2($scope.btnSkillToggle2);
          svcSkillSelections.setBtnSkillText2($scope.techSkillText2);

          break;
        case 3:
          // Determine if the skill is enabled or not
          if ($scope.btnSkillToggle3) {
            // Skill has been de-selected, convert to default
            $scope.btnSkillToggle3 = false;
            $scope.btnSkillStyle3 = intBtnStyle;
            $scope.techSkillText3 = svcSkillSelections.intBtnSkillText3();

            // Reset and disable the Skill Type buttons
            fncResetDisableTypeBtns(inVal);

          } else {
            $scope.btnSkillToggle3 = true;
            $scope.btnSkillStyle3 = selBtnStyleSkill;
            $scope.techSkillText3 = svcSkillSelections.intBtnSkillText3().toUpperCase();

            // Enable the Skill Type buttons
            fncEnableTypeBtns();
          }

          svcSkillSelections.setBtnSkillToggle3($scope.btnSkillToggle3);
          svcSkillSelections.setBtnSkillText3($scope.techSkillText3);

          break;
        case 4:
          // Determine if the skill is enabled or not
          if ($scope.btnSkillToggle4) {
            // Skill has been de-selected, convert to default
            $scope.btnSkillToggle4 = false;
            $scope.btnSkillStyle4 = intBtnStyle;
            $scope.techSkillText4 = svcSkillSelections.intBtnSkillText4();

            // Reset and disable the Skill Type buttons
            fncResetDisableTypeBtns(inVal);

          } else {
            $scope.btnSkillToggle4 = true;
            $scope.btnSkillStyle4 = selBtnStyleSkill;
            $scope.techSkillText4 = svcSkillSelections.intBtnSkillText4().toUpperCase();

            // Enable the Skill Type buttons
            fncEnableTypeBtns();
          }

          svcSkillSelections.setBtnSkillToggle4($scope.btnSkillToggle4);
          svcSkillSelections.setBtnSkillText4($scope.techSkillText4);

          break;
      }
    }

    $scope.clickTypeBtn1 = function() {
      if ($scope.btnTypeToggle1) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle1 = false;
        $scope.btnTypeStyle1 = intBtnStyle;
        $scope.techTypeText1 = svcSkillSelections.intBtnTypeText1();
      } else {
        $scope.btnTypeToggle1 = true;
        $scope.btnTypeStyle1 = selBtnStyleType;
        $scope.techTypeText1 = svcSkillSelections.intBtnTypeText1().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle($scope.curSkillNbr, 1, $scope.btnTypeToggle1);
      svcSkillSelections.setBtnTypeText1($scope.techTypeText1);
    };

    $scope.clickTypeBtn2 = function() {
      if ($scope.btnTypeToggle2) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle2 = false;
        $scope.btnTypeStyle2 = intBtnStyle;
        $scope.techTypeText2 = svcSkillSelections.intBtnTypeText2();
      } else {
        $scope.btnTypeToggle2 = true;
        $scope.btnTypeStyle2 = selBtnStyleType;
        $scope.techTypeText2 = svcSkillSelections.intBtnTypeText2().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle($scope.curSkillNbr, 2, $scope.btnTypeToggle2);
      svcSkillSelections.setBtnTypeText2($scope.techTypeText2);
    };

    $scope.clickTypeBtn3 = function() {
      if ($scope.btnTypeToggle3) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle3 = false;
        $scope.btnTypeStyle3 = intBtnStyle;
        $scope.techTypeText3 = svcSkillSelections.intBtnTypeText3();
      } else {
        $scope.btnTypeToggle3 = true;
        $scope.btnTypeStyle3 = selBtnStyleType;
        $scope.techTypeText3 = svcSkillSelections.intBtnTypeText3().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle($scope.curSkillNbr, 3, $scope.btnTypeToggle3);
      svcSkillSelections.setBtnTypeText3($scope.techTypeText3);
    };

    $scope.clickTypeBtn4 = function() {
      if ($scope.btnTypeToggle4) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle4 = false;
        $scope.btnTypeStyle4 = intBtnStyle;
        $scope.techTypeText4 = svcSkillSelections.intBtnTypeText4();
      } else {
        $scope.btnTypeToggle4 = true;
        $scope.btnTypeStyle4 = selBtnStyleType;
        $scope.techTypeText4 = svcSkillSelections.intBtnTypeText4().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle($scope.curSkillNbr, 4, $scope.btnTypeToggle4);
      svcSkillSelections.setBtnTypeText4($scope.techTypeText4);
    };

    // Function skillMouseEnter drives the display of Skill Types when
    //    the user mouses over a Skill Type
    $scope.skillMouseEnter = function(inSkill) {
      // Set the number of the Skill (that was 'overmoused')
      $scope.curSkillNbr = inSkill;

      // Get the title of the Skill so we can display it to the User
      switch (inSkill) {
        case 1:
          $scope.curSkill = svcSkillSelections.intBtnSkillText1();

          // Get the current toggle value for Skill Type 1
          tmpFlag1 = svcSkillSelections.getBtnSkillToggle1();

          // If the Skill toggle value is true, enable Skill Type buttons
          if (tmpFlag1) {
            $scope.disableTypeBtns = false;

            // Fetch and style the Skill Type toggle values
            fncStyleTypeBtns(svcSkillSelections.getBtnTypeToggleSet(inSkill));
          } else {
            // If the Skill toggle value is false, disable Skill Type buttons
            $scope.disableTypeBtns = true;
          }

          break;
        case 2:
          $scope.curSkill = svcSkillSelections.intBtnSkillText2();

          // Get the current toggle value for Skill Type 2
          tmpFlag2 = svcSkillSelections.getBtnSkillToggle2();

          // If the Skill toggle value is true, enable Skill Type buttons
          if (tmpFlag2) {
            $scope.disableTypeBtns = false;

            // Fetch and style the Skill Type toggle values
            fncStyleTypeBtns(svcSkillSelections.getBtnTypeToggleSet(inSkill));
          } else {
            // If the Skill toggle value is false, disable Skill Type buttons
            $scope.disableTypeBtns = true;
          }

          break;
        case 3:
          $scope.curSkill = svcSkillSelections.intBtnSkillText3();

          // Get the current toggle value for Skill Type 3
          tmpFlag3 = svcSkillSelections.getBtnSkillToggle3();

          // If the Skill toggle value is true, enable Skill Type buttons
          if (tmpFlag3) {
            $scope.disableTypeBtns = false;

            // Fetch and style the Skill Type toggle values
            fncStyleTypeBtns(svcSkillSelections.getBtnTypeToggleSet(inSkill));
          } else {
            // If the Skill toggle value is false, disable Skill Type buttons
            $scope.disableTypeBtns = true;
          }

          break;
        case 4:
          $scope.curSkill = svcSkillSelections.intBtnSkillText4();

          // Get the current toggle value for Skill Type 4
          tmpFlag4 = svcSkillSelections.getBtnSkillToggle4();

          // If the Skill toggle value is true, enable Skill Type buttons
          if (tmpFlag4) {
            $scope.disableTypeBtns = false;

            // Fetch and style the Skill Type toggle values
            fncStyleTypeBtns(svcSkillSelections.getBtnTypeToggleSet(inSkill));
          } else {
            // If the Skill toggle value is false, disable Skill Type buttons
            $scope.disableTypeBtns = true;
          }

          break;
      }

    };

    // skillMouseLeave is called when user moves mouse from a Skill button
    $scope.skillMouseLeave = function() {

    };

  }
]);
