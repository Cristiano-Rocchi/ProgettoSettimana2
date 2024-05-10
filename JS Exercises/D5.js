/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
/* for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}  */

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
/* const ordinPets = pets.sort(); */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/* const invertPets = pets.reverse(); */
/* console.log(invertPets);
 */
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/* const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets); */

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let index = 0; index < cars.length; index++) {
  const firstObject = cars[0];
  const secondObject = cars[1];
  const thirdObject = cars[2];
  firstObject.licensePlate = "KK344";
  secondObject.licensePlate = "Ef555";
  thirdObject.licensePlate = "AC1312";
}
/* console.log(cars); */
/* console.log(cars); */
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newObject = {
  brand: "Fiat",
  model: "600",
  color: "Blue",
  licensePlate: "AA123",
  trims: ["punctured", "smooth"],
};
cars.push(newObject);

for (let index = 0; index < cars.length; index++) {
  delete cars[0].trims[2];
  delete cars[1].trims[1];
  delete cars[2].trims[2];
  delete cars[3].trims[1];
}
/* console.log(cars);
 */
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  const firsTrimsElement = cars[index].trims[0];

  justTrims.push(firsTrimsElement);
}
/* console.log(justTrims); */

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let index = 0; index < cars.length; index++) {
  if (cars[index].color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let index = 0;
while (numericArray[index] !== 32 && index < numericArray.length) {
  console.log(numericArray[index]);
  index = index + 1;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
