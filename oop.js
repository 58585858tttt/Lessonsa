// let obj = {
//     arr: ['hi','hey','hello'],
//     coordinates: {
//         x: -5,
//         y: 57
//     },
//     sayHello: function(){
//         return 'I said hello'
//  
// }
// obj.arr.forEach(e => console.log(e))
// console.log(obj.coordinates.x)
// console.log(obj.coordinates.y)
// console.log(obj.sayHello())

// function Coordinates(x, y) {
//     this.x = x
//     this.y = y
//     this.showCoordinates = function () {
//         console.log(`${this.x} and ${this.y}`)
//     }
// }

// function construtor(x, y){
//     function showCoordinate(){
//         console.log(x, y)
//     }
//     return{
//         x,
//         y,
//         showCoordinate
//     }
// }

class Person {
    static info = 'parent class'
    constructor(data){
        this.name = data.name,
        this.lastName = data.lastName,
        this.age = data.age,
        this.fullname = () => this.name + this.lastName
    }
    fullname(){
        return this.name + ' ' + this.lastName
    }
    sayHi(){
        console.log('Hi')
    }
}

let Person1 = new Person({
    name: 'Tigran',
    lastName: 'Hovhannisyan',
    age: 20
})
class student extends Person {
constructor(data){
    super(data),
    this.studentid = data.studentid
}
 greet(){
    console.log('Greet') 
    super.sayHi()
  }
}
let student1 = new student ({
    name: 'Tigran',
    lastName: 'Hovhannisyan',
    age: 20,
    studentid: 5445
})
student1.sayHi()
student1.greet()

class Arm extends Person{
    sayHi(){
        return 'Barev'
    }
}
let arm1 = new Arm ({
    name: 'Hakob',
    lastName: 'Hovhannisyan',
    age: 47,
})
console.log(arm1.sayHi())