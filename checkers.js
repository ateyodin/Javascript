function main(){
   putBeeper();
   right();
   left();
   putBeeper();
   right();
   left();
   putBeeper();
   right();
}


function left(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}


function right(){
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
}
