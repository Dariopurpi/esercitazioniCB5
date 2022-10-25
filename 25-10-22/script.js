let firstNum = prompt("inserisci primo numero");
let mathSign = prompt("inserisci simbolo matematico (es. + - * / )");
let secondNum = prompt("inserisci secondo numero");

let firstNumParse = parseInt(firstNum);
let secondNumParse = parseInt(secondNum);

if (mathSign == "+") {
  console.log(firstNumParse + secondNumParse);
} else if (mathSign == "*") {
  console.log(firstNumParse * secondNumParse);
} else if (mathSign == "/") {
  console.log(firstNumParse / secondNumParse);
} else {
  console.log(firstNumParse - secondNumParse);
}
