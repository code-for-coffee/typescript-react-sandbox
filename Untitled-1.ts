function add(x: number, y: number) {
    return x + y;
}

let x: string = "hello";
const y: number = 42;

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. 
    I'll be ${ age + 1 } years old next month.`;

let list: number[] = [1, 2, 3];
let newList: Array<number> = [1, 2, 3];

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// tuple
// Declare a tuple type
let xan: [string, number];
// Initialize it
xan = ["hello", 10]; // OK
console.log(x[0].substr(1)); // OK

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;

// 'any' (Avoid using any but it exists???)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let listTwo: any[] = [1, true, "free"];

list[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = null;

let u: undefined = undefined;
let n: null = null;

// Type assertions are a way to tell the compiler "trust me, I know what I'm doing."
let someValue: any = "this is a string";
//let strLength: number = (<string>list).length;
// jsx friendly
let strLength: number = (someValue as string).length;

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

class Zen {
    name: string;
    constructor(message: string) {
        this.name = message;
    }
    greet() {
        return "Be calm, " + this.name;
    }
}

let greeter = new Zen("Brian");