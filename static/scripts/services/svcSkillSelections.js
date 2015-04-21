// svcSkillSelections is a service that populates the skill set and type
//   selections made by te user
appServices.factory("svcSkillSelections", [

  function() {
    var initSkillTextObj = [
      '',
      'General Electrical',
      'Connected Home',
      'Media & Gaming Systems',
      'Security Systems'
    ];

    var initTypeTextObj =  [
      '',
      'Delivery',
      'Install',
      'Repair',
      'Training'
    ];

    var curSkillTextObj = initSkillTextObj;

    var curTypeTextObj  = initTypeTextObj;

    // Flag indicating if a Skill should be displayed as selected.
    var initSkillToggle =
     [
        false,
        false,
        false,
        false,
        false
      ];
    var curSkillToggle  = initSkillToggle;

    // Flag indicating if a Skill-Skill Type combination should be displayed
    //    as selected.
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
    var curTypeToggle  = initTypeToggle;

    // Variables holding button styles to employ or not
    var initBtnStyle          = 'btn btn-block btn-default';
    var selectedBtnStyleSkill = 'btn btn-block btn-primary';
    var selectedBtnStyleType  = 'btn btn-block btn-warning';

    return {
      resetSkillToggleValues: function() {
        // Reset the current Skill toggle values to the initial values
        curSkillToggle  = initSkillToggle;
      },
      resetTypeToggleValues: function() {
        // Reset the current Skill toggle values to the initial values
        curTypeToggle  = [
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

      },
      initBtnStyle: function() {
        return initBtnStyle;
      },
      selectedBtnStyleSkill: function() {
        return selectedBtnStyleSkill;
      },
      selectedBtnStyleType: function() {
        return selectedBtnStyleType;
      },
      getInitSkillText: function(inVal) {
        // Return the current button label text for the Skill inVal
        return initSkillTextObj[inVal];
      },
      getBtnSkillText: function(inVal) {
        // Return the current button label text for the Skill inVal
        return curSkillTextObj[inVal];
      },
      getInitSkillTypeText: function(inVal) {
        // Return the current button label text for the Skill inVal
        return initTypeTextObj[inVal];
      },
      getBtnTypeText: function(inVal) {
        // Return the current button label text for the Skill inVal
        return curTypeTextObj[inVal];
      },
      isSkillSelected: function(inVal) {
        // Return the current Skill toggle value (is Skill selected?)
        return curSkillToggle[inVal];
      },
      setSkillToggle: function(inVal, inToggle) {
        // Return the current Skill toggle value (is Skill selected?)
        curSkillToggle[inVal] = inToggle;
      },
      getSkillTypeToggleValues: function(inVal) {
        // Return the Skill Type toggle values for the passed Skill
        return curTypeToggle[inVal];
      },
      isSkillTypeSelected: function(inSkill, inType) {
        // Return the current Skill toggle value (is Skill selected?)
        return curTypeToggle[inSkill][inType];
      },
      setSkillTypeToggle: function(inSkill, inType, inToggle) {
        // Return the current Skill toggle value (is Skill selected?)
        curTypeToggle[inSkill][inType] = inToggle;
      },
    };
  }
]);
