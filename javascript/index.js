const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const seconds = chronometer.printMinutes();
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  return chronometer.computeTwoDigitNumber(minutes)
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerText = "STOP"
  chronometer.start(printTime)
}

function setSplitBtn() {
  btnRightElement.className = "btn split"
  btnRightElement.innerText = "SPLIT"
}
//
function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.innerText = "START"
}

function setResetBtn() {
  btnRightElement.className = "btn reset"
    btnRightElement.innerText = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === "btn start"){
    setStopBtn()
    setSplitBtn()
  }else{
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
});
