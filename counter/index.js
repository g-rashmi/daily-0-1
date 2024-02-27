let counter = 0;

function increCounter() {
counter++;
console.log('Counter=', counter);
}

const interval= setInterval(increCounter, 1000);

console.log(interval);