var game = {
    width: 0,
    height: 0,
    squares: [[]],
    get: function (x, y) {
        return this.squares[x][y];
    },
    set: function (x, y, v) {
        this.squares[x][y] = v;
    },
    snakeDirection: 1,
    snake: [[]]
};

function newGame(width, height) {
    game = {
        width: width,
        height: height,
        squares: [[]],
        get: function (x, y) {
            return this.squares[x][y];
        },
        set: function (x, y, v) {
            this.squares[x][y] = v;
        },
        snakeDirection: 1,
        snake: [[]]
    };
    initializeSquaresOfGame(game);
    game = newSnake(game);
    game = newFruit(game);
    return game;
}

function moveSnake(game) {
    var snakeLength = game.snake.length;
    var direction = game.snakeDirection;
    var snakeEatFruit = false;
    var firstPositionX = game.snake[0][0];
    var firstPositionY = game.snake[0][1];
    var lastPositionX = game.snake[snakeLength - 1][0];
    var lastPositionY = game.snake[snakeLength - 1][1];

    if (direction == 0) {
        firstPositionY = firstPositionY + 1;
    } else if (direction == 1) {
        firstPositionX = firstPositionX + 1;
    } else if (direction == 2) {
        firstPositionY = firstPositionY - 1;
    } else if (direction == 3) {
        firstPositionX = firstPositionX - 1;
    }

    if (!isValidPosition([firstPositionX, firstPositionY])) {
        return -1;
    }

    if (game.get(firstPositionX, firstPositionY) == 2) {
        snakeEatFruit = true;
    }

    game.set(firstPositionX, firstPositionY, 1);
    game.snake.splice(0, 0, [firstPositionX, firstPositionY]);

    if (!snakeEatFruit) {
        game.snake.pop();
        game.set(lastPositionX, lastPositionY, 0);
    } else {
        game = newFruit(game);
    }

}

function initializeSquaresOfGame(game) {
    game.squares = Array(game.width);
    for (var w = 0; w < game.width; w++) {
        game.squares[w] = Array(game.height);
        for (var h = 0; h < game.height; h++) {
            game.set(w, h, 0);
        }
    }
}


function isValidPosition(pos) {
    var xPos = pos[0];
    var yPos = pos[1];
    return xPos >= 0 && xPos < game.width && yPos >= 0 && yPos < game.height && game.get(xPos, yPos) != 1;
}