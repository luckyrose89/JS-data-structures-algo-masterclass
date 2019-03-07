function double(arr) {
    let newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(2 * arr[i])
    }
    return newArray;

}

// The newArray here gets longer directly in proportion to the length of input
// The space is proportional to n O(n)