(function() {
    
    var damesTitle = function (game) {
        console.log("Construct title state");
    }

    damesTitle.prototype.preload = function() {
        game.load.image('vlarb', 'art/dames/dune_title.png');
        game.load.image('vlarb_background', 'art/dames/dune_title_background.png');
        dames.preload();
        menu.preload();
    }

    damesTitle.prototype.create = function() {
        
        game.add.tileSprite(0, 0, 1280, 720, 'vlarb_background');
        var playButton = this.game.add.button(160,320, "vlarb", 
            function() {
                game.state.start("damesGame");
            }, this);
    }

    window.damesTitle = damesTitle;
})();
