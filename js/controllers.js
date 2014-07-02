angular.module('RybaModule', ['ngRoute']).
    factory('Page', ['$http', function($http) {
        return {
            'show' : function () {
                $('.blackscreen').fadeOut('slow', function() {
                    $('body').removeClass('page_loading');
                });
            },
            'hide' : function () {
                $('.blackscreen').fadeIn('slow', function(cb) {
                    $('body').addClass('page_loading');
                    if (cb) cb();
                });
            },
            'getData' : function($scope, cb, errcb) {
                return $http({method: 'GET', url: 'data/gallery.json', cache: true}).
                    success(function(data) {
                        $scope.projects = data;
                        if (cb) cb();
                    }).
                    error(function(data) {
                        // TODO handle to error page or try reload after some timeout
                        console.log('error');
                        if (errcb) errcb();
                    });
            }
        };
    }]).
    controller('RybaController', ['$scope', 'Page', function($scope, Page){
        Page.
            getData($scope).
            then(Page.show);
    }]).
    controller('MenuCtrl', function ($scope, $rootScope, $http, $location){
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) > -1;
        };
    }).
    controller('SelectedItemCtrl', ['$scope', '$routeParams', 'Page', function ($scope, $routeParams, Page) {
        var name = $routeParams.name;

        function showProject() {
            $scope.$parent.projects.some(function (item) {
                if (item.name === name) {
                    $scope.project = item;
                    return true;
                }
            });
            // TODO http://lokeshdhakar.com/projects/lightbox2/
        }

        Page.
            getData($scope, showProject).
            then(function () {
                Page.show();
            });
    }]).
    config(function($routeProvider) {
    $routeProvider.
        when('/portfolio', {
            templateUrl : 'portfolio.html'
        }).
        when('/portfolio/:name', {
            controller : 'SelectedItemCtrl',
            templateUrl : 'project.html'
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