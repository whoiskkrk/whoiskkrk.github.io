//1
const list = ['html', 'css', 'javascript', 'react.js'];
const ul = document.createElement('ul');

list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);


//2
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

const ol = document.createElement('ol');

listWithHref.forEach((obj)  => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    const key = Object.keys(obj)[0];
    const value = Object.values(obj)[0];

    link.textContent = key;
    link.href = value;

    li.appendChild(link);
    ol.appendChild(li);
});


document.body.appendChild(ol);


//3
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

const table = document.createElement('table');
const header = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Degree'];

headers.forEach((text) => {
    const th = document.createElement('th');
    th.textContent = text;
    header.appendChild(th);
});

table.appendChild(header);

students.forEach((student) => {
    const row = document.createElement('tr');
    Object.values(student).forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    table.appendChild(row);

});

document.body.appendChild(table);
