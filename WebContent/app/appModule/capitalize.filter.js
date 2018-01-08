angular.module('appModule')
.filter('capitalize', function() {
	return function(str) {
		    var result = "";
		    result += str.split("").splice(0,1)[0].toUpperCase();
		    result += str.split("").splice(1).join("");
		    return result;
	}
})