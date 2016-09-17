
"use strict";
var C = {
  //background
  background: {
    image: 'rpg_background.png',
    scale: 1
  },
  //player
  player: {
    image: 'turtle1.png',
    width: 63,
    height: 64,
    frames: 1,
    startx: 400,
    starty: 400,
    bounce: 0.3,
    drag: 3000,
    speed: 300
  },
  
};



class BootState {

  init() {
    console.log("%c~~~ Booting RPG ~~~\n Compliments of Smlucas13",
                "color:#fdf6e3; background:#073642");
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }

  create() {
    game.state.start('Preload')
  }

}

class PreloadState {

  create() {
    game.state.start('Start')
  }

}

class StartState {

  init() {
  }

  preload() {
    this.load.image('background',C.background.image);
    this.load.spritesheet('player',
      C.player.image,
      C.player.width,
      C.player.height,
      C.player.frames
    );

  }

  create() {
    game.state.start('Play')
  }

}

class PlayState {

  create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    // background
    this.background = this.add.tileSprite(0,0,800,800,'background');
    //this.background.autoScroll(0,C.background.scroll);
    this.background.scale.set(C.background.scale);
    
    // player
    this.player = this.add.sprite(C.player.startx,C.player.starty,'player');
    //this.player.smoothed = false; 
    //this.player.scale.set(3);
    //this.player.anchor.set(0.5,0.5);
    
    //Add keys
    this.right = game.input.keyboard.addKey(Phaser.KeyCode.D);
    this.left = game.input.keyboard.addKey(Phaser.KeyCode.A);
    this.up = game.input.keyboard.addKey(Phaser.KeyCode.W);
    this.down = game.input.keyboard.addKey(Phaser.KeyCode.S);
  }

  update() {
    //Movementv
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;
    
    if (this.left.isDown) {
        this.player.body.moveLeft(300);
    }
    else if (this.right.isDown) {
        this.player.body.moveRight(300);
    }
    if (this.up.isDown) {
        this.player.body.moveUp(300);
    }
    else if (this.down.isDown) {
        this.player.body.moveDown(300);
    }
    //Movement^
}

handleCollision() {
    game.state.start('End')
  }

}

class EndState {

  create() {
    game.state.start('Start')
  }

}


var game = new Phaser.Game(800,800);
game.state.add('Boot', BootState);
game.state.add('Preload', PreloadState);
game.state.add('Start', StartState);
game.state.add('Play', PlayState);
game.state.add('End', EndState);
game.state.start('Boot');
