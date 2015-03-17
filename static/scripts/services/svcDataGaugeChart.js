// svcDataGaugeChart is a service that populates the gauge chart
//   depicting the progress of entering a Pro (Tech)
appServices.factory("svcDataGaugeChart", [

    function() {

      return {
        generalGaugeStepNum: function() {
          return '1';
        },
        generalGaugeData: function() {
          return {
            maxValue: 100,
            animationSpeed: 20,
            val: 4
          };
        },
        generalGaugeOptions: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#A3C86D",
            colorStop: "#A3C86D",
            strokeColor: "#E0E0E0",
            generateGradient: !0,
            percentColors: [
              [0, "#A3C86D"],
              [1, "#A3C86D"]
            ]
          };
        },
        preferencesGaugeStepNum: function() {
          return '2';
        },
        preferencesGaugeData: function() {
          return {
            maxValue: 100,
            animationSpeed: 20,
            val: 25
          };
        },
        preferencesGaugeOptions: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#A3C86D",
            colorStop: "#A3C86D",
            strokeColor: "#E0E0E0",
            generateGradient: !0,
            percentColors: [
              [0, "#A3C86D"],
              [1, "#A3C86D"]
            ]
          };
        },
        skillsGaugeStepNum: function() {
          return '3';
        },
        skillsGaugeData: function() {
          return {
            maxValue: 100,
            animationSpeed: 20,
            val: 50
          };
        },
        skillsGaugeOptions: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#A3C86D",
            colorStop: "#A3C86D",
            strokeColor: "#E0E0E0",
            generateGradient: !0,
            percentColors: [
              [0, "#A3C86D"],
              [1, "#A3C86D"]
            ]
          };
        },
        backgroundGaugeStepNum: function() {
          return '4';
        },
        backgroundGaugeData: function() {
          return {
            maxValue: 100,
            animationSpeed: 20,
            val: 75
          };
        },
        backgroundGaugeOptions: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#A3C86D",
            colorStop: "#A3C86D",
            strokeColor: "#E0E0E0",
            generateGradient: !0,
            percentColors: [
              [0, "#A3C86D"],
              [1, "#A3C86D"]
            ]
          };
        },
        wrapupGaugeProfileData: function() {
          return {
            maxValue: 800,
            animationSpeed: 20,
            val: 700
          };
        },
        wrapupGaugeProfileOpts: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#7ACBEE",
            colorStop: "#7ACBEE",
            strokeColor: "#F1F1F1",
            generateGradient: !0,
            percentColors: [
              [0, "#7ACBEE"],
              [1, "#7ACBEE"]
            ]
          };
        },
        wrapupGaugeTechData: function() {
          return {
            maxValue: 100,
            animationSpeed: 20,
            val: 75
          };
        },
        wrapupGaugeTechOpts: function() {
          return {
            lines: 12,
            angle: 0,
            lineWidth: .47,
            pointer: {
              length: .6,
              strokeWidth: .03,
              color: "#000000"
            },
            limitMax: "true",
            colorStart: "#A3C86D",
            colorStop: "#A3C86D",
            strokeColor: "#E0E0E0",
            generateGradient: !0,
            percentColors: [
              [0, "#A3C86D"],
              [1, "#A3C86D"]
            ]
          };
        }
      };
    }
]);
