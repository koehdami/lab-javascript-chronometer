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
  // get Seconds and send to screen
  const seconds = printSeconds();
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];

  //get minutes and send to screen
  const minutes = printMinutes()
  minUniElement.innerHTML = minutes[1];
  minDecElement.innerHTML = minutes[0];

  const milliseconds = printMilliseconds()
  milUniElement.innerHTML = milliseconds[1];
  milDecElement.innerHTML = milliseconds[0];
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  return chronometer.computeTwoDigitNumber(minutes)
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  return chronometer.computeTwoDigitNumber(seconds)
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  return chronometer.computeTwoDigitNumber(milliseconds)
}

function printSplit() {
  const listItem = document.createElement("li");
  listItem.classList = "list-item"
  listItem.innerHTML = chronometer.split()
  splitsElement.appendChild(listItem)
}

function clearSplits() {
  splitsElement.innerHTML = ""
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
    chronometer.stop()
}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start"){
    chronometer.reset()
    printTime()
    clearSplits()
  }else{
    printSplit()
  }
});
