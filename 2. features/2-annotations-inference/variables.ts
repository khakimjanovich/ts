const apples: number = 4;
let speed: string = 'fast';
let hasName: boolean = false;
let nothing: null = null;
let nothingMuch: undefined = undefined;

//built in objects
let now: Date = new Date;

// array
let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [1, 4, 0.123, -232]
let truths: boolean[] = [false, true, undefined, null]

//classes
class Car {
}

let car: Car = new Car()

// object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 10,
}

// here we are annotation a variable declaration
//Function
const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

//when to use 2-annotations-inference
// 1) Function that returns the 'any' type
const json = '{"x":10,"y":10}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)

// 2) when we declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) variable whose type cannot be inferred correctly
let my_numbers = [10, 20, -30];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < my_numbers.length; i++) {
    if (my_numbers[i] > 30) {
        numberAboveZero = my_numbers[i];
    }
}