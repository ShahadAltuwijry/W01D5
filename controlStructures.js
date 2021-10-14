let num1 = 21;
let num2 = 17;
let num3 = 14;

if (num1 < num2) {
  console.log("num1 is the larger value:" + num2);
} else {
  console.log("num1 is the larger value:" + num1);
}

if (num1 % 2) {
  console.log("num1 is an odd number");
} else {
  console.log("num1 is not an odd number");
}

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

let i = 0;

do {
  console.log(i);
  i++;
} while (i <= 20);

let amount;

if (amount < 0) {
  console.log("please enter a positive number");
} else if (amount != Number) {
  console.log("please enter a number");
}

let username = "shAltuwijry";
let password = "12345678";

if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed");
}

for (let index = 0; index <= 20; index++) {
  console.log(index);
}

//to show even numbers from 1 - 20

for (let index1 = 1; index1 < 20; index1++) {
  if (index1 % 2 === 0) {
    console.log(index1);
  }
}
