
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;
async function fetchPromise() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
         console.error(`Ooops!:${error}`);
    }
}
console.log(fetchPromise());

fetchPromise() 
.then(posts => {
	let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
})

.then(() => {
    const users  = document.querySelectorAll('.author');
    users.forEach(async user => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
      const userName = await response.json();
      user.textContent = userName.name
    })
})

