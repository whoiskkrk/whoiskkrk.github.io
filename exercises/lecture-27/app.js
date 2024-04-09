const ul = document.querySelector('ul');


let itemsArray = JSON.parse(localStorage.getItem('items')) || [];


function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const toDo = document.querySelector('.to-do-list');
    toDo.appendChild(li);
}

itemsArray.forEach(function(item) {
    addTask(item);
});


const input = document.getElementById('item');

function add() {
    const text = input.value.trim();
    if(text !== "") {
        itemsArray.push(text);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(text);
        input.value = "";
    }
}


function del() {
    localStorage.removeItem('items');
    itemsArray = [];
    ul.innerHTML = "";
}
