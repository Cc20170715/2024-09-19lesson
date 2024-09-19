namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (u.vy == 0) {
        u.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . 2 2 . 9 9 f f 2 2 . . . . 
        . . . . 2 2 f f f 2 2 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 9 9 9 9 9 9 4 . . . . 
        . . 4 4 9 9 9 9 9 9 9 4 . . . . 
        . . 4 9 9 9 9 9 9 9 9 4 . . . . 
        . . 4 9 9 9 9 9 9 9 9 4 . . . . 
        . . 4 9 9 9 9 9 9 4 4 . . . . . 
        . . 4 4 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 9 . . . . . 
        . . . . 2 2 9 9 f f f . 2 2 . . 
        . . . . . 2 2 f f f 9 2 2 . . . 
        . . . . . 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 9 9 9 9 9 9 9 4 . . 
        . . . 4 4 9 9 9 9 9 9 9 9 4 . . 
        . . . 4 9 9 9 9 9 9 9 9 9 4 . . 
        . . . 4 9 9 9 9 9 9 9 9 9 4 . . 
        . . . 4 9 9 9 9 9 9 9 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(u.x + 0, u.y - 30)
    bee.follow(u)
})
let bee: Sprite = null
let u: Sprite = null
let Flower: Sprite = null
let Coin: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level10`)
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    Coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f 5 . . . . . . . 
        . . . . f f 5 5 5 5 5 . . . . . 
        . . . f f 5 . . . . 5 5 . . . . 
        . . . f f 5 . . . . . 5 . . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . . 5 5 5 . 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    Coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 4 4 4 4 4 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 4 4 4 5 5 5 f . . . . 
        . . . f 4 5 5 5 5 5 5 f . . . . 
        . . . f 4 5 5 5 5 5 5 f . . . . 
        . . . f 4 4 5 5 5 5 5 f . . . . 
        . . . f 4 5 5 5 5 5 5 f . . . . 
        . . . f 4 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . f 5 4 4 4 5 f . . . . . . 
        . . . f 4 5 5 5 5 5 f . . . . . 
        . . . f 4 5 5 5 5 5 f . . . . . 
        . . . f 4 4 5 5 5 5 f . . . . . 
        . . . f 4 5 5 5 5 5 f . . . . . 
        . . . f 4 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f 5 5 f . . . . . . . . 
        . . . f 5 4 4 5 f . . . . . . . 
        . . . f 4 5 5 5 5 f . . . . . . 
        . . . f 4 5 5 5 5 f . . . . . . 
        . . . f 4 4 5 5 5 f . . . . . . 
        . . . f 4 5 5 5 5 f . . . . . . 
        . . . f 4 5 5 5 5 f . . . . . . 
        . . . f 5 5 4 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f f 5 f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    Flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 5 5 5 5 4 4 . . . . 
        . . . 4 4 5 f 5 f 5 5 4 . . . . 
        . . . 4 5 f 5 5 5 f 4 4 . . . . 
        . . . 4 4 4 f f 4 4 4 . . . . . 
        . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . 4 . . . . . . . . . 
        . . . . . . 4 . . . . . . . . . 
        . . 7 7 7 . 4 7 7 7 7 7 . . . . 
        . . . . 7 7 7 7 . . . 7 7 . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . 7 7 . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        `, SpriteKind.Flower)
    tiles.placeOnTile(Flower, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
u = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 7 7 7 . . 
    . . 7 . . . . . . . . 7 7 5 7 . 
    . . 7 . . 7 7 7 . . . 7 7 7 7 . 
    . . 7 7 7 7 . 7 7 7 7 7 7 7 . . 
    . . . . . 7 . . 7 . . 7 . . . . 
    . . . . . 7 . . 7 . . 7 . . . . 
    . . . . . 7 . . 7 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . 7 . . . 7 7 7 . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
u.ay = 350
controller.moveSprite(u, 100, 0)
scene.cameraFollowSprite(u)
