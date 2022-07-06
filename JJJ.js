//LUSACUYC

// let fill = (color,i) => {
//     document.querySelector(`.box-${i}`).classList.toggle(color)
//     if(i >= 2){
//         document.querySelector(`.box-${i-1}`).classList = `.box-${i-1}`
//     }
// }
// setTimeout(fill,200,'red',1)
// setTimeout(fill,1500,'yellow',2)
// setTimeout(fill,3000,'green',3)

//-----------------------------------

// Notification(NEW Messege)

// let showMessage = false
// let interval = setInterval(() =>{
//     document.title = showMessage ? 'New Message (1)': 'Document';
//     showMessage = !showMessage
// }, 500) 

//---------------------------------------

//Promise



















// ------------------------------------



// function search(){
// let city = document.querySelector(`#City`).value
// let data = fetch(`http://api.weatherapi.com/v1/current.json?key=b911aa6cee134e7594b133754221405&q=${city}&aqi=no`)
// let h1 = document.querySelector('h1')
// data.then(param => param.json())
// // .then(data => console.log(data))
// .then(data => h1.innerHTML=(data.location.name+ '-'+ data.location.region+ '-'+  data.location.country+ '-'+ data.current.temp_c)).catch((param) => console.log(param))
// }

// document.querySelector(`#City`).addEventListener('keypress', e => {if(e.key == 'Enter' /*e.key == ' ' || e.key == 'Spacebar'*/) search()})  


//--------------------------------------------------

/*const key = '1c15ff2628-a4ced2d865-rc14it'
fetch(`https://api.fastforex.io/fetch-all?from=usd&api_key=${key}`)
      .then(data => data.json())
      // .then(info => console.log(info))
      .then(data => {
            let array = Object.keys(data.results)
            let select = document.querySelectorAll('select')
            array.forEach(e =>{
                      select[0].innerHTML += `<option value="${e}">${e}</option>`
                      select[1].innerHTML += `<option value="${e}">${e}</option>`
                  }
            )
           
            return data
      })
      .then(info => console.log(info))
    

let convert = () =>{
      let from = document.querySelector('#from').value
      let to = document.querySelector('#to').value
      let amount =  document.querySelector('#amount').value
let url = `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${key}`
fetch(url).then(data => data.json())
      
      .then(info => console.log(info))
      .catch(data => console.log(data))
}*/
const container = document.querySelector('.container')
let data = fetch(`https://poetrydb.org/author/William Wordsworth`).then(a => a.json())

async function a2() {
      data = await data
      data.forEach(element => {
            let id = 1;
            let div = document.createElement('div');
            div.setAttribute('class', 'item-' + id);
            let title = `<h3>${element.title}</h3>`
            let lines = `<p>${element.lines.join('<br>')}</p>`
            div.innerHTML = title + lines
            container.appendChild(div)
            id++
      });
}
a2()