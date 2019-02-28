function addUpToSlower(n){
    var total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// the number of operations is eventually bounded by n that means O(n)

const t1 = performance.now();
addUpToSlower(1000000000);
const t2 = performance.now();
console.log(`The time difference here is ${(t2 - t1)/1000} seconds`);
