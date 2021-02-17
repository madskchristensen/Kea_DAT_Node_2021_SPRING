// create a function called myFirstFunction which returns a greeting
function myFirstFunction() {

    return "Hello there!";
}

console.log(myFirstFunction());


// anonymous function
const myVariableFunction = function () {
    console.log("Hello from the anonymous function");
}

// a type of lambda
const myArrowFunction = () => {
    console.log("Hello from the anonymous function which is also an arrow function");
}

// callback functions
function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // ... 5 seconds later ...
    anyFunctionReference();
}

function functionToBePassed() {
    console.log("Hi")
}

const sayHi2 = () => {
    console.log("Hi2")
};

const sayHello = () => {
    console.log("Hello")
};

// call sayHilater and pass a callback that says "Hi"
sayHiLater(functionToBePassed);

// call sayHiLater with a lambda function saved as a variable
sayHiLater(sayHi2)

// the same but with "hello"
sayHiLater(sayHello)

// the same but with a function that takes argument
function interact(genericInteraction, name) {
    console.log(genericInteraction(name))
}

// call interact and let it interact with a person of name
// example: "poke " + name
function poke(name) {
    return "Poke " + name;
}

interact(poke, "Mads")
interact(poke, "Biden")

// call interact and in a single line make sure that the following is achieved
// example: "hug " + name
interact((name) => { return "Hug " + name; }, "Mads")