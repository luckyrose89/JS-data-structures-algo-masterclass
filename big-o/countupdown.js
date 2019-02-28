function countUpAndDown(n){
    console.log("going up!!");
    for(var i = 1; i <= n; i++) {
        console.log(i);              // make n no of repetitions
    }
    console.log("going down")
    for(var j = 9; j > 0; j--) {
        console.log(j);             // make n no of repetitions
    }
    console.log("bye")
}
//Another example of o(n)

countUpAndDown(9);