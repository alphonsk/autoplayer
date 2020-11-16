 
const foot = new Audio('foot.mp3');
const mill = new Audio('mill.mp3');
let timesNeeded;
let playTimesArray = [];
const currentTimeArray = [];
let nextTimeArray = [];


// start
function start() {
  document.getElementById('start-div').style.display = 'none';
  document.getElementById('pause-div').style.display = 'block';

  // start timer
  startTimer();
}

// start timer
function startTimer() {
  // get the time
  getTime();
  document.getElementById('time-now').innerHTML = `${currentTimeArray[0]}:${currentTimeArray[1]}:${currentTimeArray[2]}`;

  // how many times should i play? 3xhr?
  playTimes(25);

  // start player
  startPlayer(currentTimeArray);

  // call the timer
  const t = setTimeout(startTimer, 25000);
}


// start play
function audioPlay(num) { 
  if (num == 1) {
    mill.play();
  } else {
    foot.play();
  }
}


// stop play
function audioPause() {
  mill.pause();
  foot.pause();

  // hide / show buttons
  document.getElementById('start-div').style.display = 'block';
  document.getElementById('pause-div').style.display = 'none';
}


// create unique times between 0 - 60
function playTimes(timesNeeded) {
  while (playTimesArray.length < timesNeeded) {
    for (let i = 0; i < timesNeeded; i++) {
      number = Math.floor((Math.random() * 50));
      playTimesArray.push(number);
    }
    playTimesArray = [...new Set(playTimesArray)];
  }

  return playTimesArray;
}


// return current hour and minute
function getTime() {
  const now = new Date();
  currentTimeArray[0] = now.getHours();
  currentTimeArray[1] = now.getMinutes();
  currentTimeArray[2] = now.getSeconds();
  return currentTimeArray;
}


// play the audio
// and show what min and what song is being played
function startPlayer(currentTimeArray) {
  const currentHour = currentTimeArray[0]; 
  const currentMin = currentTimeArray[1];
  const arr = playTimesArray;
  const num = Math.floor((Math.random() * 2) + 1); 

  if (currentHour == 22) {
    addToNextPlay(arr[0], currentMin);
    addToNextPlay(arr[10], currentMin);
    addToNextPlay(arr[20], currentMin);
  }
  if (currentHour == 23) {
    addToNextPlay(arr[1], currentMin);
    addToNextPlay(arr[11], currentMin);
    addToNextPlay(arr[21], currentMin);
  }
  if (currentHour == 0) {
    addToNextPlay(arr[2], currentMin);
    addToNextPlay(arr[12], currentMin);
    addToNextPlay(arr[22], currentMin);
  }
  if (currentHour == 1) {
    addToNextPlay(arr[3], currentMin);
    addToNextPlay(arr[13], currentMin);
    addToNextPlay(arr[23], currentMin);
  }
  if (currentHour == 2) {
    addToNextPlay(arr[4], currentMin);
    addToNextPlay(arr[14], currentMin);
    addToNextPlay(arr[24], currentMin);
  }
  if (currentHour == 3) {
    addToNextPlay(arr[5], currentMin);
    addToNextPlay(arr[15], currentMin);
    addToNextPlay(arr[25], currentMin);
  }
  if (currentHour == 4) {
    addToNextPlay(arr[6], currentMin);
    addToNextPlay(arr[16], currentMin);
    addToNextPlay(arr[26], currentMin);
  }
  if (currentHour == 5) {
    addToNextPlay(arr[7], currentMin);
    addToNextPlay(arr[17], currentMin);
    addToNextPlay(arr[27], currentMin);
  }
  if (currentHour == 6) {
    addToNextPlay(arr[8], currentMin);
    addToNextPlay(arr[18], currentMin);
    addToNextPlay(arr[28], currentMin);
  }
  if (currentHour == 7) {
    addToNextPlay(arr[9], currentMin);
    addToNextPlay(arr[19], currentMin);
  }

  document.getElementById('next-play').innerHTML = `Next play is ${nextTimeArray}`;

  nextTimeArray = [];
}


// add to nextplay
function addToNextPlay(playMin, currentMin) { 
const num = Math.floor((Math.random() * 2) + 1);
  nextTimeArray.push(playMin);
  if (playMin == currentMin) { audioPlay(num); } 
}
