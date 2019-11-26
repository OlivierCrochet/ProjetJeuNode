/*
disigne des lvl
*/

// Create 3 groups that will contain our objects
this.walls = game.add.group();
this.coins = game.add.group();
this.enemies = game.add.group();

// Design the level. x = wall, o = coin, ! = lava.
var level = [
    'xxxxxxxxxxxxxxxxxxxxxx',
    '!         !          x',
    '!                 o  x',
    '!         o          x',
    '!                    x',
    '!     o   !    x     x',
    'xxxxxxxxxxxxxxxx!!!!!x',
];