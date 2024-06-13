const todoinput = document.getElementById('todoinput');
const addTodo = document.getElementById('addTodo');
const todoList = document.getElementById('todoList')


todoinput.addEventListener('keypress', ()=>{
    addTodo.disabled = false;
})

addTodo.addEventListener('click', todo);

todoinput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        todo();
    }
})

function todo() {
    const item = todoinput.value.trim();
    if(item !== ''){
        const li = document.createElement('li')
        li.textContent = item;
        todoList.appendChild(li);
        todoinput.value = '';
    }
}