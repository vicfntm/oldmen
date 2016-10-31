  'use strict';
  var countryApp = angular.module('countryApp', []);
  countryApp.controller('CountryCtrl', function ($scope){
    $scope.desc = POSTERS;
    $scope.defaultPic = 'resources'+ $scope.desc[8]['image'];
    $scope.defaultHeader = $scope.desc[8]['title'];
    $scope.defaultDescription = $scope.desc[8]['description'];
    
    $scope.changeDescr = function(element){
    	$scope.defaultPic = 'resources'+element['image'];
    	$scope.defaultHeader = element['title'];
    	$scope.defaultDescription = element['description'];

    }

    });
