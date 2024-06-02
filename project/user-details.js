fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('id')}`)
    .then(res => res.json())
    .then(user => {
        console.log(user)
        // document.body.appendChild(divUser)
        let userDet = document.getElementById('userDet')
        let ul = document.createElement('ul')
        ul.innerHTML = `
            <li>id: ${user.id}</li>
            <li>name: ${user.name}</li>
            <li>username: ${user.username}</li>
            <li>email: ${user.email}</li>
            <li>address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</li>
            <li>phone: ${user.phone}</li>
            <li>website: ${user.website}</li>
            <li>company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</li>
            `
        userDet.append(ul)

        let btnPosts = document.createElement('button')
        let idButton = document.getElementById('button')
        idButton.append(btnPosts)
        btnPosts.innerText = 'post of current user'
        btnPosts.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem('id')}/posts`)
                .then(res => res.json())
                .then(posts => {
                    // let divBlock = document.createElement('div')

                    let divBlock = document.getElementById('postsContainer')
                    if (!divBlock) {
                        divBlock = document.createElement('div');
                        divBlock.id = 'postsContainer';
                    }
                    divBlock.innerHTML = ''
                    // console.log(posts)
                    posts.forEach((post) => {
                        let divTitlePost = document.createElement('div')
                        let h3 = document.createElement('h3')
                        h3.innerText = `№ ${post.id}: ${post.title} `
                        divTitlePost.append(h3)
                        divBlock.appendChild(divTitlePost)
                        let btnLink = document.createElement('button')
                        btnLink.innerText = 'Link'
                        h3.appendChild(btnLink)
                        btnLink.addEventListener('click', () => {
                            window.location.href = 'post-details.html'
                            localStorage.setItem('postId', post.id)
                        })
                    })
                    // divUser.append(divBlock)
                })
        })
        // divUser.append(ul, btnPosts,)

    })



// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.