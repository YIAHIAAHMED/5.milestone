
// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // promise of response
//         .then(response => response.json())
//         .then(json => console.log(json));
// };


const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // promise of response
        .then(response => response.json())
        // promise of json data
        .then((data) => console.log(data));
};

// const loadPost = ()=>{
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then(res=>res.json())
//     .then(json=> console.log(json));
// };

// const loadPost = ()=>{
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     // eta promise of response json data deyar jonnec promise dibe
//     fetch(url)
//     .then(res=>res.json())
//     .then(json=> displayPost(json));
// };

// const loadPost = () => {
//     const url = "https://jsonplaceholder.typicode.com/posts";

//     // eta promise of response json data deyar jonnec promise dibe
//     fetch(url)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json);
//             displayPost(json)
//         });
// };

// const displayPost = (posts) => {
//     //console.log(posts);
//     // proti post er data dekhar jonne
//     posts.forEach((post)=>{
//         console.log(post);
//     });
// }


// posts
const loadPost =()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
       // console.log(data);
       displayPost(data);
    });
};

// array of object
// const displayPost=(posts)=>{
//     //onsole.log(posts);
//     // for (let i=0;i<posts.length;i++){
//     //     console.log(posts[i]);
//     // }

//     //or
//     // for(let post of posts){
//     //     console.log(post);
//     // }

//     //or

//     // get the container
//     const postContainer = document.getElementById('post-container');
//     //console.log(postContainer);

//     // bar bar jeno songkha na bare ejonne
//     postContainer.innerHTML = '';
    
    
//     posts.forEach((post)=>{
//         console.log(post.title);
//         // create HTML element
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         console.log(li);

//         // add li into container
//         postContainer.appendChild(li);
//     });
// };




// abar korci

// {
// "userId": 4,
// "id": 32,
// "title": "doloremque illum aliquid sunt",
// "body": "deserunt eos nobis asperiores et hic est debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates et aut adipisci ea maiores voluptas maxime"
// }

const displayPost= (posts)=>{

    //1.get the container and empty the container
    const postContainer = document.getElementById('post-container');
    posts.forEach((post)=>{
        //console.log(post);

        //2.create element
        const postCard = document.createElement('div');
        postCard.innerHTML =`
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        // 3.add the container
        postContainer.append(postCard);

    });
};
loadPost()