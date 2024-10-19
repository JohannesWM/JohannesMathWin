namespace SpriteKind {
    export const Item = SpriteKind.create()
}
let Rocky = sprites.create(img`
    . . . . . c c b b b . . c f e f 
    . . . . c b d d d d b . f e f e 
    . . . . c d d d d d d f e f e f 
    . . . . c 5 5 d d d f e f e f c 
    . . . c b 5 f d d f e f e f . . 
    . . . c b b d d f e f e f b . . 
    . c c c e e e f e f e f b b b . 
    . c d e e e f e f e f b b b d b 
    c b e e e f 1 f e f e 5 5 b d b 
    c e e 1 f 1 f 1 f e 5 b b b d c 
    c e e f 1 f 1 f e e b b d d c c 
    c e b 1 f 1 f e e e d d b c c b 
    . e e b 1 f 1 e e c c c b b b b 
    . e e e b e e e b b b b b b c . 
    . . e e e e c c b b b b c c . . 
    . . . . . . . . c c c c . . . . 
    `, SpriteKind.Player)
let Guitar = sprites.create(assets.image`RockyWGuitar`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
Rocky = sprites.create(img`
    . . . . . c c b b b . . . . . . 
    . . . . c b d d d d b . . . . . 
    . . . . c d d d d d d b b . . . 
    . . . . c 5 5 d d d 5 f d b . . 
    . . . c b 5 f d d d 5 5 d b . . 
    . . . c b b d d d d d d d b . . 
    . c c c c b b b b d d d b b b . 
    . c d d b c b b b b b b b b d b 
    c b b 5 5 5 b b b b b 5 5 b d b 
    c c b b 5 5 5 5 5 5 5 b b b d c 
    c b c c c b b b b b b b d d c c 
    c c b b c c c c b d d d b c c b 
    . c c c c c c c c c c c b b b b 
    . . c c c c c b b b b b b b c . 
    . . . . . . c c b b b b c c . . 
    . . . . . . . . c c c c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Rocky, 100, 100)
scene.cameraFollowSprite(Rocky)
forever(function () {
    if (Rocky.x >= 0) {
    	
    }
})
