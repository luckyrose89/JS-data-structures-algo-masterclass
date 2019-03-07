let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

// Access O(1)
// Searching O(n)
// Insertion - pushing at the end is O(1). Inserting at beginning require reindexing so its big O(n)
// Removal

/*
push -   O(1)
pop -   O(1)
shift -   O(N)
unshift -   O(N)
concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)
*/