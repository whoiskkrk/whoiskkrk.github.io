//1
const h1 = document.getElementsByTagName('h1');
console.log("Type:", typeof h1); 
console.log("Length:", h1.length); 

for (let i = 0; i < h1.length; i++) {
    console.log("Each element:", h1[i]);
}


//2
const p1 = document.querySelector('#p1');
p1.style.backgroundColor = "gold";


//3
const p2 = document.querySelector('#p2');
p2.style.cssText = "background-color: gold; color: blue; font-size: 2rem;"


//4
const p3 = document.querySelector('#p3');
p3.classList.add("third");


//5
const p4 = document.querySelector('#p4');
p4.classList.add("fourth", "border");


//6
const container = document.querySelectorAll('.container');
console.log(container);

for (let i = 0; i < container.length; i++) {
    const child = container[i].firstElementChild;
    console.log("1st element of container:", child);

    //7
    console.log("Content of 1st element of container:", child.textContent);
}


//8
const classes = ['first', 'second', 'third', 'fourth'];

const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {

    const primaryId = headers[i].id;
    const primaryClass = headers[i].className;    
    switch (i) {
        case 0:
            headers[i].querySelector('h1').classList.add(classes[i]);
            break;
        case 1:
            headers[i].querySelector('h1').outerHTML = '<h2 id="' + primaryId + '" class="' + primaryClass + ' ' + classes[i] + '">' + headers[i].querySelector('h1').textContent + '</h2>';
            break;
        case 2:
            headers[i].querySelector('h1').outerHTML = '<h3 id="' + primaryId + '" class="' + primaryClass + ' ' + classes[i] + '">' + headers[i].querySelector('h1').textContent + '</h3>';
            break;
        case 3:
            headers[i].querySelector('h1').outerHTML = '<h4 id="' + primaryId + '" class="' + primaryClass + ' ' + classes[i] + '">' + headers[i].querySelector('h1').textContent + '</h4>';
            break;
    }

    headers[i].classList.add(classes[i]);    
}

console.log(headers);










