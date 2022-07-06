// if(!localStorage.getItem('members')) localStorage.setItem('members','[]')

// let data = JSON.parse(localStorage.getItem('members'))

const menu = document.querySelector('.menu');
const name = document.querySelector('#name');
const lName = document.querySelector('#lName');
const img_src = document.querySelector('#link');
const year = document.querySelector('#year');
const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const id = document.querySelector('th');
const i = document.querySelector("#save");
 
function Member(name, lName, link, year, id) {
    this.name = name;
    this.lName = lName;
    this.src = link;
    this.year = year;
    this.id = id;
}
 
const getInfo = () => {
    if (!localStorage.getItem('members')) localStorage.setItem('members', '[]');
    let data = JSON.parse(localStorage.getItem('members'));
    return data;
}
 
const saveInfo = (dataInfo) => {
        localStorage.setItem('members', JSON.stringify(dataInfo));
}
 
let data = getInfo();

let show = () => {
    container.classList.toggle('active');
    menu.classList.toggle('active');

}

let add = () => {
    lastid = data.length != 0 ? data[data.length - 1].id : 0
    current_member = new Member(name.value, lName.value, img_src.value, year.value, ++lastid);
    data.push(current_member);
    console.log(current_member);
    saveInfo(data);
    print();
}

let print = () => {
    const data = getInfo();
    tbody.innerHTML = '';

    let table_row = data.map(member => {
        return `
        <tr id="id_${member.id}">
            <th>${data.indexOf(member) + 1}</th>
            <th><input type = "text" disabled = "true" value = "${member.name}" class="name" ></th>

            <th><input type = "text" disabled = "true" value = "${member.lName}"class="lastname" ></th>

            <th><img src = "${member.img_src}" alt = ""></th>

            <th><input type = "text" disabled = "true" value = "${member.year}" class="year"></th>

            <th onclick="Edit(${member.id})"><i class="bi bi-pencil-square"></i></th>
            <th onclick="Save(${member.id})"><i class="bi bi-chevron-bar-down"></i></th>
            <th onclick="Delete(${member.id})">Delete</th>
        </tr>`
    })

    let rows = table_row.join('');
    tbody.insertAdjacentHTML('beforeend', rows)
}
const Delete = (current_id) => {
    data = data.filter(e => e.id != current_id)
    saveInfo(data)
    print()
}
const Edit = (current_id) => {
    let table_row = tbody.querySelector('#id_'+ current_id)
    let allinputs = table_row.querySelectorAll('input')
    // allinputs.forEach(input => input.disabled = true)  //save-i hamar
    allinputs.forEach(input => input.toggleAttribute('disabled'))
    console.log(allinputs)
}
const Save = (current_id) =>{
   let current_member = data.find(member => member.id == current_id)
   let table_row = tbody.querySelector('#id_'+ current_id)
   current_member.name = table_row.querySelector('.name').value
   current_member.lastname = table_row.querySelector('.lastname').value
   current_member.year = table_row.querySelector('.year').value
   let allinputs = table_row.querySelectorAll('input')
   allinputs.forEach(input => input.disabled = true)
   saveInfo(data)
}
const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");

chooseFile.addEventListener("change", function () {
    getImgData();
  });
  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });
    }
  }
print ()