controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startlevel(1)
})
function startlevel (level: number) {
    if (level == 1) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            sprites.destroy(value)
        }
        for (let index = 0; index <= 4; index++) {
            alien = sprites.create(img`
                ........................
                .....ffff...............
                ...fff22fff.............
                ..fff2222fff............
                .fffeeeeeefff...........
                .ffe222222eef...........
                .fe2ffffff2ef...........
                .ffffeeeeffff...........
                ffefbf44fbfeff..........
                fee41fddf14eef..........
                .ffffdddddeef...........
                fddddf444eef............
                fbbbbf2222f4e...........
                fbbbbf2222fd4...........
                .fccf45544f44...........
                ..ffffffff..............
                ....ff..ff..............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            alien.setPosition(Xpos, 61)
            Xpos += 15
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            sprites.destroy(value)
        }
        for (let index = 0; index <= 4; index++) {
            alien = sprites.create(img`
                . . . . . . . . . . b 5 b . . . 
                . . . . . . . . . b 5 b . . . . 
                . . . . . . b b b b b b . . . . 
                . . . . . b b 5 5 5 5 5 b . . . 
                . . . . b b 5 d 1 f 5 d 4 c . . 
                . . . . b 5 5 1 f f d d 4 4 4 b 
                . . . . b 5 5 d f b 4 4 4 4 b . 
                . . . b d 5 5 5 5 4 4 4 4 b . . 
                . b b d d d 5 5 5 5 5 5 5 b . . 
                b d d d b b b 5 5 5 5 5 5 5 b . 
                c d d b 5 5 d c 5 5 5 5 5 5 b . 
                c b b d 5 d c d 5 5 5 5 5 5 b . 
                c b 5 5 b c d d 5 5 5 5 5 5 b . 
                b b c c c d d d 5 5 5 5 5 d b . 
                . . . . c c d d d 5 5 5 b b . . 
                . . . . . . c c c c c b b . . . 
                `, SpriteKind.Enemy)
            alien.setPosition(Xpos, 61)
            Xpos += 15
        }
    }
}
let alien: Sprite = null
let Xpos = 0
Xpos = 80
startlevel(0)
let hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . 3 . . . 3 3 . . . . . . 
    . . . 3 . . . . . 3 . . . . . . 
    . . . 3 . . . . . 3 . . . . . . 
    . . . 3 . . . . . 3 3 . . . . . 
    . . . 3 3 . . . 3 3 . . . . . . 
    . . . . 3 3 . 3 3 . . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
