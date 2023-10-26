/* fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: 'post title',
        body: 'post body'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }

})
.then( (response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})  */

/* const list = document.getElementById('list')

const getPost = (limit) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then( (response) => {
            return response.json()
        }).then((data) => {
            data.forEach((item) => {
                const listItem = document.createElement('li')
                listItem.innerText = item.title
                list.appendChild(listItem)
            })
        })
}

getPost(10) */