//1. use for... in loop + recursive to get all keys
/*let users = {
    name: 'Hieu',
    age: 18,
    appearence: {
        haircolor: 'black',
        skincolor: 'yellow',
        height: 1700,
        weight: 68,
    }
}
*/
//let entries = Object.entries(users)
//console.log (entries)

/*for (let keys in users) {
    if (!users.hasOwnProperty(keys)) {
        console.log (users.hasOwnProperty(keys) + users[keys])
    }
    else{
    console.log (keys + users[keys])}
};
*/
/*
for (let keys in users) {
    console.log (keys + " : " + users[keys])}
for (let property in users.appearence) {
    console.log (property + " : " + users.appearence[property])}
*/
//2. func to insert element 
let input = ([21,4,5,-1],3,99);
console.log (input)