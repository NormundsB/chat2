const API = "https://chat2022.normundsb.repl.co/"

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');

function sutitZinu() {
    console.log('sutitZinu() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;
}

async function ieladetChataZinas() {
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

setInterval(ieladetChataZinas, 1000)
