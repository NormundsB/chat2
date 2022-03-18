const API = "https://chat2022.normundsb.repl.co"

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');
let vards = document.querySelector('.vards');


function sutitZinu() {
    console.log('sutitZinu() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;

    fetch(API + '/sutit/' + vards.value + '/' + zina.value)
}

async function ieladetChataZinas() {
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

//setInterval( ieladetChataZinas, 1000 )

async function ieladetChataZinasJson() {
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.json();

    //console.log(await dati[0]["zina"])

    i = 0;
    while (i < await dati.length) {
        console.log(i);
        i = i + 1;
    }
}// šeit beidzas 