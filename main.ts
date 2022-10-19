basic.forever(function () {
    if (mbit_小車類.Avoid_Sensor(mbit_小車類.enAvoidState.OBSTACLE)) {
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Yellow)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_SpinLeft, 50)
        basic.pause(500)
    } else {
        mbit_小車類.RGB_Car_Big2(mbit_小車類.enColor.Cyan)
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 50)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
