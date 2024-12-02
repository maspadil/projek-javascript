import factorial from './factorial.js';
import fibonacci from './fibonacci.js';


const numFactorial = 5;
console.log(`Factorial of ${numFactorial}:`, factorial(numFactorial));


const numFibonacci = 7;
console.log(`Fibonacci sequence up to ${numFibonacci} terms:`);
for (let i = 0; i < numFibonacci; i++) {
  console.log(fibonacci(i));
}
