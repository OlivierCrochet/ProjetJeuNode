
var player;

function preload() {
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}
 
function create() {
// The player and its settings
player = this.physics.add.sprite(100, 450, 'dude');

//  Player physics properties. Give the little guy a slight bounce.
player.setBounce(0.0);
player.setCollideWorldBounds(true);

//  Our player animations, turning, walking left and walking right.
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
});
}
function update() {
if (cursors.left.isDown)
    {
        player.setVelocityX(-200);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(200);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-600);
    }

    
    if (cursors.down.isDown && !(player.body.touching.down))
    {
        player.setVelocityY(600);
    }
}
