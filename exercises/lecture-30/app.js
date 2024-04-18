const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>`;

//1
function process() {
    const firstName = document.querySelector('input[name = "firstName"]').value.trim();
    const lastName = document.querySelector('input[name = "lastName"]').value.trim();

    if(firstName == "" && lastName == "") {
        document.getElementById('waiting').innerHTML = "I´m miss You";
    } else {
        document.getElementById('waiting').innerHTML = `Hello ${firstName} ${lastName}!`;
    }
}

setTimeout(process, 10000);

//2
let request = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/posts";

request.open("GET", url, true);

//3
request.onload = function() {
    const response = JSON.parse(request.responseText);
    let responseHTML = "";

    response.forEach(post  => {
        responseHTML += template(post);
    });

    document.getElementById('demo').innerHTML = responseHTML;
}

request.send();

