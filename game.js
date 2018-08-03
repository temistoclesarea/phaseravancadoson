
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {
    preload: preload, create: create, update: update, render: render
});

var person;
var music;
var paused = false;

function preload() {
    // Carregando image
    game.load.image("person", "https://haxe.org/img/branding/haxe-logo-glyph.png");
    // Carregando musica
    game.load.audio("8bits", ["./music/8bits.ogg", "./music/8bits.mp3"]);
}

function create() {
    // Definindo cor de fundo
    game.stage.backgroundColor = "#66b3ff";
    // Criando o objeto do personagem
    person = game.add.sprite(game.world.centerX, game.world.centerY, "person");
    // Ponto da rotação
    person.anchor.setTo(0.5, 0.5);
    // Criando obj de audio
    music = game.add.audio("8bits");
    // Dar Play
    music.play();

    game.input.onDown.add(pause, this);
}

function pause() {
    if (!paused) {
        music.pause();
        paused = !paused;
    } else {
        music.resume();
        paused = !paused;
    }
}

function update() {
    person.rotation += 0.01;
}

function render() {

}

