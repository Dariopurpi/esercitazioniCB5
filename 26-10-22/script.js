//---- Esercizio 1 ---

const credential = ["Dario", "Purpi", "30", "diploma"];
console.log(credential);

//---- Esercizio 2 ---

credential.splice(2, 1, "10/02/1992"); //rimuovere età e aggiungere data di nascita

//stessa funzione ma non abbreviata
/*credential.splice(2, 1);
console.log(credential);
credential.splice(2, 0, "10/02/1992");
console.log(credential);*/

//---- transormare in maiuscolo

credential[0] = credential[0].toUpperCase();
credential[1] = credential[1].toUpperCase();
console.log(credential);

//----Esercizio avanzato----

let arr = "#######";
for (let i = arr.length; i >= 0; i--) {
  arr = arr.slice(0, i);
  console.log(arr);
}
