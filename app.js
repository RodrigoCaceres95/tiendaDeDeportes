//Spread operator arrays

const arr = [1, 2, 3, 4]

const arrTest = ["a", "b", "c", "d",...arr]

console.log(arrTest)

//Spread Objetos
 const obj = {test: 1, test2:2}
 const objTest = {...obj, test3:3}
 console.log(objTest)

 const a = [1, 2, 3]
 const [uno, dos, tres] = a
 console.log(uno, dos, tres)

 //object rest

let restOfKeys = Object.assign({}, config)