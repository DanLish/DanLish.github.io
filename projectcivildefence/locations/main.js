Game.Main = function(game){
	var player;
	var platforms;
	var cursors;
	var jumpButton;
};
Game.Main.prototype.create = function(){
	this.bounds = new Phaser.Rectangle(0,0, 760, 730);
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	player = game.add.sprite(100, 200, 'char');
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	player.body.gravity.y = 500;
	platforms = game.add.physicsGroup();
	platforms.create(500, 150, 'platform');
	platforms.create(0, 211, 'platform');
	platforms.create(409, 120, 'platform');
	platforms.setAll('body.inmovable', true);
};
Game.Main.prototype.update = function(){};