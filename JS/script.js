// 1. Recuperiamo l'elemento HTML
const userTicketCost = document.getElementById('userTicketCost');
console.log(userTicketCost);

// 2. Prepariamo il messaggio finale per l'utente
let message = 'Il prezzo del tuo biglietto è: ';
console.log(message);

// 3. Chiediamo all'utente i chilometri da percorrere
const userKm = prompt('Quanti kilometri vuoi percorrere?');
console.log(userKm);

// 4. Creiamo una variabile per determinare il prezzo del biglietto
const ticketCost = userKm * 0.21;
console.log(ticketCost);

// 5. Chiediamo l'età
const userAge = prompt('Quanti anni hai?');
console.log(userAge);
