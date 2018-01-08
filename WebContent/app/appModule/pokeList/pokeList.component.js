angular.module('appModule')
.component('pokeList', {
	templateUrl : 'app/appModule/pokeList/pokeList.component.html',
	controllerAs : 'vm',
	controller : function(pokeService) {
		var vm = this;
		
		vm.pokemons = [];
		
		vm.types = [
			  'all',
			  'normal',
			  'poison',
			  'water',
			  'fighting',
			  'fire',
			  'bug',
			  'flying',
			  'electric',
			  'ground',
			  'rock',
			  'psychic',
			  'ghost',
			  'dragon'
			];
		
		vm.sortCriteria = 'pokeId';
		
		var reload = function() {
			pokeService.index()
				.then(function(response) {
					vm.pokemons = response.data;
				})
		}
		
		reload();
			
		vm.newPokemon = function(poke) {
			pokeService.create(poke)
				.then(function(response) {
					reload();
				})
				.catch(function(err) {
					console.error(err);
				})
			console.log("SENT REQUEST, AFTER .create METHOD")
		}
		
		vm.deletePoke = function(id) {
			pokeService.destroy(id)
				.then(function(res) {
					reload();
				})
				.catch(console.error)
		}
	}
});








