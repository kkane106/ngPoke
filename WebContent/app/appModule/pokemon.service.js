angular.module('appModule')
.factory('pokeService', function($http) {
	var service = {};
	
	service.index = function() {
		return $http({
			method : 'GET',
			url : 'http://52.25.225.137:8080/pokemon/data/poke'
		}) // returns a promise
	}
	
	service.create = function(poke) {
		return $http({
			method : 'POST',
			url : 'http://52.25.225.137:8080/pokemon/data/poke',
			headers : {
				'Content-Type' : 'application/json',
			},
			data : poke
		}); // returns a promise
	}
	
	service.destroy = function(id) {
		return $http({
			method : 'DELETE',
			url : 'http://52.25.225.137:8080/pokemon/data/poke' + '/' + id
		})
	}
	
	
	return service;
});