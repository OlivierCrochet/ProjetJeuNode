
var mainState = {  
    preload: function() {  
        this.load.image('sky', 'assets/sky.png');
    },

    create: function() {  
        
        this.add.image(400, 300, 'sky');  
    },

    update: function() {  
        
    },
};

// Initialize the game and start our state
var game = new Phaser.Game(500, 200);  
game.state.add('main', mainState);  
game.state.start('main');