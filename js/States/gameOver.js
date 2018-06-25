var gameOverState = {
    create: function(){
        updateLocalHighscores();

        if (!menuMusic.isPlaying){  menuMusic.play('',0,0.05,true); }
        else {menuMusic.volume = 0.05}

        var gameOverSquirr = game.add.sprite(game.world.centerX-100, game.world.centerY , "loading");
        gameOverSquirr.anchor.setTo(0.5, 0.5);

        var gameOverText = game.add.text(game.world.centerX + 20, game.world.centerY, "RIP", {font: "50px Agency FB", fill: "#ffffff"});

        var backText = game.add.text( game.world.centerX, game.height - 100, "press space to get back", {fill: "#fff"});

        spaceKey.onDown.addOnce(this.restart, this);
    },

    restart: function(){
        backToMenu();
    }
}