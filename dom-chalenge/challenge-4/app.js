/**
 * Write your challenge solution here
 */
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

function isEmptyTask() {
    let getTotalTaks = document.querySelectorAll('.task-item ').length
    console.log(getTotalTaks);
    
    if (getTotalTaks >=  1) {   
        document.querySelector('.empty-list').style.display = 'none'
    } else {
        document.querySelector('.empty-list').style.display = 'block'
    }
}
addButton.addEventListener('click', () => {
    let inputValue = taskInput.value.trim();
    if (inputValue === '') {
        alert('pls enter you task')
        return;
    }
    addTask(inputValue);
    inputValue = ''
})

function addTask(inputValue) {

    taskList.innerHTML += `<li class="task-item ">
    <input class="complete-checkbox" type="checkbox">
    <span class="task-text">${inputValue}</span>
     <button class="delete-button">delete</button>
     </li>
     `
     isEmptyTask();
     taskCount();
}


taskList.addEventListener('click', function (event) {
    let target = event.target
    if (target.classList.contains('delete-button')) {
        let litsItem = target.closest('li');
        litsItem.remove();
        isEmptyTask()
        taskCount();
    }
    if (target.classList.contains('complete-checkbox')) {
        let taskText = target.closest('.task-item').querySelector(".task-text");
        taskText.classList.toggle("completed", event.target.checked);
        taskCount();
    }
})

function taskCount() {
    const totaleItem = document.querySelectorAll('.task-item').length
    const completTask = document.querySelectorAll('.complete-checkbox:checked').length
    totalTasks.innerText = `Total tasks: ${totaleItem}`;
    completedTasks.innerText = `Completed : ${completTask}`;
}
// isEmptyTask();
taskCount();
