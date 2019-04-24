var app = angular.module('movieApp');


app.controller('MovieCntrl', function($scope, $http) {
               $scope. isEditting = true;
			   var index = -1;
		    	$scope.movies = [
				{movieName : 'mib',  index : ++index},
				{movieName : 'mib2', index : ++index},
				{movieName : 'mib3', index : ++index},
				];
		console.log($scope.movies);
		
		$scope.createMovie = function(a_movieName)  {
		var obj = {movieName : a_movieName, index : ++index};
		//$scope.movies.push(obj);
		$scope.movieName = '';
		$http.post('/saveData', obj).then(function(resData) {
		  console.log("Data saved Successfullyy!!!", resData);
		});
		}
		
		$scope.edit = function(a_obj) {
			$scope.movieName = a_obj.movieName;
			index = a_obj.index;
			$scope.isEditting = false;
		}
		
		$scope.updateMovie = function(a_movieName) {
			var obj = {movieName :  a_movieName, index : index};
			
			$scope.movies[index] = obj;
			$scope.movieName = '';
			index = index;
			$scope. isEditting = true;
		}
		$scope.delete = function(movieObj) {
			$scope.movies.splice(i, 1);
			var len = $scope.movies.length;
			for( var i=0; i< len; i++) {
				if(moviesObj.index === $scope.movies[i].index) {
					$scope.movies.splice(i, 1);
					index--;
				}
				
			}
	}
});

	