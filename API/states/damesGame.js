(function () {

    var damesGame = function (game) {
        console.log("Constuct dames state");
    }

    damesGame.prototype.preload = function() {

    }

    damesGame.prototype.create = function () {
        dames.create();
        menu.create();
    }

    damesGame.prototype.render = function () {
        dames.render();
        menu.render();
    }

    damesGame.prototype.update = function () {
        dames.update();
        menu.update();
    }
    window.damesGame = damesGame;
})();

