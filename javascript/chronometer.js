class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback();
    }, 10);
  }

  getMinutes() {
    if(this.currentTime > 6000){
      return Math.floor(this.currentTime/6000);
    }else{
      return 0;
    }
  }

  getSeconds() {
    if(this.currentTime > 6000){
      return Math.floor((this.currentTime % 6000) / 100);
    }else{
      return Math.floor(this.currentTime / 100);
    }
  }

  getMilliseconds() {
    if(this.currentTime > 100){
      return Math.floor(this.currentTime % 100);
    }else{
      return Math.floor(this.currentTime); 
    }
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return "0" + value.toString();
    }
    else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }
//
  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes())
    let sec = this.computeTwoDigitNumber(this.getSeconds())
    let milli = this.computeTwoDigitNumber(this.getMilliseconds())
    console.log(milli)
    if(min.length > 0 && sec.length > 0){
      return `${min}:${sec}:${milli}`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
