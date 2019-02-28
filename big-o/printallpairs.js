function printAllPairs(n) {
    for(var i = 0; i < n; i++) {
        for(var j= 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

printAllPairs(5);

// An example of O(n^2). An O(n) inside O(n). As n grows the runtime grows n * n larger