    const todoList = document.querySelector('#todo-list');
    const todoForm = document.querySelector('#todo-form');
    const todoInput = document.querySelector('#todo-input');
    const addBtn=document.querySelector("#add")

    todoForm.addEventListener('submit', formHandler);
    addBtn.addEventListener('click', formHandler);

    function formHandler(event){
        event.preventDefault();
        console.log("asdas");


        const newTask =document.createElement("li");
        newTask.innerText = todoInput.value;
        todoList.append(newTask);



        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('role', 'button');
        deleteBtn.innerText = "Delete";
        deleteBtn.style['margin-left']='15px';
        newTask.append(deleteBtn);


        deleteBtn.addEventListener("click", function(){
            this.closest('li').remove();
        })

        todoInput.value =''

        todoInput.focus();
    }








