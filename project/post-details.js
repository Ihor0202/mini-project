fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}`)
    .then(res => res.json())
    .then(post => {
        console.log(post)
        let divForPost = document.getElementById('divForPost')
        let ulPost = document.createElement('ul')
        for (const key in post) {
            let li = document.createElement('li')
            li.innerText = `${key}: ${post[key]}`
            console.log(`${key}: ${post[key]}`)
            ulPost.append(li)
        }
        document.body.append(divForPost)
        divForPost.appendChild(ulPost)
    })
fetch(`https://jsonplaceholder.typicode.com/posts/${localStorage.getItem('postId')}/comments`)
.then(res => res.json())
.then(comments => {
    let commentsContainer = document.getElementById('commentsContainer')
    document.body.append(commentsContainer)

    comments.forEach(comment => {
        let commentBox = document.createElement('div')
        let ulCom = document.createElement('ul')
        for (const key in comment) {
            let liKey = document.createElement('li')
            liKey.innerText = `${key}: ${comment[key]}`
            ulCom.append(liKey)
        }
        commentsContainer.append(commentBox)
        commentBox.append(ulCom)
    })

})