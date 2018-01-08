angular.module('appModule')
.component('productList', { 
	templateUrl : 'app/appModule/productList/productList.component.html',
	controller : function() {
		var vm = this;
		
		vm.user = {
				name : "Kris",
				age : 31,
				hometown : "Pittsburgh"
		}
		
		vm.logUser = function() {
			console.log(vm.user);
		}
		
		vm.getNumProduct = function() {
			return vm.products.length;
		}
		
		vm.addProduct = function(prod) {
			var copy = angular.copy(prod);
			vm.products.push(copy);
		}
		
		vm.sayThings = function() {
			console.log("banana");
		}
		
		vm.makeExpensive = function(product) {
			console.log(product)
			product.price += 100;
		}
		
		vm.products = [];
	},
	controllerAs : 'vm'
})
