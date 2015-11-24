var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: '/views/home.html',
		controller: 'homeCtrl'
	}).otherwise({ redirectTo: '/' });
});