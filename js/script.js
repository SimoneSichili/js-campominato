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
var bombList = [];

while (bombList.length < 16) {

    var randomBomb = generateNumber(1, 100);
    // console.log("Numero bomba casuale:", randomBomb);
    var comparedNumber = isIncluded(randomBomb, bombList);
    
    if (comparedNumber == false) {
        bombList.push(randomBomb);
    } 

}

console.log("Array delle bombe:", bombList);


// #2 Chiedere all’utente (100 - 16) (84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var userList = [].sort();
checkBomb = false;

while (userList.length < 84 && checkBomb == false) {

    //numeri generati automaticamente
    // var randomUserNumber = generateNumber(1, 100); 

    //prompt dei numeri da scrivere
    var randomUserNumber = parseInt(prompt("Inserisci un numero")); 
    // console.log("Numero utente casuale:", randomUserNumber);

    var comparedUserNumber = isIncluded(randomUserNumber, userList);

    if (comparedUserNumber == false) {
        userList.push(randomUserNumber);
    } else if (comparedUserNumber == true) {
        alert("Hai inserito un numero già esistente");
    }
    
    for (var k = 0; k < bombList.length; k++) {
        
        if (randomUserNumber == bombList[k]) {
            alert("Numero presente. Hai perso!");
            checkBomb = true;
        }
        
    }
    
}

console.log("Array numeri dell'utente:", userList); 

var commonElements = commonElements(userList, bombList);

if (commonElements == false) {
    alert("Hai vinto!")
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
