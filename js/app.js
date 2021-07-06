// 'use strict;'

let form = document.getElementById('filmForm');
let table = document.getElementById('ls');

function setData() {
    localStorage.setItem('film', JSON.stringify(Film.all));
}
function getData() {
    let data = localStorage.getItem('film');
    if (data) {
        Film.all = JSON.parse(data);
        // console.log(data);
        // console.log(Film.all);
    }
}


function clear() {
    var tableHeaderRowCount = 0;
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

// console.log(Film.all);

let imgArr = ['action', 'adventure', 'animation', 'comedy', 'detective', 'fantasy', 'history', 'horror', 'musical', 'perate', 'romantic', 'sci-fi', 'war', 'western'];

function Film(name1, img1, year1) {
    this.name1 = name1;
    this.img1 = `./img/${img1}.png`;
    this.year1 = year1;
    Film.all.push(this);
}
console.log('gfg');
Film.all = [];

function addFilm(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let img = e.target.image.value;
    let image = img.toLowerCase();
    let year = e.target.year.value;
    let x = new Film(name, image, year);
    console.log(Film.all);
    setData();
    clear();
    render();
}

form.addEventListener('submit', addFilm);

function render() {

    for (let i = 0; i < Film.all.length; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);

        let td = document.createElement('td');
        row.appendChild(td);
        td.textContent = 'X';

        let td2 = document.createElement('td');
        row.appendChild(td2);
        let img = document.createElement('img');
        td2.appendChild(img);
        img.src = Film.all[i].img1;

        let td1 = document.createElement('td');
        row.appendChild(td1);
        td1.textContent = Film.all[i].name1;


        let td3 = document.createElement('td');
        row.appendChild(td3);
        td3.textContent = Film.all[i].year1;


    }
}

getData();
render();