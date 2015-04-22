appOtherModules.factory("taskStorage", function() {
  var DEMO_TASKS, STORAGE_ID;
  return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Play games with friends", "completed": false}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]', {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS)
    },
    put: function(tasks) {
      return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
    }
  }
});

appOtherModules.factory("localize", ["$http", "$rootScope", "$window",
  function($http, $rootScope, $window) {
    var localize;
    return localize = {
      language: "",
      url: void 0,
      resourceFileLoaded: !1,
      successCallback: function(data) {
        return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
      },
      setLanguage: function(value) {
        return localize.language = value.toLowerCase()
          .split("-")[0], localize.initLocalizedResources()
      },
      setUrl: function(value) {
        return localize.url = value, localize.initLocalizedResources()
      },
      buildUrl: function() {
        return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language)
          .toLowerCase(), localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js"
      },
      initLocalizedResources: function() {
        var url;
        return url = localize.url || localize.buildUrl(), $http({
          method: "GET",
          url: url,
          cache: !1
        })
          .success(localize.successCallback)
          .error(function() {
            return $rootScope.$broadcast("localizeResourcesUpdated")
          })
      },
      getLocalizedString: function(value) {
        var result, valueLowerCase;
        return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
      }
    }
  }
]);

// Third party code to create UUIDs
//    See: https://github.com/MBehtemam/angular-uuid
appOtherModules.factory('uuid2', [

  function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return {

      newuuid: function() {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
      },
      newguid: function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }
    }

  }
])
