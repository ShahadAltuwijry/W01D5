/*Declare three variables called "num1", "num2" and "num3".
 Assign each variable a number value.*/

let num1 = 21;
let num2 = 17;
let num3 = 14;

/*now write a conditional statement that
 compares "num1" and "num2" and displays the larger value. */
if (num1 < num2) {
  console.log("num1 is the larger value:" + num2);
} else {
  console.log("num1 is the larger value:" + num1);
}

/*write a conditional statement that determines 
whether "num1" is an odd or even number */
if (num1 % 2) {
  console.log("num1 is an odd number");
} else {
  console.log("num1 is not an odd number");
}

/*to sort the three numbers from largest to smallest */

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
}

if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
}

if (num3 > num1 && num3 > num2) {
  if (num1 > num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

/* while display 0-20 */

let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}

let amount;

/*enter a positive  number if not enter a number*/

if (amount < 0) {
  console.log("please enter a positive number");
} else if (amount != Number) {
  console.log("please enter a number");
}

/*  */
let username = "shAltuwijry";
let password = "12345678";

if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed");
}

// for loop 20 - 0

for (let index = 20; index >= 0; index--) {
  console.log(index);
}

//to show even numbers from 1 - 20

for (let index1 = 1; index1 < 20; index1++) {
  if (index1 % 2 === 0) {
    console.log(index1);
  }
}

// printing vars from 6 - 18

let startRange = 6;
let endRange = 18;

do {
  console.log(startRange);
  startRange++;
} while (startRange <= endRange);

// creating a loop that will produce a specific output

for (let star = "*"; star.length < 6; star += "*") {
  console.log(star);
}

/* do {
  console.log(stars);
  console.log(stars + star);
} while (stars.length == 6);
//didnt work, I'll try later */
