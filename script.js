//Snack 1
//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bici = [
    {
        'nome': "bici numero 1",
        'peso': 15,
    },
    {
        'nome': "bici numero 2",
        'peso': 20,
    },
    {
        'nome': "bici numero 3",
        'peso': 30,
    },
    {
        'nome': "bici numero 4",
        'peso': 10,
    },
    {
        'nome': "bici numero 5",
        'peso': 25,
    },

];


let biciLeggera = bici [0]

for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i]
    }
}
console.log(biciLeggera)
//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.