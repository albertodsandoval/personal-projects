const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
renderTodoList();


function renderTodoList(){
  const todoDisplay = document.querySelector('.js-display-todo')
  let todoListHTML = '';
  for(i=0;i< todoList.length;i++){
    const todoObject = todoList[i];
    const {name,dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button"onclick="
        todoList.splice(${i},1);
        localStorage.setItem('todo-list',JSON.stringify(todoList));
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML+=html;
  }
  todoDisplay.innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-todo-list-input');
  const dateInputElement = document.querySelector('.js-date-input')
  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  todoList.push({name,dueDate });
  inputElement.value = '';
  renderTodoList();
  localStorage.setItem('todo-list',JSON.stringify(todoList));
}