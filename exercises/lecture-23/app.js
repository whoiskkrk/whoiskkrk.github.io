const alert = document.querySelector('.alert');

//1
const primary = document.querySelector('.btn-primary');

primary.onclick = function () {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple primary alert—check it out!';
}


//2
const secondary = document.querySelector('.btn-secondary');

secondary.addEventListener('click', function () {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple secondary alert—check it out!';
});


//3
const success = document.querySelector('.btn-success');

success.addEventListener('mouseover', () => {
    alert.classList.add('alert-succes');
    alert.textContent = 'A simple success alert—check it out!'
});

success.addEventListener('mouseout', function () {
    alert.classList.remove('alert-success');
    alert.textContent = ' ';
});

//4
const danger = document.querySelector('.btn-danger');

danger.addEventListener('focus', () => {
    alert.classList.add('alert-danger');
    alert.textContent = 'A simple danger alert—check it out!';
});

danger.addEventListener('focusout', () => {
    alert.classList.remove('alert-danger');
    alert.textContent = ' ';
});


//5
const light = document.querySelector('.btn-light');
const dark = document.querySelector('.btn-dark');

function toggleMode () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        dark.classList.add('hide');
        light.classList.remove('hide');
    } else {
        light.classList.add('hide');
        dark.classList.remove('hide');
    }
} 

light.addEventListener('click', toggleMode);
dark.addEventListener('click', toggleMode);


//6
const info = document.querySelector('.btn-info');
info.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        alert.classList.add('alert-info');
        alert.textContent = 'A simple info alert—check it out!';
    }
});

//7
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const title = cards[i].querySelector('.card-title');
    console.log(title.textContent);
}


//8
for (let n = 0; n < cards.length; n++) {
    const card = cards[n];
    const btn = card.querySelector('.add-to-cart');
    
    btn.addEventListener('click', function () {
        console.log(card.querySelector('.card-title'));
    })
}



