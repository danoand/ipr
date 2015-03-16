// svcSkillSelections is a service that populates the skill set and type
//   selections made by te user
appServices.factory("svcSkillSelections", [

    function() {
      var btnSkillToggle1 = false;
      var btnSkillToggle2 = false;
      var btnSkillToggle3 = false;
      var btnSkillToggle4 = false;

      var btnTypeToggle1 = false;
      var btnTypeToggle2 = false;
      var btnTypeToggle3 = false;
      var btnTypeToggle4 = false;

      return {
        getBtnSkillToggle1: function() {
          console.log('Getting btnSkillToggle1 which is:' + btnSkillToggle1);
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
          console.log('Setting btnSkillToggle1 which is now:' + btnSkillToggle1);
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
        getBtnTypeToggle1: function() {
          console.log('Getting btnTypeToggle1 which is:' + btnTypeToggle1);
          return btnTypeToggle1;
        },
        getBtnTypeToggle2: function() {
          return btnTypeToggle2;
        },
        getBtnTypeToggle3: function() {
          return btnTypeToggle3;
        },
        getBtnTypeToggle4: function() {
          return btnTypeToggle4;
        },
        setBtnTypeToggle1: function(inVal) {
          btnTypeToggle1 = inVal;
          console.log('Setting btnTypeToggle1 which is now:' + btnTypeToggle1);
        },
        setBtnTypeToggle2: function(inVal) {
          btnTypeToggle2 = inVal;
        },
        setBtnTypeToggle3: function(inVal) {
          btnTypeToggle3 = inVal;
        },
        setBtnTypeToggle4: function(inVal) {
          btnTypeToggle3 = inVal;
        }
      };
    }
]);
