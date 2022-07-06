// let darak = [5,6,'Hello']// 0,1,2  (hashvum e 0-ic)
// console.log(darak [2]) // darak.length (daraki erkarutyun)(hashvum e darakum gtnvox elementneri qanaky)
// (darak[darak.length - 1]) // cuyc e talis verjin elementy 



// sum = 0;
// let darak = [5, 52, 520, 454, 565, 488, 21, 100, 5475, 745] // Array(zangvac)
// let index = 0;
// while (index <= darak.length - 1){
//    sum += darak[index];
//    index++
// } 
// console.log(sum)   // stanum enq tveri gumary 


// let arr = [];
// let index = 0;
// while (index < 10){
//    arr[index] = 1;
//    index++ 
// }
// console.log(arr);

// let arr = [1,2,3,4,5,78,36,21,45]

// let array = [...arr] //zangvaci copy

// array[0] = 0;  

// let res = '';

// for (let i = 0; i <= array.length-1; i++){
//  res += array[i] + ' '

// };
// console.log(res)


// METHODS OF ARRAY

// let array = [1,2,4]
// array[3] = 10
// array[4] = 12
// array[array.length] = 32
// console.log(array + ' aranc popoxutyan');

// array.push(4,'hi') // avelacnum e tarrer verjic
// console.log (array + ' - push(4,"hi")');

// array.pop() // jnjum e verjin tarry
// console.log(array + ' - pop("hi")');

// array.shift()// jnjum e arajin tarry
// console.log ( array + ' - shift(1)');

// array.unshift(11,22) // avelacnum e tarrer skzbic  
// console.log (array + ' - unshift (11,22)');

// let rArray = array.slice(0,3) // vercnum e tarrery indexnery nshelov (0 indexic minchev 3rd index)
// console.log('sliced array - (0,3) in rArray - ' + rArray)
// minusov ( - ) grelu depqum jnjum e verjin tarry/tarrery yst grvac qanaki 

// let arr = [1,2,5,44,57,142]
// let a = 20
// let b = 0
// let y = arr.length;
// // array = array.slice(0,array.length - 1)
// // array = array.slice(1,array.length)

//  for (let i = 0; i <= arr.length; i++) {
//  b = arr[i];
//  arr[i] = a
//  a = b
//  if (i == y  ){
//      break
//   }
// }

// let arr = [1,2,4,74,44,78]
// // let a = arr.join('-')
// // console.log(a)
// let arr1 = [1,50,42,0]
// // let b = arr1.concat(arr)
// // console.log (b)

// let arr2 = []

// for (let i = 0; i < arr.length; i++){
//    arr2.push(arr[i])
// }
// for (let i = 0; i < arr1.length; i++){
//    arr2.push(arr1[i])
// }
// console.log(arr2)


//MINIMUM AND MAXIMUM COUNTING

// let array = [5,51,0,2,22,1,-5]
// let answer = prompt('maximum or minimum ?')
// // let max = array[0], min = array[0]
// // if(answer == 'max'){
// // for (let i = 0; i < array.length; i++) {
// //    if(max<=array[i]){
// //     max = array[i];
// //    }
// // }
// // alert(max)
// // }else{
// //    for (let i = 0; i < array.length; i++)
// //  if(min>=array[i]){
// //     min = array[i]
// //  }
// //  alert(min)
// // }


// let max = Math.max(...array)
// let min = Math.min(...array)
// answer === 'max' ? alert(max): alert(min); // karch lucman dzev

// let string = '';
// for (let row = 1; row <= 5; row++) {
//    for (let star = 1; star <= 5; star++) {
//       string += '* '
//    }
//    string+='\n'
// }
// console.log(string)

// let string = '';
// for (let row = 1; row <= 5; row++) {
//    for (let star = 1; star <= row; star++) {
//       string += '* '
//    }
//    string+='\n'
// }
// console.log(string)

// let string = '';
// for (let row = 1; row <= 5; row++) {
//    for (let star = 5; star >= row; star--) {
//       string += '* '
//    }
//    string+='\n'
// }
// console.log(string)

// let string = '';
// for (let row = 1; row <= 11; row++) {
//    for (let sp = 10; sp >= row; sp--) {
//       string += '  '
//    }
//    for (let star = 1; star <= 2*row-1; star++)
//     {string += '* '}
//    string+='\n'
// }
// for (let row = 1; row <= 10; row++){
//    for (let sp = 1; sp <= row; sp++){
//       string += '  '
//    }
//    for (let star = 2*(11-row)-1; star >= 1; star--)
//    {
//       string +='* '}
//    string+='\n'
// }
// console.log(string);


// let arr = [5,4,8,10,78]
// console.log(arr)
// let a = arr[0];
// for (let i = 0; i < arr.length; i++) {
//    for (let j = i+1; j < arr.length; j++) {
//    if(arr[i]>=arr[j]){
//       a = arr[i]
//       arr[i] = arr[j]
//       arr[j] = a
//    }
//    }
// }
// console.log(arr)

// let gumar = 208640;
// let tesak = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10]
// let qanak = [];//[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// console.log(gumar)
// for (let i = 0; i < tesak.length; i++) {
//    qanak.push(0)
//    if (gumar / tesak[i] >= 1) {
//       qanak[i] = Math.floor(gumar / tesak[i])
//       gumar -= qanak[i] * tesak[i]
//    }
//    console.log(`${tesak[i]} --- ${qanak[i]}`)
// }

// let gumar = 278640; //prompt 
// let tesak = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10]; 
// let qanak = [];//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
// console.log(gumar) 
// for (let i = 0; i < tesak.length; i++) { 
//     qanak.push(0) 
//     if (gumar / tesak[i] >= 1) { 
//         qanak[i] = Math.floor(gumar / tesak[i]); 
//         gumar -= qanak[i] * tesak[i] 
//     } 
//     console.log(`${tesak[i]} --- ${qanak[i]}`) 
// } 

// let array = [7, 2, -5, 8, 6, 4, 5, 110, -81, 77, 65, 45, 15];
// let sum = array[0] + array[1], index = 0;
// for (let i = 0; i < array.length - 1; i++) {
//    if (array[i] + array[i + 1] >= sum) {
//       sum = array[i] + array[i + 1]
//       index = i
//    }
// }
// console.log(`${array[index]} + ${array[index + 1]} = ${sum}`)

// let array = [7, 2, -5, 8, 6, 4, 5, 110, -81, 77, 65, 45, 15];
// let sum_max = array[0] + array[1]
// let sum_min = array[0] + array[1]
// let sum = [9,-3,-500,0,0.1]
// let sum_drakan = [9,3,500,0,0.1]
// for (let i = 0; i < array.length - 1; i++) {

// console.log(sum_max, sum_min)
// }


//Erku harevanneri gumaric gtnel 0-in amenamot tivy


// let array = [7, 2, -5, 8, 6, 4, 5, 110, -81, 77, 65, 45, 15];
// let index = 0;
// let sum = array[0] + array[1];

// for (let i = 0; i < array.length - 1; i++) {
//     if (Math.abs(array[i] + array[i + 1]) <= Math.abs(sum)){
//         sum = array[i] + array[i + 1];
//         index = i
//     }
// }
// console.log(`${array[index]} + ${array[index + 1]} = ${sum}`); 







//MATRIX

// let array = [[51, 7, [10, -5, [35, 0], -7], 'hi'], [87, -100, [5, [45, 6, 'hi']], '8'], 28]
// //10 + 5 + 28 + (-100) + 45 = ?
// let sum = array[0][2][0] + array[1][2][0] + array[2] + array[1][1] + array[1][2][1][0]   
// console.log(`${array[0][2][0]} + ${array[1][2][0]} + ${array[2]} + ${array[1][1]} + ${array[1][2][1][0]} = ${sum}`)


// let matrix = [[5, 6, 10, -4],
//               [0, 6, 11, 2],
//               [-50, 8, 2, 0],
//               [3, 45, 8, -20]]
// let res = matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3]

// console.log (`${matrix[0][0]} + ${matrix[1][1]} + ${matrix[2][2]} + ${matrix[3][3]} = ${res}`)
// for (let i = 0; i < matrix.length; i++) {
//     res += matrix[i][0]
// }
// console.log(res)

// let matrix = [[5, 6, 10, -4],
//              [0, 6, 11, 2],
//              [-50, 8, 2, 0],
//              [3, 45, -8, -20]]
//            let multiply = [];
// let row = []
// for (let i = 0; i < matrix[0].length; i++) {
//   for (let j = 0; j < matrix.length; j++) {
//   row.push(matrix[j][i])
//   }
//   multiply.push(row);
//   row = []
// }
// console.log(multiply)


// let matrix = [[5, 6, 10, -4],
//              [0, 6, 11, 2],
//              [-50, 8, 2, 0]  
// ]
// let m = 0;
// for (let row = 0; row < matrix.length; row++){
//   array = matrix[row];
//   m = array[0];
//   for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//       if (array[i] > array[j]){
//         m = array[i]
//         array[i] = array[j]
//         array[j] = m
//       }
//     }
//   }
// }
// console.log(matrix)


// let matrix = []; 
// let row = +prompt('Enter the number of rows');//3 
// let col = +prompt('Enter the number of columns');//5 
// for(let i = 0; i < row; i++){//3-0,1,2 
//     matrix[i] = []; 
//     for(let j = 0; j < col; j++) {//5=0,1,2,3,4 
//         matrix[i].push(+prompt('Type the element')); 
//     } 
// }
// console.log(matrix)


//SORTAVORUM 


//arr.sort((a, b) => b - a )




// function sum(arr) {
//   let sum1 = 1
//   for (let i = 0; i < arr.length; i++) { 
//     sum1 *= arr[i]
//   }
//   return sum1  
// }
// let arr = [5,6,7]

// console.log(sum(arr))



// function diagonal(matrix) {
//   if (matrix.length = matrix[0].length) {
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][i] = 1
//     }
//     return matrix 
//   }
//   else {
//     return 0
//   }
// }

// let m = [[1, -5, 4],
//         [0, 77, 6],
//         [9, 13, -7]]


//         console.log(diagonal(m))



// let m = [[1, -5, 4],
//         [0, 77, 6],
//         [9, 13, -7]]
// function swap(a, b) {
//   let x = a
//       a = b
//       b = x 
//   return { a, b }
// }
// function reverse(matrix) {
//   for (let i = 0; i <= matrix.length / 2; i++) {
//     let a = matrix[i]
//     let b = matrix[matrix.length - 1 - i]

//     //  let a = matrix[i]
//     //  matrix[i] = matrix[matrix.length - 1 - i]
//     //  matrix[matrix.length - 1 - i] = a}
//     swap(matrix[i], matrix[matrix.length - 1 - i]
//       )
//     return matrix
//   }
// } 
//   console.log(reverse(m)) 




// let obj = {
//   key:5,
//   v1:10,
//   v3:'h1'
// }
// obj.key = 'vvv'
// let obj1 = obj
// obj1. v3= 'sss'

// obj.year = 2000
// console.log(obj)


// let bank = (gumar) => {
//   let obj = {
//     100000: 0,
//     50000: 0,
//     20000: 0,
//     10000: 0,
//     5000: 0,
//     2000: 0,
//     1000: 0,
//     500: 0,
//     200: 0,
//     100: 0,
//     50: 0,
//     20: 0,
//     10: 0
//   }
//   let keys = Object.keys(obj);
//   keys.reverse().forEach(e => {
//     if (gumar / (+e) >= 1) {
//       obj[e] = Math.floor(gumar / (+e))
//       gumar -= e * obj[e]
//     }
//   }
//   )
//   for (const key in obj) {
//     if (obj[key] != 0) {
//       console.log(`${key} - ${obj[key]}`)
//     }
//   }
// }

// bank(875410)


// let obj = {
//   firstName: "Tigran",
//   lastName: "Hovhannisyan"
// }
// function key(obj) {
//   for (const key in obj) {
//     let newKey = obj[key];
//     obj[newKey] = key;
//     delete obj[key]
//   }
//   return obj
// }
// console.log (key(obj))


// let arr = [1, 2, 10, 3, -5]


//#1
// let arr3 = []
// for (let i = 0; i < arr.length; i++) {
//   arr3.push(arr[i] * 3)
// }

//#2 - M A P
// let arr3 = arr.map(e => e * 3)
// console.log (arr3)

//-----------------------------------

// Ֆիլտրել այն բոլոր թվերը որոնք փոքր կամ մեծ են  n  թվից
//#1
// let arr1 = []
// for (let i = 0; i < arr.length; i++){
//   if(arr[i]>=2){
//     arr1.push(arr[i])
//   }
// }
// arr = [...arr1]
// console.log (arr)

//#2
// let arr2 = arr.filter(e => e >= 2)
// console.log (arr2)

//------------------------------------

// Սորտավորում
//#1  SORT
// let arrString = ['Array', 'apple', 'Pen', 'Pineapple', 'barev']

// // arrString = arrString.filter(e => e.length >= 5)
// // console.log(arrString)

// //#2
// arr.sort((a,b) => a-b)
// console.log (arr)

//-------------------------------------

// Ապահովում է բոլոր էլեմենտների վրայով պտտվելը
//#11 FOREACH
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }


//#2
// arr.forEach(e => console.log (e))

// ------------------------------------

// Զանգվածները միացնում է իրար
// CONCAT
// let arr2 = [15, 0, 0];
// arr = arr.concat(arr2);
// console.log(arr)

//--------------------------------------
// EVERY
// Ստուգում է պայմանը բոլոր էլեմենտների համար
// #1
// function every(arr) {
// for (let i = o; i < arr.length; i++){
//     if(arr[i]<=0){
//         return false
//     }
//     else{
//         return true
//     } 
// }
// }
//#2 
//let bool = arr.every(e => e % 2 == 0)
// console.log(arr)

//--------------------------------------

// SOME
// եթե գոնե մեկ էլեմենտ հավասար կամ հավասար Չէ n թվին ապա վերադարձնում է TRUE կամ FALSE  
// #1
// function some(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             return true 
//         }
//         else{
//             return false
//         }
//     }
// }
//#2
//let bool = arr.some(e => e != 0)
//console.log(arr)
//--------------------------------------

// INCLUDES
// Եթե նշված էլեմենտը ներառվում է զանգվածի մեջ ապա վերադարձնում է TRUE կամ FALSE
//#1
// function include(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             return false
//         }
//         else{
//             return true 
//         }
//     }
// }
//#2
// let bool = arr.includes(0)
// console.log(arr)

//--------------------------------------

// JOIN
// Միացնում է զանգվաժի բոլոր տարրերը նշված մասնիկով 
//#1
// function join(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         string += arr[i] + sym
//     }
//     return string
// }
//#2
// let string = arr.join('+')
// console.log(string)

//--------------------------------------

// FIND
// Վերադարձնում է պայմանով նախատեսված ընդամենը մեկ տարր
//#1
// let b = arr.find(e => e == 1)
// console.log (b)

//--------------------------------------

// FINDINDEX
//Վերադարձնում է պայմանով նախատեսված տարրի ինդեքսի համարը
//#1
// console.log(arr.findIndex(e => e==1))

//--------------------------------------

// FILL
//
//#1
// let arr1 = []
// let fill = (array, value, start, end) => {
//   for (let i = start; i <= end; i++) {
//       array[i] = value
//   }
//   return array
// }
// console.log(fill(arr1, 1, 0, 4))

//-------------------------------------

// SPLICE
//#1
// let c = [8, 7, 0, 0 ,0 ,0, 'b']
// c.splice(1, 2, 'hello')
// console.log(c)

//-------------------------------------

// REDUCE 
// վերադարձնում է 
// let array = [
//     {name:'Tigran', year:2012},
//     {name:'Tigran1',year:2011},
//     {name:'Tigran2', year:2012},
//     {name:'Tigran3', year:2010},
//     {name:'Tigran4', year:2010},
//     {name:'Tigran5', year:2013}
// ]   

// let b = array.reduce((obj, e) => {
//     if(obj[e.name] == null)obj[e.name]=[]
//     obj[e.name].push(e.year)
// return obj}
// )
// console.log(b)

// let obj = {
//     'anun': 'Tigran',
//     anun_azganun: function (){ return this.anun}
// }
// let name1 = () => 'Hi'

// console.log(obj.anun_azganun())

/*
let word = prompt('Word ?')

switch (word){
    case 'dog':
    alert('շուն');    
    break; 
    case 'cat':
    alert('կատու');
    break;
    case 'horse':
    alert ('ձի');
    break;
    default:
    alert ('false');
    break;
}

if(!obj[word]){
    alert('error')
}else{
    alert(obj[word]())
}
*/

/* -----------------------------------

function construct(name,azganun){
this.name = name 
this.azganun = azganun 
}
let obj1 = new construct('a1','a2')
console.log(obj1)

------------------------------------ */


// let array = [4, 5, 7, 6, 2 ,47, 8 ,1]
// array = array.map(e=>e+=2)

// console.log(array)

