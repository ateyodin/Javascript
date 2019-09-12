var girl = prompt ("Name of the Girl");
var boy = prompt ("Name of the boy");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n >= "50"){
    alert("According to the love calculator " + girl + " and " + boy + " have a match of " + n + "% of love, you rock!")
} else {
    alert("According to the love calculator " + girl + " and " + boy + " have a match of " + n + "% of love, that sucks!")
}

// && = and
// || = or
// ! = not

// if (n >= 70){
//     alert("According to the love calculator " + girl + " and " + boy + " have a match of " + n + "% of love, you rock!")
// }
// if (n >= 30 && n < 70){
//     alert("According to the love calculator " + girl + " and " + boy + " have a match of " + n + "% of love, you could do better!")
// }
// if (n < 30 ){
