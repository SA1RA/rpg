
"use strict";
var C = {
  background: {
    //image: 'background.png',
    //scale: 1
  },
  player: {
    //image: 'player.png',
    //width: 36,
    //height: 36,
    //frames: 31,
    //startx: 100,
    //starty: 750,
    //bounce: 0.3,
    //drag: 3000,
    //speed: 400
  }
};



class BootState {

  init() {
    console.log("%c~~~ Booting New_Rome ~~~\n Compliments of Smlucas13",
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
    //this.load.image('background',C.background.image);
    //this.load.spritesheet('player',
    //  C.player.image,
    //  C.player.width,
    //  C.player.height,
    //  C.player.frames
    );
  }

  create() {
    game.state.start('Play')
  }

}

class PlayState {

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // background
    //this.background = this.add.tileSprite(0,0,800,800,'background');
    //this.background.autoScroll(0,C.background.scroll);
    //this.background.scale.set(C.background.scale);

    // player
    //this.player = this.add.sprite(C.player.startx,C.player.starty,'player');
    //this.player.smoothed = false; 
    //this.player.scale.set(3);
    //this.player.anchor.set(0.5,0.5);
  }

  update() {
    
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
