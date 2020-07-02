
// Snake is represented by 2-dimensional array indicating the positionns of the snake
var snake = [[]];

// Direction tells the direction of the snake (0 = up, 1 = right, 2 = down, 3 = left)
var direction = 1;

function newSnake(game) {
    //[[1, 1]] is start point
    var position = findFreeSpace(game);
    game.set(position[0], position[1], 1);
    game.snakeDirection = 1;
    game.snake = [position];
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
