const todoList = [];

function renderTodoList(){
  const todoDisplay = document.querySelector('.js-display-todo')
  let todoListHTML = '';
  for(i=0;i< todoList.length;i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML+=html;
  }
  todoDisplay.innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-todo-list-input');
  const todoName = inputElement.value;
  todoList.push(todoName);
  inputElement.value = '';
  renderTodoList();
}
function handleInputKeydown(){
  if(event.key==='Enter'){addTodo();}
}