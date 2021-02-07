// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptionStatus = document.querySelector('.filter-todo-status');
const searchInput = document.querySelector('.search');

// lesteners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptionStatus.addEventListener('click', filterTodo);
searchInput.addEventListener('keyup', searchFilter);

// function for creating nodes
function addTodo(event) {
  // prevent form from submit
  event.preventDefault();
  // create todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // check mark button
  const compleatedButton = document.createElement('button');
  compleatedButton.innerHTML = '<i class="fas fa-check"></i>';
  compleatedButton.classList.add('complete-btn');
  todoDiv.appendChild(compleatedButton);
  // check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // append to list
  todoList.appendChild(todoDiv)
  // clear todo input value
  todoInput.value = '';
}

// deliting and check
function deleteCheck(e) {
  // console.log(e.target);
  const item = e.target;
  // delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

  // check mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('done');
  }
}

// filter status todo
function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(todos);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'done':
        if (todo.classList.contains('done')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'undone':
        if (!todo.classList.contains('done')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

// search
function searchFilter() {
  let search = searchInput.value;
  let divTodo = todoList.querySelectorAll('.todo ');

  for (let i = 0; i < divTodo.length; i++) {
    let li = divTodo[i].querySelector('.todo-item');
    let txtValue = li.textContent || li.innerText;

    if (txtValue.indexOf(search) > -1) {
      divTodo[i].style.display = 'flex';
    } else {
      divTodo[i].style.display = 'none';
    }
  };
};





