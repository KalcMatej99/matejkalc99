
function newFruit(game) {
    var space = findFreeSpace(game);
    game.set(space[0], space[1], 2);
    return game;
}

function findFreeSpace(game) {

    var xRandom = Math.floor(Math.random() * game.width);
    var yRandom = Math.floor(Math.random() * game.height);

    if (game.get(xRandom, yRandom) == 0) {
        return [xRandom, yRandom];
    }
    return findFreeSpace(game);
}

