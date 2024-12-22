radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    }
})
radio.setGroup(1)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
