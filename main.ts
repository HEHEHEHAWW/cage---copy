namespace SpriteKind {
    export const WALL = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.WALL, function (sprite, otherSprite) {
    mySprite2.setPosition(mySprite2.x, mySprite2.y)
})
info.onLifeZero(function () {
    game.reset()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffff.......................................................................................................................fffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ..................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.............
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
scene.setBackgroundColor(1)
mySprite2.setPosition(80, 60)
let MAX_Y = 110
let MAX_X = 139
let Min_X = 30
let Min_Y = 20
let X_RESPAWN_OFFSET = 10
let Y_RESPAWN_OFFSET = 10
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . c c c c f f f f f f f f . . 
    . . c d d d d d d d d d d f . . 
    . . c d d b b d d b b d d f . . 
    . . c d d 5 5 d d 5 5 d d f . . 
    . . c d d 5 7 d d 7 5 d d f . . 
    . . f d d b b d d b b d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f d f b e f b e f c d f . . 
    . . f d e c b a a b a a d c . . 
    . . f d b f b e f c c f d c . . 
    . . f d d d d d d d d d d c . . 
    . . f f f f f f f f c c c c . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(randint(Min_X, MAX_X), randint(Min_Y, MAX_Y))
myEnemy.follow(mySprite2)
info.startCountdown(1.5)
info.setLife(10)
let speed = 2
game.onUpdate(function () {
    if (mySprite2.x > MAX_X) {
        mySprite2.setPosition(MAX_X - X_RESPAWN_OFFSET, mySprite2.y)
    } else if (mySprite2.x < Min_X) {
        mySprite2.setPosition(Min_X + X_RESPAWN_OFFSET, mySprite2.y)
    } else if (mySprite2.y > MAX_Y) {
        mySprite2.setPosition(mySprite2.x, MAX_Y - Y_RESPAWN_OFFSET)
    } else if (mySprite2.y < Min_Y) {
        mySprite2.setPosition(mySprite2.x, Y_RESPAWN_OFFSET + Min_Y)
    } else {
    	
    }
})
