class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {this.currentTime++
    callback();
    }, 1000);
  }

  getMinutes() {
    if(this.currentTime > 60){
      return Math.floor(this.currenTime/60);
    }else{
      return this.currenTime;
    }
  }

  getSeconds() {
    if(this.currentTime > 60){
      return this.currenTime % 60;
    }else{
      return this.currenTime;
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
    clearInterval(intervalId);
  }

  reset() {
    this.currenTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(getMinutes())
    let sec = this.computeTwoDigitNumber(getSeconds())
    if(min.length > 0 && sec.length > 0){
      return `${min}:${sec}`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
