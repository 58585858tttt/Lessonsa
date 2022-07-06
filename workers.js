let employes = [
    {
        Name: 'Tigran', 'last Name': 'Hovhannisyan', age: '20', salary: '200000', status: 'good'
    },

    {
        Name: 'Albert', 'last Name': 'Karapetyan', age: '24', salary: '420000', status: 'perfect'
    },

    {
        Name: 'Gayane', 'last Name': 'Serobyan', age: '42', salary: '140000', status: 'normal'
    },

    {
        Name: 'Vardan', 'last Name': 'Arshakyan', age: '33', salary: '700000', status: 'perfect'
    },

    {
        Name: 'Anjela', 'last Name': 'Hayrapetyan', age: '22', salary: '310000', status: 'good'
    },

    {
        Name: 'Davit', 'last Name': 'Martirosyan', age: '19', salary: '120000', status: 'not bad'
    },

    {
        Name: 'Artur', 'last Name': 'Avagyan', age: '39', salary: '80000', status: 'bad'
    },

    {
        Name: 'Karine', 'last Name': 'Araqelyan', age: '48', salary: '100000', status: 'bad'
    },

    {
        Name: 'Anna', 'last Name': 'Karapetyan', age: '21', salary: '250000', status: 'good'
    },

    {
        Name: 'Gagik', 'last Name': 'Xachatryan', age: '30', salary: '170000', status: 'normal'
    }
]

const table = document.createElement('table');
const thead = document.createElement('thead')
let tr = document.createElement('tr')
const tbody = document.createElement('tbody')
let headings = Object.keys(employes[0])
for (let i = 0; i < headings.length; i++) {
    let th = document.createElement('th')
    th.innerHTML = headings[i]
    tr.insertAdjacentElement('beforeend', th)
}

thead.insertAdjacentElement("afterbegin", tr)
console.log(thead)

employes.forEach(employe => {
    tr = document.createElement('tr')
    let data = Object.values(employe)
    data.forEach(value => {
        let td = document.createElement('td')
        td.innerHTML = value
        tr.insertAdjacentElement('beforeend', td)
    }
    )
    tbody.insertAdjacentElement('beforeend',tr)
})
table.insertAdjacentElement('beforeend',thead)
table.insertAdjacentElement('beforeend',tbody)
document.body.insertAdjacentElement('beforeend',table)