// // Follow along with the examples here
// function doNothing() {}

// function sayHello() {
//     console.log("Hello!");
// }

// sayHello();

// function sayHelloToGuadalupe() {
//     console.log("Hello, Guadalupe!");
// }

// sayHelloToGuadalupe();

// function sayHelloToLiz() {
//     console.log("Hello, Liz!");
// }

// function sayHelloToSamip() {
//     console.log("Hello, Samip!");
// }

// sayHelloToGuadalupe();
// sayHelloToLiz();
// sayHelloToSamip();


// function doSomething(thing){
//     console.log(thing);
// }

// doSomething("anything"); // passing the argument 'anything' into our function

// function sayHelloTo(firstName){
//     console.log(`Hello, ${firstName}!`);
// }

// sayHelloTo("Guadalupe");
// sayHelloTo("Jane");
// sayHelloTo("R2-D2");
// sayHelloTo(1);

// // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"


// function example(parameter){ //a parameter is a place holder for whatever value gets passed in as an argument
//     console.log(parameter);
// }

// example("argument"); //the argument is what gets passed into the function in place of the parameter

// //"A"rgument = "A"ctual value
// //"P"arameter = "P"laceholder

// function say(greeting, firstName){
//     console.log(`${greeting}, ${firstName}!`);
// }

// say("Goodbye", "Julio");
// say("Julio", "hello");

// function sayTest(greeting, firstName){
//     console.log("firstName: ", firstName);
//     console.log("greeting: ", greeting);
//     console.log(`${greeting}, ${firstName}!`);
// }

// sayTest("Oh hello der", "Fren")

// function add(x,y){
//     return x + y;
// }

// console.log(add(54,32))

// function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`;
// }

// function say(greeting, firstName){
//     console.log(`${greeting}, ${firstName}!`);
// }

// console.log(say("Hello", "Liz"));

// function say(greeting, firstName) {
//     return `${greeting}, ${firstName}!`; //return ends the execution inside the function. Nothing after the line with the return will be executed.
//     console.log("I was called!");
//   }

//   console.log(say("Howdy", "partner"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Howdy", "partner"));