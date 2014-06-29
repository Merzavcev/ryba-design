/*global Mustache*/
var ryba = angular.module('RybaModule', ['ngRoute']);

//function SelectedItemController($scope, $routeParams) {
//    console.log($routeParams.name);
//}

ryba.
    controller('RybaController', function($scope){
        $('.blackscreen').fadeOut('slow', function() {
            $('body').removeClass('page_loading');
        })
    }).
    controller('MenuCtrl', function ($scope, $rootScope, $http, $location){
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) > -1;
        };
    }).
    controller('PortfolioCtrl', function($scope, $rootScope, $http, $location) {
        $http({method: 'GET', url: 'data/gallery.json', cache: true}).
            success(function(data) {
                $scope.projects = data;
            }).
            error(function(data) {
                console.dir(data);
            });
    }).
    controller('SelectedItemCtrl', function ($scope, $routeParams) {
        console.dir($routeParams);
    }).
    config(function($routeProvider) {
    $routeProvider.
        when('/portfolio', {
            controller : 'PortfolioCtrl',
            templateUrl : 'portfolio.html'
        }).
        when('/portfolio/:name', {
            controller : 'SelectedItemCtrl',
            templateUrl : 'portfolio.html'
        }).
        when('/services', {
            templateUrl : 'services.html'
        }).
        when('/price', {
            templateUrl : 'price.html'
        }).
        when('/about', {
            templateUrl : 'about.html'
        }).
        when('/contacts', {
            templateUrl : 'contacts.html'
        }).
        otherwise({
            redirectTo: '/portfolio'
        });
});

//var RYBA = {
//    buildPortfolio : function(data) {
//        var tmpl = $('.tmpl-projects').text();
//        //debugger;
//        $('.projects-grid__line').html(Mustache.render(tmpl, data));
//
//        return this;
//    },
//    buildGrid : function(data) {
//        // debugger;
//        var coverArray = {},
//            projects = data.projects,
//            l = projects.length,
//            tmpl = $('.tmpl-project').text();
//
//        // последние добавленные проекты стоят первыми
//        for (var i = l - 1; i >= 0; i--) {
//            var currentItem = projects[i];
//            //coverArray[currentItem.name] = currentItem.cover[0];
//            //$('[data-name="' + currentItem.name + '"]').css('background-image','url('+ currentItem.cover[0] +')');
//            $('.pages').append(Mustache.render(tmpl, currentItem));
//        }
//
//        return this;
//    },
//    init : function () {
//    // страница работает только с данными о проектах
//        $.
//            when($.getJSON('data/gallery.json')).
//            then(function(data) {
//                RYBA.
//                    buildPortfolio(data).
//                    buildGrid(data).
//                    show();
//            }, function() {
//                console.log('No data');
//            });
//
//        return this;
//    }
//};
//window.onload = RYBA.updateMenu;
//window.onhashchange = RYBA.updateMenu;
//RYBA.init();