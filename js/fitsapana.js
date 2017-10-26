var app = angular.module('fitsapana', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.level = getParam("level");
	$scope.finished = false;
	$scope.wordsDisplay = clone(M[this.level]);
	shuffle($scope.wordsDisplay);
	$scope.wordsQuiz = clone(M[this.level]);
	shuffle($scope.wordsQuiz);
	this.getCurrentWord = function() {
		return $scope.wordsQuiz[0];
	};
	this.milaza = function(word, level) {
		var audioObj = new Audio("feo/"+level+"/" + word +".mp3");
		audioObj.play();
	};
	this.try = function(word) {
		if (word ===$scope.wordsQuiz[0]) {
			$scope.wordsQuiz = $scope.wordsQuiz.splice(1);
			if ($scope.wordsQuiz.length < 1) {
				$scope.finished=true;
			} else {
				this.milaza($scope.wordsQuiz[0], this.level);
			}
		} else {
			noise();
		}
	};
	this.milaza($scope.wordsQuiz[0], this.level);
	$scope.level = this.level;
	$scope.getParam = getParam;
	$scope.milaza = this.milaza;
}]);


