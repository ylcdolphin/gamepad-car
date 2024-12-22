radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 10)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 10)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
    }
})
radio.setGroup(1)
