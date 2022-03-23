
// Zad_1

// sum(1, 2); // 3

//Funkcja for loop
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

//Funkcja strzałkowa
const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;


//Zad_2

divide(10, 7, 3); // 1.429
divide(10, 7); // 1.4285714285714286

function divide(a, b, c) {
    return Number((a / b).toFixed(c));
}


//Zad_3 - Problem

const fruits = [
    {
        name: 'banana',
        color: 'yellow'
    },
    {
        name: 'lemon',
        color: 'yellow'
    },
    {
        name: 'apple',
        color: 'red'
    }
]

// const yellowFruitNames = …
// // [‘banana’, ‘lemon’]

//Normalna Funkcja
function returnYellowFruit(fruitArray) {
    const yellowFruit=[]

    for (let i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i].color === 'yellow')
            yellowFruit.push(fruitArray[i].name);
    }
    return yellowFruit;
}

//Funkcja Strzałkowa - Nie wiem jak sprecyzować by wyświetlało tylko nazwy
const yellowFruit = fruits.filter(fruit => fruit.color === 'yellow');


//Zad_4

// Filter the numbers to get an array of odd numbers. Use an arrow function.
const numbers = [1, -3, 20, -29, 31, -4, -37, 47, 50, 71];
// const oddNumbers = ...
// // [1, -3, -29, 31, -37, 47, 71]

//Normalna funkcja
function oddNumbers(array) {
    const oddNumbers = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0)
            oddNumbers.push(array[i]);
    }
    return oddNumbers;
}


//Funkcja strzałkowa
const oddNumbers = numbers.filter(number => number % 2 != 0);




//Zad_5

// Write the filter function in two versions:
//     - one using the for loop
//     - one using the forEach function built into JavaScript (use an arrow function)



const people = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Amanda',
        age: 15
    }
]

//Funkcja for loop
function filter(array) {
    const teenagers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].age > 10 && array[i].age < 20) {
            teenagers.push(array[i]);
        }
    }
    return  teenagers
}

//Funkcja strzałkowa
const teenagers = people.filter(name => name.age > 10 && name.age < 20);



//Funkcja z forEach --- jeszcze nie działa
const teenagers = filter(people, (person) => {
    return person.age > 10 && person.age < 20;
})


const items = ['item1', 'item2', 'item3'];
const teenagersArray = []

people.forEach((item) => {
    teenagersArray.push(item);
});



