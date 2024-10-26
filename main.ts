input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let obstacle3 = 0
let bird: game.LedSprite = null
let ticks = 0
let obstacle: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacle.length > 0 && obstacle[0].get(LedSpriteProperty.X) == 0) {
        obstacle.removeAt(0).delete()
    }
    for (let obstacle2 of obstacle) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 1 == 0) {
        obstacle3 = randint(0, 4)
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != obstacle3) {
                obstacle.push(game.createSprite(4, Index))
            }
        }
    }
    for (let obstacle3 of obstacle) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
