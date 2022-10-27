//------ Esercizio 1 ------
/*let firstNum = prompt("inserisci primo numero");
let mathSign = prompt("inserisci simbolo matematico (es. + - * / )");
let secondNum = prompt("inserisci secondo numero");

let firstNumFloat = parseFloat(firstNum);
let secondNumFloat = parseFloat(secondNum);

function calculator(num1, num2) {
  if (mathSign == "+") {
    let result = num1 + num2;
    return result;
  } else if (mathSign == "-") {
    let result = num1 - num2;
    return result;
  } else if (mathSign == "*") {
    let result = num1 * num2;
    return result;
  } else {
    let result = num1 / num2;
    return result;
  }
}
prompt(calculator(firstNumFloat, secondNumFloat));*/

//------ Esercizio 2 ------

const myHero = {
  nome: "clark",
  cognome: "kent",
  nickname: "superman",
  pianeta: "krypton",
  infoInutile: 0,
  segniParticolari: {
    0: "ciuffo",
    1: "occhiali",
    2: "cambio abiti veloce",
  },
};

console.log(myHero.cognome);
console.log(myHero.segniParticolari);
console.log(Object.keys(myHero));
console.log(Object.values(myHero));
console.log(myHero.segniParticolari[1]);
delete myHero.infoInutile;
console.log(myHero);

//------ esercizio avanzato ------

//cicli

/*let input = [10, 2];
segno = "/";
const array = [...input];
let sum = 0;
let sub = 0;
molt = 1;
div = 1;
if (segno == "+") {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
} else if (segno == "-") {
  for (let i = 1; i < array.length; i++) {
    sub += -array[i];
  }
  sub = sub + array[0];
  console.log(sub);
} else if (segno == "*") {
  for (let i = 0; i < array.length; i++) {
    molt = molt * array[i];
  }

  console.log(molt);
} else if (segno == "/") {
  for (let i = 1; i < array.length; i++) {
    div = array[0] / array[1];
  }

  console.log(div);
}*/

//funzione
function calculator(input, segno) {
  const array = [...input];
  let sum = 0;
  let sub = 0;
  molt = 1;
  div = 1;
  if (segno == "+") {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } else if (segno == "-") {
    for (let i = 1; i < array.length; i++) {
      sub += -array[i];
    }
    sub = sub + array[0];
    return sub;
  } else if (segno == "*") {
    for (let i = 0; i < array.length; i++) {
      molt = molt * array[i];
    }

    return molt;
  } else if (segno == "/") {
    for (let i = 1; i < array.length; i++) {
      div = array[0] / array[1];
    }

    return div;
  }
}

console.log(calculator([15, 2], "/"));

alert(calculator([18, 2], "/"));
