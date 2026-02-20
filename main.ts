function set_dice_pattern () {
    myImage = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    ]
}
function roll_dice () {
    myImage[randint(0, 5)].showImage(0)
}
input.onGesture(Gesture.Shake, function () {
    roll_dice()
    dice_value = randint(0, 6)
    basic.showNumber(dice_value)
})
let dice_value = 0
let myImage: Image[] = []
set_dice_pattern()
roll_dice()
