function bmiCalculator(weight, height){
    var bmi = amount(weight, height);
    alert(bmi);
}

function amount(weightOfGuy, heightOfGuy){
    var value = Math.round((weightOfGuy/Math.pow(heightOfGuy,2)));
    return value;
}

bmiCalculator(65, 1.8);

console.log("the bmi of the guy is " + amount(weight, height) + " nice!");


// function bmiCalculator(weight, height){
//     var value = Math.floor((weight/(height*height)));
//     return value;
// }
//
//
//
// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
//
// var bmi = bmiCalculator(65, 1.8);
//
// bmi should equal around 20 in this case.
//
// */
// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);
