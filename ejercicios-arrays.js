// EJERCICIO 1

let biggestNumber = 0;
let numbers = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
    };
};

console.log("El número más grande es " + biggestNumber);

// EJERCICIO 2

let numbers2 = [4, 8, 15, 16, 23, 420, 9, 37, 24, 54]
let count = numbers2.length;
numbers2 = numbers2.reduce((previous, current) => current += previous);
numbers2 /= count;
console.log(numbers2);

// EJERCICIO 3

let numbers3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numbers3.length-1; i++) {
    numbers3[i-1] = 0;
    numbers3[i]= 1;
    console.log(numbers3);
    
}; // En este ejercicio evidentemente hice algo mal,
//porque me sobra un número negativo (asumo que el problema
//está en las líneas 25 y/o 16).

// EJERCICIO 4

let lechuga = 0;
let tomate = 0;
let zanahoria = 0;

let vegetables = [lechuga, zanahoria, lechuga, tomate, lechuga, zanahoria, tomate, zanahoria, tomate, lechuga, lechuga, tomate, zanahoria, tomate, zanahoria, lechuga, zanahoria, tomate, lechuga, lechuga];


for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i] = lechuga) {
        lechuga++;
    } else if (vegetables[i] = tomate) {
        tomate++;
    } else if (vegetables[i] = zanahoria) {
        zanahoria++;
    };
};

let vegetablesCounter = (lechuga, tomate, zanahoria) => {
    if(lechuga > tomate && lechuga > zanahoria) {
        console.log("Hay más cantidad de lechuga");
    } else if (tomate > lechuga && tomate > zanahoria) {
        console.log("Hay más cantidad de tomate");
    } else if (zanahoria > lechuga && zanahoria > tomate) {
        console.log("Hay más cantidad de zanahoria");
    };
    
};

vegetablesCounter();
// por alguna razón este ejercicio no aparece en consola





// EJERCICIO 5

let numbers5 = [0, 4, 2, 4, 0, 2, 0, 6, 1, 9, 7, 3, 5, 10, 7, 9, 2, 8, 1, 9];
let romanNumbers = [null];
function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

for (let i = 0; i < numbers5.length; i++) {
   romanNumbers[i] = romanize(numbers5[i]); 
};
console.log(romanNumbers);

// EJERCICIO 6

let numbers6 = [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0];

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] = 0) {
        numbers6[i] = numbers[i-1];
    } else {
        numbers[i] = numbers[i];
    }
};

console.log(numbers6);

// EJERCICIO 7

let users = [
    ["Federico", 24, "Argentina", "false"],
    ["Agustina", 22, "Argentina", "true"],
    ["Ignacio", 24, "Argentina", "true"],
    ["Alan", 15, "Argentina", "false"],
    ["Alicia", 52, "Argentina", "true"],
    ["Bruno", 26, "Perú", "true"],
    ["Mercedes", 22, "Argentina", "false"],
    ["Álvaro", 23, "Argentina", "true"],
    ["Ramiro", 25, "Inglaterra", "true"],
    ["Sofía", 18, "Argentina", "false"]
];

for (let i = 0; i < users.length; i++) {
    if (users[i][1] = "Argentina") {
      
        console.log("Bienvenido al sitio " + users[i][0]);
    };
};

// EJERCICIO 8

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let player1 = ["piedra", "papel", "papel", "piedra", "tijera", "piedra", "papel", "tijera", "piedra", "tijera"];
let player2 = ["tijera", "tijera", "piedra", "papel", "piedra", "tijera", "piedra", "papel", "tijera", "papel"];

for (let i = 0; i < users.length; i++) {
    if (player1[i] === "papel") {
        if (player2[i] === "piedra") {
            console.log("El jugador 1 ganó")
            scorePlayer1++;
        } else {
            if (player2[i] === "tijera") {
                console.log("El jugador 2 ganó")
                scorePlayer2++;
            }
        };
    };
    if (player1[i] === "tijera") {
        if (player2[i] === "piedra") {
            console.log("El jugador 2 ganó")
            scorePlayer2++;
            } else {
                if (player2[i] === "papel") {
                    console.log("El jugador 1 ganó")
                    scorePlayer1++;
                }
            }
        };
     if (player1[i] === "piedra") {
        if ((player2[i]) === "tijera") {
            console.log("El jugador 1 ganó")
            scorePlayer1++;
            } else {
                if (player2[i] === "papel") {
                    console.log("El jugador 2 ganó")
                    scorePlayer2++;
                }
            }
        };
};
    



// EJERCICIO 9

let x = 0;
let y = 0;

let coordinates = ["N", "S", "E", "O", "NE", "SE", "NO", "SO", "SE","NO","SO","NO","E","S","S","O","NO","SE","E","O","O"];

for (let i = 0; i < coordinates.length; i++) {
    switch(coordinates[i]) {
            case "N":
                y = y + 1;
                break;
            case "S":
                y = y - 1;
                break;
            case "E":
                x = x + 1;
                break;
            case "O":
                x = x - 1;
                break;
            case "NE":
                x = x + 1;
                y = y + 1;
                break;
            case "SE":
                x = x + 1;
                y = y - 1;
                break;
            case "NO":
                y = y + 1;
                x = x - 1;
                break;
            case "SO":
                y = y - 1;
                x = x - 1;
                break;
        };
    };


console.log("Las coordenadas de la posición final son " + x + ", " + y);

//coso
