var appMod            = angular.module("app", ["ngRoute", "ngSanitize", "ngAnimate", "ui.bootstrap", "app.directives", "app.controllers", "app.services", "app.othermodules"]);

var appModConfig      = appMod.config(["$routeProvider",
  function($routeProvider) {
    return $routeProvider.when("/", {
      redirectTo: "/pages/signup"
    })
      .when("/ui/timeline", {
        templateUrl: "views/ui/timeline.html"
      })
      .when("/pages/getorganized", {
        templateUrl: "views/pages/01_getorganized.html"
      })
      .when("/pages/companyname", {
        templateUrl: "views/pages/02_companyname.html"
      })
      .when("/pages/account", {
        templateUrl: "views/pages/03_account.html"
      })
      .when("/pages/verify", {
        templateUrl: "views/pages/04_verify.html"
      })
      .when("/pages/administrator", {
        templateUrl: "views/pages/05_administrator.html"
      })
      .when("/pages/businessprofile", {
        templateUrl: "views/pages/06_businessprofile.html"
      })
      .when("/pages/insurance", {
        templateUrl: "views/pages/07_insurance.html"
      })
      .when("/pages/team/general", {
        templateUrl: "views/pages/08_A_team_general.html"
      })
      .when("/pages/team/preferences", {
        templateUrl: "views/pages/08_B_team_preferences.html"
      })
      .when("/pages/team/skills", {
        templateUrl: "views/pages/08_C_team_skills.html"
      })
      .when("/pages/team/background", {
        templateUrl: "views/pages/08_D_team_background.html"
      })
      .when("/pages/signup", {
        templateUrl: "views/pages/signup.html"
      })
      .when("/pages/profile", {
        templateUrl: "views/pages/profile.html"
      })
      .when("/404", {
        templateUrl: "views/pages/404.html"
      })
      .when("/pages/blank", {
        templateUrl: "views/pages/blank.html"
      })
      .otherwise({
        redirectTo: "/404"
      })
  }
]);

var appOtherModules   = angular.module('app.othermodules', []);

var appDirectives     = angular.module('app.directives', []);

var appControllers    = angular.module('app.controllers', []);

var appServices       = angular.module('app.services', []);
