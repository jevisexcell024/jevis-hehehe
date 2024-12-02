// function multiply(num1,num2) {
//     solution = num1 * num2;
//     return solution
// }
// console.log(multiply(5,6));



// or 

// function multiply(num1,num2) {
//   return  num1 * num2;

// }
// console.log(multiply(5,6));



// if statement 

// let age = 12

// if(age >= 12){
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }




// let dti = "is dti a best school"

// if (dti === "is dti a best school") {
//     console.log(" Dti is the best school" );
// }
// else{
//     console.log("no it is not a best school" );

// }


// let grade = 80
// if (grade >=80) {
//     console.log("congratulations you have passed with grade A");
// }
// else{
//     console.log("sorry you have to resit for this examination1")
// }



// let time = 10

// if (time < 3){
//     console.log("class starts soon");
// }
// else if(time === 0)

// {
//     console.log("not now")
// }
// else(   
//     console.log("go home")
// )



// let name = "jason"

// while (name = "jason") {
//     console.log(name)
// }


// let z = 10
// while (z < 20) {
//     console.log("below 10")
// }

// let i = 0

// for(i = 0, i < 10 , i++){

// }
// let b = 11


// for loop

// let  z = 0
// for ( z = 0; z < 20; z++) {
//     console.log(z)
// }

// for (let index = 0; index < array.length; index++) {
// const element = array[index];

// }


//  let z  = 5
//  do {
//     console.log(z)
//     z++
//  } while ( z <= 50);

// console.log(z)


// do{
//     console.log(b);
//     b++
// }
// while(b <= 5);



// let j = 1

// for (let j = 1; j <=100; j++) {

// let stat ="";


// if (j % 3 ==0){
//     stat += "Fizz"
// }

// if(j % 5 ==0){
//     stat ="Buzz"
// }

// if(stat =="" ) stat = j;
// console.log(stat)


// console.log()
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5===0){
//         console.log("fizzbuzz");
//     }
//      if (i % 3 === 0){
//         console.log("fizz");
//     }
//     else if (i % 5 === 0){
//         console.log("buzz");
// }

// console.log(i)
// }


// var fizz = 'Fizz';
// var buzz = 'Buzz';

// var fizzbuzz5 = function(j) {
// if(j % 5 === 0) {
// console.log(fizz + buzz);
// }
// else {
// console.log(fizz);
// }};

// var fizzbuzz3 = function(k) {
// if(k % 3 === 0) {
// console.log(fizz + buzz);
// }
// else {
// console.log(buzz);
// };

// };
// for(i=1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
// }


// research



// for (var index = 1; index <= 100; index++) {
//     switch (true) {
//         case (index % 3 === 0 && index % 5 === 0):
//             console.log('FizzBuzz');
//             break;

//         case (index % 3 === 0):
//             console.log('Fizz');
//             break;

//         case (index % 5 === 0):
//             console.log('Buzz');
//             break;

//         default:
//             console.log(index);
//             break;
//     }
// }

// ends here 

for (var i=1; i <= 100; i++) {
    var a = i, b = '';
    if (i % 3 == 0){
      a = '';
      b += "Fizz"
    }
    if (i % 5 == 0){
      a = '';
      b += "Buzz"
    }
    console.log(a+b);
  }