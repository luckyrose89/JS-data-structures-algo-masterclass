function sum(arr){
    let total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1,2,3,4,5]));

// This example shows that we always have constant space. O(n) = 1. The total is one number.
// var i inside loop is also one number