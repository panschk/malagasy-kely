var app = angular.module('select', []);
app.controller('Main', ['$scope', function Main($scope) {
	$scope.L = L;
	$scope.M = M;
	$scope.getPic = function(level, index) {
		return M[level][index];
	};
}]);


