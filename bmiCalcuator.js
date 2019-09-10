function bmiCalculator(weight, height){
    var bmi = amount(weight, height);

        if (bmi < 18.5){
        alert(" Your BMI is " + bmi + ", so you are underweight");
    }
    if (bmi >= 18.5 && bmi <= 24.9){
        alert(" Your BMI is " + bmi + ", so you have a normal weight");
    }
    if (bmi > 24.9){
        alert(" Your BMI is " + bmi + ", so you are overweight");
    }
}

function amount(weightOfGuy, heightOfGuy){
    var value = Math.round((weightOfGuy/Math.pow(heightOfGuy,2)));
    return value;
}

bmiCalculator(62, 2);
