// document.querySelector('div').innerHTML = 'Hello world'
// document.getElementsByClassName('div')

// let h1 = document.getElementById('title').innerHTML
// console.log(h1)
// // let p = document.getElementByClassName('HI').innerHTML
// // console.log(p)
// let a = document.querySelector('.HI').innerHTML = 'Hello world'
// console.log(a)
// let jnjel = () =>{
// let  a = document.querySelector('#x')}

// let array = [4, 5, 45, 0, -5]
// let h1 = document.querySelector('h1')
// array.forEach(e => {
//     h1.innerHTML += e + '<br>'
// })


function show() {
    let select = document.querySelector('select')
    if (select.value == '+') {
        let a = +document.querySelector('#value1').value +  +document.querySelector('#value2').value
        document.querySelector('h1').innerHTML = a
    }
    if (select.value == '-') {
        let a = +document.querySelector('#value1').value -  +document.querySelector('#value2').value
        document.querySelector('h1').innerHTML = a  
    }
    if (select.value == '*') {
        let a = +document.querySelector('#value1').value *  +document.querySelector('#value2').value
        document.querySelector('h1').innerHTML = a
    }
    if (select.value == '/') {
        let a = +document.querySelector('#value1').value /  +document.querySelector('#value2').value
        document.querySelector('h1').innerHTML = a
    }
}