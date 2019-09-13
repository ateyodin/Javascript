function getMilk(money, cost) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + howManyBottles(money,cost) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,cost);
}


function howManyBottles(amountOfMoney, valueOfBottle){
    var numberOfBottles = Math.floor(amountOfMoney/valueOfBottle);
    return numberOfBottles;
}

function calcChange(startingMoney, value){
    var change = (startingMoney%value)
    return change;
}

console.log("Hello Master, here is your " + getMilk(5,2) + " change") ;
