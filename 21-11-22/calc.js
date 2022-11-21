/* esercitazione base*/
/*const argvs = process.argv;
const argv = argvs.slice(2);
const operator = argv[0];
const num1 = parseFloat(argv[1]);
const num2 = parseFloat(argv[2]);

if (operator === "somma") {
  console.log("La " + operator + " è: " + (num1 + num2));
}
if (operator === "sottrazione") {
  console.log("La " + operator + " è: " + (num1 - num2));
}
if (operator === "divisione") {
  if (num2 == 0) {
    console.log("Errore");
  } else {
    console.log("La " + operator + " è: " + num1 / num2);
  }
}
if (operator === "moltiplicazione") {
  console.log("La " + operator + " è: " + num1 * num2);
}*/

/*esercitazione avanzata*/
const argvs = process.argv;
const argv = argvs.slice(2);
const operator = argv[0];
const num1 = parseFloat(argv[1]);
const num2 = parseFloat(argv[2]);

const array = [...argv];
let sum = 0;
let sub = 0;
molt = 1;
div = 1;
if (operator == "somma") {
  for (let i = 1; i < array.length; i++) {
    sum += parseInt(array[i]);
  }
  console.log(sum);
} else if (operator == "sottrazione") {
  for (let i = 1; i < array.length; i++) {
    sub = argv[1] - array[i];
  }
  console.log(sub);
} else if (operator == "moltiplicazione") {
  for (let i = 1; i < array.length; i++) {
    molt = molt * array[i];
  }

  console.log(molt);
} else {
  if (operator == "divisione" && num2 != 0) {
    for (let i = 1; i < array.length; i++) {
      div = array[1] / array[2];
    }

    console.log(div);
  } else {
    console.log("error, non puoi dividere per 0");
  }
}
