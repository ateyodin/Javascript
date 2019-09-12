* Welcome to the Stanford Karel IDE.
* This is a free space for you to
* write any Karel program you want.
**/
function main(){
  gotoCorner();
}


function gotoCorner(){
  move();
  turnLeft();
  moveFourTimes();
  turnRight();
  moveThreeTimes();
}

function moveFourTimes(){
  move();
  move();
  move();
  move();
}
function moveThreeTimes(){
  move();
  move();
  move();
}
