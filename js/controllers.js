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
            return viewLocation === $location.path();
        };
    }).
    config(function($routeProvider) {
    $routeProvider.
        when('/', {
//            controller : 'MenuCtrl',
            templateUrl : 'test.html'
        }).
        when('/portfolio', {
//            controller : 'MenuCtrl',
            templateUrl : 'portfolio.html'
        }).
        when('/services', {
            controller : 'MenuCtrl',
            templateUrl : 'services.html'
        }).
        when('/price', {
            controller : 'MenuCtrl',
            templateUrl : 'price.html'
        }).
        when('/about', {
            controller : 'MenuCtrl',
            templateUrl : 'about.html'
        }).
        when('/contacts', {
            controller : 'MenuCtrl',
            templateUrl : 'contacts.html'
        }).
////        when('/portfolio/:name', {
////            controller : SelectedItemController,
////            templateUrl : 'projectItemSelected.html'
////        }).
        otherwise({
            redirectTo: '/'
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
//    // показать страницу, убрать плавно blackscreen
//    show : function() {
//        $('.blackscreen').fadeOut('slow', function() {
//            $('body').removeClass('page_loading');
//        });
//
//        return this;
//    },
//    // логика учета состояния меню
//    updateMenu : function() {
//        var hash = window.location.hash,
//            $activeHashItem = $('.common-menu [href=' + hash + ']'),
//            $activeItem = $('.b-link_active'),
//            defaultItem = '#portfolio',
//            setActive = function() {
//                if ($activeHashItem.length) {
//                    $('.common-menu [href=' + hash + ']').addClass('b-link_active');
//                }
//            };
//
//        if(hash === ''){
//            window.location += defaultItem;
//
//            return false;
//        }
//
//        if ($activeItem.length > 0) {
//            if (hash !== $activeItem.attr('href')) {
//                $activeItem.removeClass('b-link_active');
//                setActive();
//            }
//        } else {
//            setActive();
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