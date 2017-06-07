'use strict';

var floor = 0;
var eggs = 2;
var attempts = 0;
var brokenEgg = false;

function pickRandomFloor(){
  floor = Math.floor(Math.random() * 100);
  console.log('Correct Floor: ', floor);
}

function eggDrop(dropfloor){
  attempts++;
  if(dropfloor <= floor){
    console.log('Egg didn\'t break on floor: ', dropfloor);
  } else if (dropfloor > floor) {
    eggs -= 1;
    brokenEgg = true;
    console.log('Your egg broke on floor: ', dropfloor);
  } else {
    console.log('Error');
  }
}

function eggTest(interval){
  eggDrop(interval);
  var newInterval = interval;
  while(eggs > 0 && newInterval >= 0){
    if(brokenEgg === false){
      newInterval += interval;
      eggDrop(newInterval);
    } else {
      newInterval -= interval;
      while(eggs > 0 && newInterval >= 0){
        newInterval += 1;
        eggDrop(newInterval);
      }
      newInterval -= 1;
      console.log('Correct Floor: ', newInterval);
      console.log('Total Attempts: ', attempts);
      break;
    }
  }
}

pickRandomFloor();
eggTest(10);
