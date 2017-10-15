var BIBY = [
"tantely",
"lolo",
"saka",
"omby",
"foza",
"alika",
"ganagana",
"sahona",
"voangory",
"gidro",
"liona",
"totozy",
"kisoa",
"trondro",
"ondry",
"tigra"
];
var LOKO = [
"fotsy",
"maintso",
"mainty",
"manga",
"mavo",
"mavokely",
"mena",
"orange",
"volomparasy",
"volontany"
];

T = {
	"loko" : LOKO,
	"biby" : BIBY
}

var translate = function(code, lang) {

	var texts = {
		highscore 	: {de: "Bestenliste", en: "Hall of Fame", fr: "Classement"},
		play		: {de: "Spielen", en: "Play!", fr: "Jouer"},
		pairs		: {de: "Paare", en: "pairs", fr: "paires"},
		cards_turned: {de: "Du hast alle Karte in {0} Zügen aufgedeckt!\nWie heißt Du?", en: "You matched all cards in {0} turns.\nWhat's your name?", fr: "Tu as trouvé tout les pairs en {0} tours.\nComment tu t'appelles?"},
		back		: {de: "Zurück", en: "Back", fr: "Retour"},
		showDesc	: {de: "Bildunterschrift Karten", en: "Show card caption", fr: "Légende cartes"},
		sound		: {de: "Soundeffekte", en: "sound effects", fr: "son"},
		top3		: {de: "Top 3 für alle Feldgrößen. In Klammern Anzahl der Züge:", en: "Top three for all game sizes. Number of turns in parenthesis", fr : "Les trois meilleurs pour chaque taille de terrain. Nombre de tours en parenthèse"},

	}
	var valForLang = texts[code][lang.code];
	if (valForLang) {
		return valForLang;
	}
	return texts[code]['en']; 
}

