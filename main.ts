radio.setGroup(2);
let turbineIsRunning = false
basic.showIcon(IconNames.Happy)
let turbineOnTime = 0
let turbineTimeout = 15000 // 15 sec timeout
let activity = false
let activityTime = 0
let activityTimeout = 15000

input.onButtonPressed(Button.A, function() {
    activateTurbine()
})

let onDuration = 200

function activateTurbine(){
    pins.digitalWritePin(DigitalPin.P0, 1)
    led.toggleAll();
    basic.pause(onDuration)
    led.toggleAll();
    pins.digitalWritePin(DigitalPin.P0, 0)
}

radio.onReceivedString(function(receivedString: string) {
    activity = true;
    activityTime = input.runningTime()
  if(receivedString == "Start produksjon" ){
    activateTurbine()
  }  else if(receivedString == "Stopp produksjon"){
      win()
  } else if(receivedString == "reset"){
      control.reset()
  }
})

function win(){
    radio.sendString("E")
}