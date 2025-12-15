//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        'nome': "juventus",
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': "inter",
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': "genoa",
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': "milan",
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': "fiorentina",
        'punti': 0,
        'falli ': 0,
    },
    {
        'nome': "Roma",
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': "lazio",
        'punti': 0,
        'falli': 0,
    },
];

const nuovoArray = []
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRandomIntInclusive(0, 50);
    squadre[i].falli = getRandomIntInclusive(0, 50);
}
console.log(squadre)

for (let i = 0; i < squadre.length; i++) {
    const squadra = {
        nome : squadre[i].nome,
        falli : squadre[i].falli 
    }
    nuovoArray.push(squadra)
}
console.log(nuovoArray)


