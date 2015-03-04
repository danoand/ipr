appDirectives.directive("gaugeChart", [

  function() {
    return {
      restrict: "A",
      scope: {
        data: "=",
        options: "="
      },
      link: function(scope, ele) {
        var data, gauge, options;
        return data = scope.data, options = scope.options, gauge = new Gauge(ele[0])
          .setOptions(options), gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val)
      }
    }
  }
])
  .directive("flotChart", [

    function() {
      return {
        restrict: "A",
        scope: {
          data: "=",
          options: "="
        },
        link: function(scope, ele) {
          var data, options, plot;
          return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options)
        }
      }
    }
  ])
  .directive("flotChartRealtime", [

    function() {
      return {
        restrict: "A",
        link: function(scope, ele) {
          var data, getRandomData, plot, totalPoints, update, updateInterval;
          return data = [], totalPoints = 300, getRandomData = function() {
            var i, prev, res, y;
            for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints;) prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + 10 * Math.random() - 5, 0 > y ? y = 0 : y > 100 && (y = 100), data.push(y);
            for (res = [], i = 0; i < data.length;) res.push([i, data[i]]), ++i;
            return res
          }, update = function() {
            plot.setData([getRandomData()]), plot.draw(), setTimeout(update, updateInterval)
          }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {
            series: {
              lines: {
                show: !0,
                fill: !0
              },
              shadowSize: 0
            },
            yaxis: {
              min: 0,
              max: 100
            },
            xaxis: {
              show: !1
            },
            grid: {
              hoverable: !0,
              borderWidth: 1,
              borderColor: "#eeeeee"
            },
            colors: ["#5BC0C4"]
          }), update()
        }
      }
    }
  ])
  .directive("sparkline", [

    function() {
      return {
        restrict: "A",
        scope: {
          data: "=",
          options: "="
        },
        link: function(scope, ele) {
          var data, options, sparkResize, sparklineDraw;
          return data = scope.data, options = scope.options, sparkResize = void 0, sparklineDraw = function() {
            return ele.sparkline(data, options)
          }, $(window)
            .resize(function() {
              return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200)
            }), sparklineDraw()
        }
      }
    }
  ])
  .directive("morrisChart", [

    function() {
      return {
        restrict: "A",
        scope: {
          data: "="
        },
        link: function(scope, ele, attrs) {
          var colors, data, func, options;
          switch (data = scope.data, attrs.type) {
            case "line":
              return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                resize: !0
              }, new Morris.Line(options);
            case "area":
              return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                behaveLikeLine: attrs.behaveLikeLine || !1,
                fillOpacity: attrs.fillOpacity || "auto",
                pointSize: attrs.pointSize || 4,
                resize: !0
              }, new Morris.Area(options);
            case "bar":
              return colors = void 0 === attrs.barColors || "" === attrs.barColors ? null : JSON.parse(attrs.barColors), options = {
                element: ele[0],
                data: data,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                barColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                stacked: attrs.stacked || null,
                resize: !0
              }, new Morris.Bar(options);
            case "donut":
              return colors = void 0 === attrs.colors || "" === attrs.colors ? null : JSON.parse(attrs.colors), options = {
                element: ele[0],
                data: data,
                colors: colors || ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
                resize: !0
              }, attrs.formatter && (func = new Function("y", "data", attrs.formatter), options.formatter = func), new Morris.Donut(options)
          }
        }
      }
    }
  ]);

appDirectives.directive("uiRangeSlider", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.slider()
      }
    }
  }
])
  .directive("uiFileUpload", [

    function() {
      return {
        restrict: "A",
        link: function(scope, ele) {
          return ele.bootstrapFileInput()
        }
      }
    }
  ])
  .directive("uiSpinner", [

    function() {
      return {
        restrict: "A",
        compile: function(ele) {
          return ele.addClass("ui-spinner"), {
            post: function() {
              return ele.spinner()
            }
          }
        }
      }
    }
  ])
  .directive("uiWizardForm", [

    function() {
      return {
        link: function(scope, ele) {
          return ele.steps()
        }
      }
    }
  ]);

appDirectives.directive("validateEquals", [

  function() {
    return {
      require: "ngModel",
      link: function(scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        return validateEqual = function(value) {
          var valid;
          return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
            value: void 0
          }) : void 0
        }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
          return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0
        })
      }
    }
  }
]);

appDirectives.directive("taskFocus", ["$timeout",
  function($timeout) {
    return {
      link: function(scope, ele, attrs) {
        return scope.$watch(attrs.taskFocus, function(newVal) {
          return newVal ? $timeout(function() {
            return ele[0].focus()
          }, 0, !1) : void 0
        })
      }
    }
  }
]);

appDirectives.directive("uiTime", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        var checkTime, startTime;
        return startTime = function() {
          var h, m, s, t, time, today;
          return today = new Date, h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), m = checkTime(m), s = checkTime(s), time = h + ":" + m + ":" + s, ele.html(time), t = setTimeout(startTime, 500)
        }, checkTime = function(i) {
          return 10 > i && (i = "0" + i), i
        }, startTime()
      }
    }
  }
])
  .directive("uiWeather", [

    function() {
      return {
        restrict: "A",
        link: function(scope, ele, attrs) {
          var color, icon, skycons;
          return color = attrs.color, icon = Skycons[attrs.icon], skycons = new Skycons({
            color: color,
            resizeClear: !0
          }), skycons.add(ele[0], icon), skycons.play()
        }
      }
    }
  ])

appDirectives.directive("imgHolder", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return Holder.run({
          images: ele[0]
        })
      }
    }
  }
])
.directive("customBackground", function() {
  return {
    restrict: "A",
    controller: ["$scope", "$element", "$location",
      function($scope, $element, $location) {
        var addBg, path;
        return path = function() {
          return $location.path()
        }, addBg = function(path) {
          switch ($element.removeClass("body-home body-special body-tasks body-lock"), path) {
            case "/":
              return $element.addClass("body-home");
            case "/404":
            case "/pages/500":
            case "/pages/signin":
            case "/pages/signup":
              return $element.addClass("body-special");
            case "/pages/lock-screen":
              return $element.addClass("body-special body-lock");
            case "/tasks":
              return $element.addClass("body-tasks")
          }
        }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) {
          return newVal !== oldVal ? addBg($location.path()) : void 0
        })
      }
    ]
  }
})
.directive("uiColorSwitch", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.find(".color-option")
          .on("click", function(event) {
            var $this, hrefUrl, style;
            if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style) hrefUrl = "styles/main.css", $('link[href^="styles/main"]')
              .attr("href", hrefUrl);
            else {
              if (!style) return !1;
              style = "-" + style, hrefUrl = "styles/main" + style + ".css", $('link[href^="styles/main"]')
                .attr("href", hrefUrl)
            }
            return event.preventDefault()
          })
      }
    }
  }
])
.directive("toggleMinNav", ["$rootScope",
  function($rootScope) {
    return {
      restrict: "A",
      link: function(scope, ele) {
        var $window, Timer, app, updateClass;
        return app = $("#app"), $window = $(window), ele.on("click", function(e) {
          return app.hasClass("nav-min") ? app.removeClass("nav-min") : (app.addClass("nav-min"), $rootScope.$broadcast("minNav:enabled")), e.preventDefault()
        }), Timer = void 0, updateClass = function() {
          var width;
          return width = $window.width(), 768 > width ? app.removeClass("nav-min") : void 0
        }, $window.resize(function() {
          var t;
          return clearTimeout(t), t = setTimeout(updateClass, 300)
        })
      }
    }
  }
])
.directive("collapseNav", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        var $a, $aRest, $lists, $listsRest, app;
        return $lists = ele.find("ul")
          .parent("li"), $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li")
          .not($lists), $aRest = $listsRest.children("a"), app = $("#app"), $a.on("click", function(event) {
            var $parent, $this;
            return app.hasClass("nav-min") ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent)
              .removeClass("open")
              .find("ul")
              .slideUp(), $parent.toggleClass("open")
              .find("ul")
              .slideToggle(), event.preventDefault())
          }), $aRest.on("click", function() {
            return $lists.removeClass("open")
              .find("ul")
              .slideUp()
          }), scope.$on("minNav:enabled", function() {
            return $lists.removeClass("open")
              .find("ul")
              .slideUp()
          })
      }
    }
  }
])
.directive("highlightActive", [

  function() {
    return {
      restrict: "A",
      controller: ["$scope", "$element", "$attrs", "$location",
        function($scope, $element, $attrs, $location) {
          var highlightActive, links, path;
          return links = $element.find("a"), path = function() {
            return $location.path()
          }, highlightActive = function(links, path) {
            return path = "#" + path, angular.forEach(links, function(link) {
              var $li, $link, href;
              return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
            })
          }, highlightActive(links, $location.path()), $scope.$watch(path, function(newVal, oldVal) {
            return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
          })
        }
      ]
    }
  }
])
.directive("toggleOffCanvas", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.on("click", function() {
          return $("#app")
            .toggleClass("on-canvas")
        })
      }
    }
  }
])
.directive("slimScroll", [

  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.slimScroll({
          height: "100%"
        })
      }
    }
  }
])
.directive("goBack", [

  function() {
    return {
      restrict: "A",
      controller: ["$scope", "$element", "$window",
        function($scope, $element, $window) {
          return $element.on("click", function() {
            return $window.history.back()
          })
        }
      ]
    }
  }
]);

appDirectives.directive("i18n", ["localize",
  function(localize) {
    var i18nDirective;
    return i18nDirective = {
      restrict: "EA",
      updateText: function(ele, input, placeholder) {
        var result;
        return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
      },
      link: function(scope, ele, attrs) {
        return scope.$on("localizeResourcesUpdated", function() {
          return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
        }), attrs.$observe("i18n", function(value) {
          return i18nDirective.updateText(ele, value, attrs.placeholder)
        })
      }
    }
  }
]);
