let config = {
    type: Phaser.AUTO,
//    width: window.innerWidth,
//    height: window.innerHeight,
    width: 1000,
    height: 1000,
    backgroundColor: '#000000',
    scene: [ /*mainTitle, mainMenu, newGame, choosePlayer,*/ mapGen ] /*, storm, spiceBlow, bidding, movement, battles, spiceCollection , bribery, misc*/
};

let game = new Phaser.Game(config);

