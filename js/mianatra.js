var app = angular.module('mianatra', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.level = getParam("level");
	$scope.words = clone(M[this.level]);
	shuffle($scope.words);
	this.showText = function(card) {
		return card;
		
	};
	this.milaza = function(word, level) {
		var audioObj = new Audio("feo/"+level+"/" + word +".mp3");
		audioObj.play();
	};
	
	$scope.text = text;
	$scope.level = this.level;
	$scope.getParam = getParam;
	$scope.milaza = this.milaza;
}]);

var text = function(t) {
	return translate(t, g.language);
};


