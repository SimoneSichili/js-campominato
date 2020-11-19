/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

// #1 Generare 16 numeri casuali tra 1 e 100. I numeri non possono essere dei duplicati.
// var difficulty = parseInt(prompt("Scegli la difficoltà: 0-facile, 1-medio, 2-difficile"));

while (difficulty < 0 || difficulty > 2 || isNaN(difficulty)) {

    var difficulty = parseInt(prompt("Scegli la difficoltà: 0-facile, 1-medio, 2-difficile"));
    
    if (difficulty < 0) {
        alert("Non puoi inserire un numero minore di 0");
    } else if (difficulty > 2) {
        alert("Non puoi inserire un numero maggiore di 2");
    } else if (isNaN(difficulty)) {
        alert("Non puoi inserire una parola");
    }
}



var bombList = [];
var randomBomb = "";

while (bombList.length < 16) {

    switch (difficulty) {
        case 0:
            randomBomb = generateNumber(1, 100);
            break;
        case 1:
            randomBomb = generateNumber(1, 80);
            break;
        case 2:
            randomBomb = generateNumber(1, 50);
            break;
        default:
            randomBomb = generateNumber(1, 100);
            break;
    }

    // console.log("Numero bomba casuale:", randomBomb);
    var comparedNumber = isIncluded(randomBomb, bombList);
    
    if (comparedNumber == false) {
        bombList.push(randomBomb);
    } 

}

mySort(bombList);
console.log("Lista delle bombe:", bombList);
document.getElementById("bomb-list").innerHTML = bombList;


// #2 Chiedere all’utente (100 - 16) (84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var userList = [];
checkBomb = false;

while (userList.length < 84 && checkBomb == false) {

    //numeri generati automaticamente
    // var userNumber = generateNumber(1, 100); 

    //prompt dei numeri da scrivere
    // var userNumber = parseInt(prompt("Inserisci un numero")); 
   
    do {

        var userNumber = parseInt(prompt("Inserisci un numero")); 
        
        if (userNumber <= 0) {
            alert("Non puoi inserire un numero minore di 1");
        } else if (userNumber >= 101) {
            alert("Non puoi inserire un numero maggiore di 100");
        } else if (isNaN(userNumber)) {
            alert("Non puoi inserire una parola");
        }

    } while (userNumber <= 0 || userNumber >= 101 || isNaN(userNumber));

    var comparedUserNumber = isIncluded(userNumber, userList);

    if (comparedUserNumber == false) {
        userList.push(userNumber);
    } else if (comparedUserNumber == true) {
        alert("Hai inserito un numero già esistente");
    }
    
    for (var k = 0; k < bombList.length; k++) {
        
        if (userNumber == bombList[k]) {
            alert("Numero " + userNumber + " presente. Hai perso!");
            console.log("Numero " + userNumber + " presente. Hai perso!"); 
            document.getElementById("result").innerHTML = "Numero " + userNumber + " presente. Hai perso!";
            checkBomb = true;
        }
        
    }
    
}

mySort(userList);
console.log("Array numeri dell'utente:", userList); 
document.getElementById("user-list").innerHTML = userList;

console.log("Il tuo punteggio è:", userList.length);
document.getElementById("score").innerHTML = userList.length;


var commonElements = commonElements(userList, bombList);

if (commonElements == false) {
    alert("Hai vinto!")
    console.log("Hai vinto!"); 
    document.getElementById("result").innerHTML = "Hai vinto!";
};


// FUNCTIONS ---------------------------------------

function generateNumber(min, max) {
    // Generazione numero random (min e max inclusi)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isIncluded(nmb, array) {

    var result = false;

    for (var j = 0; j < array.length; j++) {
        
        if (nmb == array[j]) {
            result = true;
        } 

    }

    return result;

}

function commonElements(array1, array2) { 
      
    for (var i = 0; i < array1.length; i++) {     
        for (var j = 0; j < array2.length; j++) {     
            if (array1[i] === array2[j]) { 
                return true; 
            } 
        } 
    } 
    return false;  
} 

function mySort(array) {
    array.sort(function(a, b){return a - b});
  }