radio.setGroup(2);
let turbineIsRunning = false
basic.showIcon(IconNames.SmallHeart)
let turbineOnTime = 0
let turbineTimeout = 15000 // 15 sec timeout
let activity = false
let activityTime = 0
let activityTimeout = 15000

input.onButtonPressed(Button.A, function() {
    led.toggleAll()
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.toggleAll()
    pins.digitalWritePin(DigitalPin.P0, 0)
})



radio.onReceivedString(function(receivedString: string) {
    activity = true;
    activityTime = input.runningTime()
  if(receivedString == "Start produksjon" ){
      pins.digitalWritePin(DigitalPin.P0,1)
      basic.pause(100)
      pins.digitalWritePin(DigitalPin.P0, 0)
  }  else if(receivedString == "Stopp produksjon"){
      win()
  }
})

function win(){
    radio.sendString("E")
}