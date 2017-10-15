var app = angular.module('memory', []);
app.controller('Main', ['$scope', function Main($scope) {
	this.level = getParameterByName("level");
	this.isactive = 'menu';
	this.startMemory = function() {
		this.isactive = 'memory';
		$scope.game = new Memory(this);
		$scope.game.init(this.count);
	}
	this.mainMenu = function() {
		this.isactive = 'menu';
	}
	this.getCardsize = function() {
		var windowheight = window.innerHeight;
		var windowwidth = window.innerWidth;
		var value = Math.min(windowheight, windowwidth) / (Math.log(this.count) * 3.0);
		var height = value;
		height += 20;
		
		return "height:"+height+"px;width: "+value + "px;";
	}
	this.showText = function(card) {
		
			return card;
		
	}
	
	$scope.translate = translate;
	$scope.languages = languages;
	$scope.text = text;
	$scope.T = T;
	$scope.level = this.level;
	
}]);

var Memory = function(m) {
	this.m = m;
	this.init = function(count) {
		g.turns = 0;
		g.lastCount = count;
		save();
		this.turnedCards = [];
		this.count = count;
		this.cards = new Array(this.count * 2);
		var indexSel = getRandomIndex(icons.length, this.count);
		for (var i=0; i < indexSel.length; i++) {
			this.cards[i*2] = {index:indexSel[i], value:icons[indexSel[i]],class:'hidden'};
			this.cards[i*2+1] = {index:indexSel[i], value:icons[indexSel[i]],class:'hidden'};
		}
		shuffle(this.cards);
	}
	this.turn = function(index) {
		g.turns++;
		if (this.turnedCards.length > 1) {
			this.cards.forEach(function(card) {
				if (card.class=='shown') {
					card.class='hidden';
				}
			})
			this.turnedCards = [];
		}
		this.turnedCards.push(index);
		this.cards[index].class="shown";
		if (this.turnedCards.length == 2) {
			var c1 = this.cards[this.turnedCards[0]];
			var c2 = this.cards[this.turnedCards[1]];
			
			if (c1.index===c2.index) {
				c1.class='done';
				c2.class='done';
				if (g.sound) {
					noise();
				}
				this.checkAllTurned();
			}
		}
	}
	this.checkAllTurned = function(){
		for (var i = 0; i < this.cards.length; i++) {
			var card = this.cards[i];
			if (card.class != 'done') {
				return;
			}
		}
		// all cards were found!
		
		m.mainMenu();
	}
}

var text = function(t) {
	return translate(t, g.language);
}
var GlobalScope = {
	lastName : "",
	turns : 0,
	highscoreList : {},
	lastCount : 4,
	language : languages[0]
}


