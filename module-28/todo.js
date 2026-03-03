const loadTodo = () =>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(res=>res.json())
    .then((data)=> displayTodo(data));
};


// {userId: 4, id: 77, title: 'maiores aut nesciunt delectus exercitationem vel assumenda eligendi at', completed: false}
// completed
// : 
// false

// display korbo
const displayTodo = (todos)=>{
    //console.log(todos);

    //1.
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    //2 loop chalabo
    todos.forEach((todo)=>{
        console.log(todo);

        //card make korbo
        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class ="todo-card">
        <p>${todo.completed ===true ? `'<i class="fa-regular fa-square-check"></i>'`: `'<i class="fa-solid fa-square-check"></i>'`}</p>
        <h4>${todo.title}</h4>
        </div>
        `;

        todoContainer.append(todoCard);
    })
};

loadTodo();