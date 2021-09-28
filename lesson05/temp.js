// for (let i = 0; i < 1000; i++) {
//     console.log(i);
// }


// for (let i = 0; i < 10; ++i) { //does the same thing as the above for loop but only 10 times instead of 1000
//     console.log(i);
// }

let x = 5;
let y = 5 + x++;
alert(y); //gives a popup box with the value of y

// let x = 1;

// x += 1;
// x++;
// x = x + 1; //all of the above ways to increment do the same thing


let numbers = [1, 2, 345, 4, 123, 15, 23, 14, 12, 123456]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (n of numbers) { //does the same thing as the above loop but more efficiently
    console.log(n);
}

