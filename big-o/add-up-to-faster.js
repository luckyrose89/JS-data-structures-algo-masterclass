function addUpToFaster(n) {
    return n * (n+1)/2;
}

// always three operations * + /, which means O(1). As input grows the change is not reflected
// on the runtime.

const time1 = performance.now();
addUpToFaster(1000000000);
const time2 = performance.now();
console.log(`The time difference here is ${(time2 - time1)/1000} seconds`);