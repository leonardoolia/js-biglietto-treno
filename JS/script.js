// 1. Recuperiamo l'elemento HTML
const userTicketCost = document.getElementById('userTicketCost');
console.log(userTicketCost);

// 2. Prepariamo il messaggio finale per l'utente
let message = 'Il prezzo del tuo biglietto è: ';
console.log(message);

// 3. Chiediamo all'utente i chilometri da percorrere
const userKm = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
console.log(userKm);

// 4. Creiamo una variabile per determinare il prezzo del biglietto
const ticketCost = userKm * 0.21;
console.log(ticketCost);

// 5. Chiediamo l'età
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// 6. Verifichiamo se l'utente è minorenne o over 65 e applichiamo sconti
let minorDiscount;
let overDiscount;

let finalTicketCost

if (userAge < 18) {
    minorDiscount = ticketCost * 20 / 100;
    finalTicketCost = ticketCost - minorDiscount;
};

if (userAge > 65) {
    overDiscount = ticketCost * 40 / 100;
    finalTicketCost = ticketCost - overDiscount;
};

console.log(finalTicketCost.toFixed(2));

// 7. Scriviamo prezzo finale all'utente
userTicketCost.innerHTML = `Il prezzo del tuo biglietto è di: <strong> ${finalTicketCost.toFixed(2)} euro </strong>`;




