//Conditional Statements and Loops

//Excersice 1: Temperature check

let temp = prompt("What is the temperature: ");

if (temp < 0) {
  console.log("It's freezing!");
} else if (0 < temp < 15) {
  console.log(" It's mild");
} else if (16 < temp < 25) {
  console.log("It's mild");
} else {
  console.log("It's warm");
}

///Exercise 2: Divisibility check
let Num = prompt("Enter number to compare: ");

if (Num % 2 && Num % 3 == 0) {
  console.log(Num, "Divisible by both");
} else if (Num % 2 == 0 && Num % 3 != 0) {
  console.log(Num, "Divisible by 2");
} else if (Num % 3 == 0 && Num % 2 != 0) {
  console.log(Num, "Divisible by 3");
} else console.log(Num, "Not divisible by 2 or 3");

//Excersice 3: For loops
//1
for (let i = 1; i < 11; i++) {  //printing numbers 1-10
  console.log(i);
}
//2
for (let m = 1; m < 21; m++) { // output numbers divisible by 2
  if (m % 2 == 0) {
    console.log(m);
  }
}
//3
let summ = 0;
for (let z = 1; z < 101; z++) { // summ all numbers from 1-100
  summ += z;
}
console.log(summ);

//4
const numbers = [1, 2, 3, 4, 5];
let num11 = numbers[0];
console.log(num11);
let num22 = numbers[1];
console.log(num22);
let num33 = numbers[2];
console.log(num33);
let num44 = numbers[3];
console.log(num44);
let num55 = numbers[4];
console.log(num55);

// 5
const numbers1 = [3, 7, 72, 5, 10, 6];
let largnum = numbers1[0];
for (let r = 1; r < numbers1.length; r++) { // Find the largest number on array
  if (largnum < numbers1[r]) {
    largnum = numbers1[r];
  }
}
console.log(largnum);
//Exercise 4

//1
let s = 1;
while (s < 11) { //print numbers 1-10
  console.log(s); 
  s++;
}
//2
let u = 0;
while (u < 21) { // print numbers divisible by 2
  if (u % 2 == 0) {
    console.log(u);
  }
  u++;
}
//3
let d = 1;
let sum2 = 0;
while (d < 101) { // sum numbers from 1-100
  sum2 += d;
  d++;
}
console.log(sum2);
//4
let mul50 = 0;
while (mul50 <= 50) {  // find multiples of 50
  if (50 % mul50 == 0) {
    console.log(mul50);
  }
  mul50++;
}
//Excersise 5: Do while loops
let q = 1; // q as a placeholder number for printed values
do {
  console.log(q);
  q++;
} while (q <= 10);
//2
let sum1 = 0; //sum value
let NumSum = 1; // summed numbers placeholder
do {
  sum += NumSum;
  NumSum++;
} while (NumSum <= 100);
console.log(sum1);
//3
let UserNo;
do {
  UserNo = prompt("Enter a number greater 10: "); 
} while (UserNo < 10);                      // run until user inputs number > 10
console.log("You entered valid no", UserNo);
//4
let Guess = 7;
do {
  Input = prompt("Guess a number between 1 and 10: ");
} while (Guess != Input);                         // run until user guesses number given
console.log("Your guess: ", Guess, "is correct");
