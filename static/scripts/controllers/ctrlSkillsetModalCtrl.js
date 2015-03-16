// GetOrganizedCtrl is a controller for a modal on the team_skills.html view
appControllers.controller("SkillsetModalCtrl", ["$scope", "$rootScope", "$location", "$modalInstance",
  "svcDataPopulation", "svcTeamProgressBar", "svcSkillSelections",
  function($scope, $rootScope, $location, $modalInstance, svcDataPopulation, svcTeamProgressBar, svcSkillSelections) {
    var techSkillSet1 = 'General Electrical';
    var techSkillSet2 = 'Connected Home';
    var techSkillSet3 = 'Media & Gaming Systems';
    var techSkillSet4 = 'Security Systems';

    var techSkillType1 = 'Delivery';
    var techSkillType2 = 'Install';
    var techSkillType3 = 'Repair';
    var techSkillType4 = 'Training';

    var initBtnStyle          = 'btn btn-block btn-default';
    var selectedBtnStyleSkill = 'btn btn-block btn-primary';
    var selectedBtnStyleType  = 'btn btn-block btn-warning';

    $scope.techServiceCategory = 'Home Electronics';
    $scope.techSkillSet1 = techSkillSet1;
    $scope.techSkillSet2 = techSkillSet2;
    $scope.techSkillSet3 = techSkillSet3;
    $scope.techSkillSet4 = techSkillSet4;

    $scope.techSkillType1 = techSkillType1;
    $scope.techSkillType2 = techSkillType2;
    $scope.techSkillType3 = techSkillType3;
    $scope.techSkillType4 = techSkillType4;

    $scope.btnTechSkillSet1 = initBtnStyle;
    $scope.btnTechSkillSet2 = initBtnStyle;
    $scope.btnTechSkillSet3 = initBtnStyle;
    $scope.btnTechSkillSet4 = initBtnStyle;

    $scope.btnTechSkillType1 = initBtnStyle;
    $scope.btnTechSkillType2 = initBtnStyle;
    $scope.btnTechSkillType3 = initBtnStyle;
    $scope.btnTechSkillType4 = initBtnStyle;

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
        $scope.btnSkillToggle1  = false;
        $scope.btnTechSkillSet1 = initBtnStyle;
        $scope.techSkillSet1    = techSkillSet1;
      } else {
        $scope.btnSkillToggle1  = true;
        $scope.btnTechSkillSet1 = selectedBtnStyleSkill;
        $scope.techSkillSet1    = techSkillSet1.toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle1($scope.btnSkillToggle1);
    };

    $scope.clickSkillBtn2 = function() {
      if ($scope.btnSkillToggle2) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle2  = false;
        $scope.btnTechSkillSet2 = initBtnStyle;
        $scope.techSkillSet2    = techSkillSet2;
      } else {
        $scope.btnSkillToggle2  = true;
        $scope.btnTechSkillSet2 = selectedBtnStyleSkill;
        $scope.techSkillSet2    = techSkillSet2.toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle2($scope.btnSkillToggle2);
    };

    $scope.clickSkillBtn3 = function() {
      if ($scope.btnSkillToggle3) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle3  = false;
        $scope.btnTechSkillSet3 = initBtnStyle;
        $scope.techSkillSet3    = techSkillSet3;
      } else {
        $scope.btnSkillToggle3  = true;
        $scope.btnTechSkillSet3 = selectedBtnStyleSkill;
        $scope.techSkillSet3    = techSkillSet3.toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle3($scope.btnSkillToggle3);
    };

    $scope.clickSkillBtn4 = function() {
      if ($scope.btnSkillToggle4) {
        // Skill has been de-selected, convert to default
        $scope.btnSkillToggle4  = false;
        $scope.btnTechSkillSet4 = initBtnStyle;
        $scope.techSkillSet4    = techSkillSet4;
      } else {
        $scope.btnSkillToggle4  = true;
        $scope.btnTechSkillSet4 = selectedBtnStyleSkill;
        $scope.techSkillSet4    = techSkillSet4.toUpperCase();
      }

      svcSkillSelections.setBtnSkillToggle4($scope.btnSkillToggle4);
    };

    $scope.clickTypeBtn1 = function() {
      if ($scope.btnTypeToggle1) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle1    = false;
        $scope.btnTechSkillType1 = initBtnStyle;
        $scope.techSkillType1    = techSkillType1;
      } else {
        $scope.btnTypeToggle1    = true;
        $scope.btnTechSkillType1 = selectedBtnStyleType;
        $scope.techSkillType1    = techSkillType1.toUpperCase();
      }

      svcSkillSelections.setBtnTypeToggle1($scope.btnTypeToggle1);
    };

    $scope.clickTypeBtn2 = function() {
      if ($scope.btnTypeToggle2) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle2    = false;
        $scope.btnTechSkillType2 = initBtnStyle;
        $scope.techSkillType2    = techSkillType2;
      } else {
        $scope.btnTypeToggle2    = true;
        $scope.btnTechSkillType2 = selectedBtnStyleType;
        $scope.techSkillType2    = techSkillType2.toUpperCase();

        svcSkillSelections.setBtnTypeToggle2($scope.btnTypeToggle2);
      }
    };

    $scope.clickTypeBtn3 = function() {
      if ($scope.btnTypeToggle3) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle3    = false;
        $scope.btnTechSkillType3 = initBtnStyle;
        $scope.techSkillType3    = techSkillType3;
      } else {
        $scope.btnTypeToggle3    = true;
        $scope.btnTechSkillType3 = selectedBtnStyleType;
        $scope.techSkillType3    = techSkillType3.toUpperCase();

        svcSkillSelections.setBtnTypeToggle3($scope.btnTypeToggle3);
      }
    };

    $scope.clickTypeBtn4 = function() {
      if ($scope.btnTypeToggle4) {
        // Type has been de-selected, convert to default
        $scope.btnTypeToggle4    = false;
        $scope.btnTechSkillType4 = initBtnStyle;
        $scope.techSkillType4    = techSkillType4;
      } else {
        $scope.btnTypeToggle4    = true;
        $scope.btnTechSkillType4 = selectedBtnStyleType;
        $scope.techSkillType4    = techSkillType4.toUpperCase();

        svcSkillSelections.setBtnTypeToggle4($scope.btnTypeToggle4);
      }
    };

  }
]);
