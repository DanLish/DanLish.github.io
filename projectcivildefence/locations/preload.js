Game.Preload = function(game){};
Game.Preload.prototype.preload = function(){
	this.load.image('char', 'img/char.png');
	this.load.image('platform', 'img/platform.png');
	game.stage.background = '#0066cc';
};
Game.Preload.prototype.create = function(){
	this.game.state.start("Main");
};