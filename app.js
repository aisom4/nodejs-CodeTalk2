//Question 1

//A promise is an asynchronous set of instructions to let data know that something will be completed either at this time or some time in the future.
//Pros- Helps prevent callback hell and makes code easier to understand and read.
//Cons- A promise can only return one object, it limits the amount of arguments that we can return in our code

const promise = new Promise((resolve, reject) => {
  let x = 1 * 2;
  if (x === 2) {
    resolve("Correct"); //a simple example to show the use of resolve and reject
  } else {
    reject("Wrong");
  }
});
promise
  .then((message) => {
    console.log(`This is ${message}`);
  })
  .catch((message) => {
    console.log(`This is ${message}`);
  });

//Question 2
//A callback function is a function that is called when an asynchronous activity is ready it is a function that is used as an argument to another function.

//Callback Hell is when an error results from multiple callbacks being put on top of eachother. The code has a deep arrow that looks like a christmas tree on its side.
//using promises and async/await will help to fix callback hell and splitting the code into smaller functions instead of a large one.


asyncTest1 (function(result1)) {
    asyncTest2(function(result2){
        asyncTest3(function(result3){
            asyncTest4(function(result4){
                asyncTest5(function(result5){ //this code shows the arrow look
                });
            });
        });
    });
}


//Question 3

//The "this" keyword works in arrow functions by having the keyword inherit the parent property. Arrow function values will stay the same throughout the entire code. In a normal function the "this" keyword will be defined already.

const car = {
    make: "Hyundai",
    model: "Sonata",
    year: 2018,
    iCan: "get stolen",

    ableToDo: function (){
        console.log(`This is a ${this.make} and more specifically a ${this.model}. I can ${this.iCan}.`)
    }
};
car.ableToDo();




//Question 4

const arr = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function filters() {
    //could've added in a for loop 
  //creating a function named filter without a parameter
  return arr.filter((arr) => arr % 3 === 0 && arr % 6 === 0 && arr % 9 !== 0); //using a .filter method and setting up a run if the element is divisible by 3 AND 6 and gives no remainders we are good. The number also should not be divisible by 9 these conditions will push the numbers back into the array using the .filter method which pulls out the numbers that follows the conditional.
}
const final = filters();
console.log(final);

//Question 5

//An Async/Await is used to indicate that a promise will be returned for a function in a program. It helps to avoid callback hell. While you are fufilling the promise it will either be resolved or rejected. It does not block the process it allows for code to run at the same time. 


const promiseTest = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Yay");
        }, 1000);
    });
};

async function functionTest(){
    let x= await promiseTest();
    console.log(x);
}
promiseTest();