function main(){
   putBeeper();
   beeperGo();
}


function beeperGo(){
   goThere();
   goThere();
   goThere();
   goThere();
}


function goThere(){
   turnLeft();
   move();
   turnRight();
   move();
   putBeeper();
}
