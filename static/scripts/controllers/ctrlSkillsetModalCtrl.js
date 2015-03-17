// GetOrganizedCtrl is a controller for a modal on the team_skills.html view
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

    $scope.btnTypeToggle1  = svcSkillSelections.getBtnTypeToggle1();
    $scope.btnTypeToggle2  = svcSkillSelections.getBtnTypeToggle2();
    $scope.btnTypeToggle3  = svcSkillSelections.getBtnTypeToggle3();
    $scope.btnTypeToggle4  = svcSkillSelections.getBtnTypeToggle4();

    $scope.ok = function() {
      $modalInstance.close('Clicked Ok button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('Clicked Cancel button');

      $rootScope.$emit('evShowTechSkillCategories');
    };

    $scope.clickSkillBtn1 = function() {
      if ($scope.btnSkillToggle1) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle1 = false;
        $scope.btnSkillStyle1  = intBtnStyle;
        $scope.techSkillText1  = svcSkillSelections.intBtnSkillText1();
      } else {
        $scope.btnSkillToggle1  = true;
        $scope.btnSkillStyle1   = selBtnStyleSkill;
        $scope.techSkillText1   = svcSkillSelections.intBtnSkillText1().toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle1($scope.btnSkillToggle1);
      svcSkillSelections.setBtnSkillText1($scope.techSkillText1);
    };

    $scope.clickSkillBtn2 = function() {
      if ($scope.btnSkillToggle2) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle2  = false;
        $scope.btnSkillStyle2   = intBtnStyle;
        $scope.techSkillText2   = svcSkillSelections.intBtnSkillText2();
      } else {
        $scope.btnSkillToggle2  = true;
        $scope.btnSkillStyle2   = selBtnStyleSkill;
        $scope.techSkillText2   = svcSkillSelections.intBtnSkillText2().toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle2($scope.btnSkillToggle2);
      svcSkillSelections.setBtnSkillText2($scope.techSkillText2);
    };

    $scope.clickSkillBtn3 = function() {
      if ($scope.btnSkillToggle3) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle3  = false;
        $scope.btnSkillStyle3   = intBtnStyle;
        $scope.techSkillText3   = svcSkillSelections.intBtnSkillText3();
      } else {
        $scope.btnSkillToggle3  = true;
        $scope.btnSkillStyle3   = selBtnStyleSkill;
        $scope.techSkillText3   = svcSkillSelections.intBtnSkillText3().toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle3($scope.btnSkillToggle3);
      svcSkillSelections.setBtnSkillText3($scope.techSkillText3);
    };

    $scope.clickSkillBtn4 = function() {
      if ($scope.btnSkillToggle4) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle4  = false;
        $scope.btnSkillStyle4   = intBtnStyle;
        $scope.techSkillText4   = svcSkillSelections.intBtnSkillText4();
      } else {
        $scope.btnSkillToggle4  = true;
        $scope.btnSkillStyle4   = selBtnStyleSkill;
        $scope.techSkillText4   = svcSkillSelections.intBtnSkillText4().toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle4($scope.btnSkillToggle4);
      svcSkillSelections.setBtnSkillText4($scope.techSkillText4);
    };

    $scope.clickTypeBtn1 = function() {
      if ($scope.btnTypeToggle1) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle1    = false;
        $scope.btnTypeStyle1     = intBtnStyle;
        $scope.techTypeText1     = svcSkillSelections.intBtnTypeText1();
      } else {
        $scope.btnTypeToggle1    = true;
        $scope.btnTypeStyle1     = selBtnStyleType;
        $scope.techTypeText1     = svcSkillSelections.intBtnTypeText1().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle1($scope.btnTypeToggle1);
      svcSkillSelections.setBtnTypeText1($scope.techTypeText1);
    };

    $scope.clickTypeBtn2 = function() {
      if ($scope.btnTypeToggle2) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle2 = false;
        $scope.btnTypeStyle2  = intBtnStyle;
        $scope.techTypeText2  = svcSkillSelections.intBtnTypeText2();
      } else {
        $scope.btnTypeToggle2 = true;
        $scope.btnTypeStyle2  = selBtnStyleType;
        $scope.techTypeText2  = svcSkillSelections.intBtnTypeText2().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle2($scope.btnTypeToggle2);
      svcSkillSelections.setBtnTypeText2($scope.techTypeText2);
    };

    $scope.clickTypeBtn3 = function() {
      if ($scope.btnTypeToggle3) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle3 = false;
        $scope.btnTypeStyle3  = intBtnStyle;
        $scope.techTypeText3  = svcSkillSelections.intBtnTypeText3();
      } else {
        $scope.btnTypeToggle3 = true;
        $scope.btnTypeStyle3  = selBtnStyleType;
        $scope.techTypeText3  = svcSkillSelections.intBtnTypeText3().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle3($scope.btnTypeToggle3);
      svcSkillSelections.setBtnTypeText3($scope.techTypeText3);
    };

    $scope.clickTypeBtn4 = function() {
      if ($scope.btnTypeToggle4) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle4 = false;
        $scope.btnTypeStyle4  = intBtnStyle;
        $scope.techTypeText4  = svcSkillSelections.intBtnTypeText4();
      } else {
        $scope.btnTypeToggle4 = true;
        $scope.btnTypeStyle4  = selBtnStyleType;
        $scope.techTypeText4  = svcSkillSelections.intBtnTypeText4().toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle4($scope.btnTypeToggle4);
      svcSkillSelections.setBtnTypeText4($scope.techTypeText4);
    };

  }
]);
