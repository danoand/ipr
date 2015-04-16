// svcDataGaugeChart is a service that populates the gauge chart
//   depicting the progress of entering a Pro (Tech)
appServices.factory("svcDataTypeUser", [

  function() {
    var dataUserType = "self";
    var varShowResendBtn = false;

    return {
      getUserType: function() {
        return dataUserType;
      },
      tglUserType: function() {
        switch (dataUserType) {
          case 'self':
            dataUserType = 'agent';
            break;
          case 'agent':
            dataUserType = 'self';
            break;
          default:
            dataUserType = 'self';
        }

        return dataUserType;
      },
      setUserType: function(inVal) {
        dataUserType = inVal;
      },
      getShowResendBtn: function() {
        return varShowResendBtn;
      },
      setShowResendBtn: function(inVal) {
        varShowResendBtn = inVal;
      }
    };
  }
]);
