input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Angry)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Meh)
    soundExpression.yawn.playUntilDone()
    basic.showIcon(IconNames.Rollerskate)
})
basic.showIcon(IconNames.Heart)
