var movieApp = angular.module('movieApp', ['ui.router']);


movieApp.config(function($stateProvider) 
{
			$stateProvider.state('movies', {
			url :   '/movies' ,
			templateUrl : '/views/movies.html',
			controller:'MovieCntrl'
			});
			
			
			
});