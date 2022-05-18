const prezzoKm = 0.21;
let sconto20 
let sconto40

const messaggioEtaErrata = "L'èta inserita non è valida, inserire un numero";
const messaggioKmErrati = "La tratta inserita non è valida, inserire un numero";
const messagioInserisciDato = "Valore non dichiarato";

let eta;
let km;
let prezzo;



for (eta = prompt("inserisci eta");(eta < 0) || (isNaN(eta)) || (eta === " ");){
    alert(messagioInserisciDato);
    eta = prompt("inserisci eta");
    
}  
for (km = prompt("Inserire i km da percorrere"); (km < 0) || (isNaN(km)) || (km === " "); ) {
    alert(messaggioKmErrati);
    km = prompt("Inserire i km da percorrere");
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
    spanKm.innerHTML = km + " km"
}

const spanPrezzo = document.getElementById('span-prezzo');


spanPrezzo.innerHTML = prezzo.toFixed(2) + " €";





console.log(eta + "eta")
console.log(prezzoKm + "km")
console.log("prezzo" + prezzo)