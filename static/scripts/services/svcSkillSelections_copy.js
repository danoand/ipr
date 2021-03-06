// svcSkillSelections is a service that populates the skill set and type
//   selections made by te user
appServices.factory("svcSkillSelections", [

  function() {
    var initSkillText1 = 'General Electrical';
    var initSkillText2 = 'Connected Home';
    var initSkillText3 = 'Media & Gaming Systems';
    var initSkillText4 = 'Security Systems';

    var initTypeToggle = [
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ],
      [
        false,
        false,
        false,
        false,
        false
      ]
    ];

    var initTypeText1 = 'Delivery';
    var initTypeText2 = 'Install';
    var initTypeText3 = 'Repair';
    var initTypeText4 = 'Training';

    var techSkillText1 = initSkillText1;
    var techSkillText2 = initSkillText2;
    var techSkillText3 = initSkillText3;
    var techSkillText4 = initSkillText4;

    var techTypeText1 = initTypeText1;
    var techTypeText2 = initTypeText2;
    var techTypeText3 = initTypeText3;
    var techTypeText4 = initTypeText4;

    var btnSkillToggle1 = false;
    var btnSkillToggle2 = false;
    var btnSkillToggle3 = false;
    var btnSkillToggle4 = false;

    // Initialize the display state of each Skill<->Skill Type combination
    var btnTypeToggle = initTypeToggle;

    var initBtnStyle = 'btn btn-block btn-default';
    var selectedBtnStyleSkill = 'btn btn-block btn-primary';
    var selectedBtnStyleType = 'btn btn-block btn-warning';

    return {
      intBtnSkillText1: function() {
        return initSkillText1;
      },
      intBtnSkillText2: function() {
        return initSkillText2;
      },
      intBtnSkillText3: function() {
        return initSkillText3;
      },
      intBtnSkillText4: function() {
        return initTypeText4;
      },
      intBtnTypeText1: function() {
        return initTypeText1;
      },
      intBtnTypeText2: function() {
        return initTypeText2;
      },
      intBtnTypeText3: function() {
        return initTypeText3;
      },
      intBtnTypeText4: function() {
        return initTypeText4;
      },
      resetTypeBtns: function(inVal) {
        btnTypeToggle[inVal] = [
          false,
          false,
          false,
          false,
          false
        ];
      },
      getBtnSkillText1: function() {
        return techSkillText1;
      },
      getBtnSkillText2: function() {
        return techSkillText2;
      },
      getBtnSkillText3: function() {
        return techSkillText3;
      },
      getBtnSkillText4: function() {
        return techSkillText4;
      },
      getBtnTypeText1: function() {
        return techTypeText1;
      },
      getBtnTypeText2: function() {
        return techTypeText2;
      },
      getBtnTypeText3: function() {
        return techTypeText3;
      },
      getBtnTypeText4: function() {
        return techTypeText4;
      },
      setBtnSkillText1: function(inVal) {
        techSkillText1 = inVal;
      },
      setBtnSkillText2: function(inVal) {
        techSkillText2 = inVal;
      },
      setBtnSkillText3: function(inVal) {
        techSkillText3 = inVal;
      },
      setBtnSkillText4: function(inVal) {
        techSkillText4 = inVal;
      },
      setBtnTypeText1: function(inVal) {
        techTypeText1 = inVal;
      },
      setBtnTypeText2: function(inVal) {
        techTypeText2 = inVal;
      },
      setBtnTypeText3: function(inVal) {
        techTypeText3 = inVal;
      },
      setBtnTypeText4: function(inVal) {
        techTypeText4 = inVal;
      },
      getBtnSkillStyle: function(inVal) {
        retStyle = initBtnStyle;
        switch (inVal) {
          case 1:
            if (btnSkillToggle1) {
              retStyle = selectedBtnStyleSkill;
            }
            break;
          case 2:
            if (btnSkillToggle2) {
              retStyle = selectedBtnStyleSkill;
            }
            break;
          case 3:
            if (btnSkillToggle3) {
              retStyle = selectedBtnStyleSkill;
            }
            break;
          case 4:
            if (btnSkillToggle4) {
              retStyle = selectedBtnStyleSkill;
            }
            break;
        }

        return retStyle;
      },
      getBtnTypeStyle: function(inSkill, inType) {
        retStyle = initBtnStyle;

        if (btnTypeToggle[inSkill][inType]) {
          retStyle = selectedBtnStyleType;
        }

        return retStyle;
      },
      getBtnSkillToggle1: function() {
        return btnSkillToggle1;
      },
      getBtnSkillToggle2: function() {
        return btnSkillToggle2;
      },
      getBtnSkillToggle3: function() {
        return btnSkillToggle3;
      },
      getBtnSkillToggle4: function() {
        return btnSkillToggle4;
      },
      setBtnSkillToggle1: function(inVal) {
        btnSkillToggle1 = inVal;
      },
      setBtnSkillToggle2: function(inVal) {
        btnSkillToggle2 = inVal;
      },
      setBtnSkillToggle3: function(inVal) {
        btnSkillToggle3 = inVal;
      },
      setBtnSkillToggle4: function(inVal) {
        btnSkillToggle4 = inVal;
      },
      getBtnTypeToggle: function(inSkill, inType) {
        return btnTypeToggle[inSkill][inType];
      },
      setBtnTypeToggle: function(inSkill, inType, inVal) {
        btnTypeToggle[inSkill][inType] = inVal;
      },
      getBtnTypeToggleSet: function(inSkill) {
        return btnTypeToggle[inSkill];
      }
    };
  }
]);
