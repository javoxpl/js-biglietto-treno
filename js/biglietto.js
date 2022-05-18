/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indical
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inseritè, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo:24,50


BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/



const prezzoKm = 0.21;
let sconto20 
let sconto40

const messaggioEtaErrata = "L'èta inserita non è valida, inserire un numero";
const messaggioKmErrati = "La tratta inserita non è valida, inserire un numero";
const messagioInserisciDato = "Valore non dichiarato";

let eta;
let km;
let prezzo;

eta = prompt("Inserisci l'età del viaggiatore");

if ((eta < 0) || (isNaN(eta)) || (eta === " ")){
    alert(messagioInserisciDato);
    eta = messagioInserisciDato;
}

km = prompt("Inserire i km da percorrere");

if ((km < 0) || (isNaN(km)) || (km === " ")) {
    alert(messaggioKmErrati)
    km = messagioInserisciDato;
}

 prezzo = prezzoKm * km;

if (eta <= 18) {
    sconto20 = (prezzo * 20) / 100;
    prezzo = prezzo - sconto20
} else if (eta >= 65){
        sconto40 = (prezzo * 40) / 100;
        prezzo = prezzo - sconto40
} else {
    prezzo = prezzo
}



const spanEtaUtente = document.getElementById('span-eta-utente');

if (eta === messagioInserisciDato){
    spanEtaUtente.innerHTML = eta
} else {
    spanEtaUtente.innerHTML = eta + " anni"
}

const spanKm = document.getElementById('span-km');

if (prezzoKm === messagioInserisciDato){
    spanKm.innerHTML = prezzoKm
} else {
    spanKm.innerHTML = prezzoKm + " km"
}

const spanPrezzo = document.getElementById('span-prezzo');

if (eta === messagioInserisciDato || prezzoKm === messagioInserisciDato){
    spanPrezzo.innerHTML = "Impossibile calcolare il prezzo"
} else {
    spanPrezzo.innerHTML = prezzo.toFixed(2) + " €";
}




console.log(eta + "eta")
console.log(prezzoKm + "km")
console.log("prezzo" + prezzo)