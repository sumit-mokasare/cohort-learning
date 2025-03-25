const title = document.getElementById('boardTitle');
const ColorInput = document.getElementById('ColorInput');
const submit = document.getElementById('submit');
// task model input 
const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
let addTask = document.getElementById('addTask');

//  edit varible 
let editingBoardTitle = null;
let editingTaskIndex = null;

//  dragger varible 
let draggedTask = null;
let draggedFromBoard = null;
let draggedTaskIndex = null;

let boardData = JSON.parse(localStorage.getItem('board')) || [];

submit.addEventListener('click', () => {
    let boardObj = {
        title: title.value,
        ColorInput: ColorInput.value,
        task: []
    }

    if (invlid(title) && invlid(ColorInput)) {
        let isExistBoard = boardData.find((item) => item.title === boardObj.title)
        if (isExistBoard) {
            changeErroMsg(title, 'board is Exists')
            return
        }
        let isExistColor = boardData.find((item) => item.ColorInput === boardObj.ColorInput)
        if (isExistColor) {
            changeErroMsg(ColorInput, 'color is Exists')
            return
        }

        boardData.push(boardObj)
        localStorage.setItem('board', JSON.stringify(boardData));
        displayBoard();
        clearInput(title, ColorInput);
        let boardModal = document.getElementById("exampleModalToggle");
        closeModal(boardModal)
    }
})



function displayBoard() {
    document.getElementById('row-Container').innerHTML = '';
    let str = ''
    boardData.forEach((element, boardIndex) => {
        str += `
            <div class="col-md-4 col-sm-2 col-lg-3 p-2" 
            data-name="${element.title}"
            ondragover="allowDrop(event)" 
            ondrop="drop(event, '${element.title}')"
            >
                <div
                    class="tital text-white card-header rounded-2 m-1 d-flex justify-content-between align-items-center">
                    <span class="color" style="background-color:${element.ColorInput}";></span>
                    <div>
                        <strong class="mx-5" id="title">${element.title}</strong>
                        <span class="totalTaskCount">${element.task.length}</span>
                    </div>
                </div>
                <div class="task-container position-relative mt-2">
                    <div class="task-content">
                        ${element.task.map((task, index) =>
            `
                        <div class="card-body  rounded-2 p-2 position-relative" 
                        id="task-${boardIndex}-${index}" 
                        draggable="true" 
                        ondragstart="drag(event, '${element.title}', ${index})">

                            <div class="card mb-2 p-2">
                                <h6 class="card-title">${task.taskTitle}</h6>
                                <div class="card-text">${task.taskDescription}</div>
                                <div class="d-flex card-link gap-2 justify-content-between align-items-center mt-1">
                                    <span class="text-secondary time"  data-timestamp="${task.createdAt}">${timeAgo(task.createdAt)}</span>
                                    <div>
                                        <a class="edit" data-board="${element.title}" data-index="${index}"><ion-icon class="fs-5" name="create-outline"></ion-icon></a>
                                        <a class="delete text-danger" data-board="${element.title}" data-index="${index}"><ion-icon class="fs-5"
                                                name="trash-outline"></ion-icon></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                           
                         `).join('')}
                    </div>

                    <button data-bs-target="#TaskModal" data-bs-toggle="modal"
                        class="addTaskButton bg-dark-subtle btn btn-sm bottom-0 position-absolute mb-2 mt-1">+ Add
                        Task</button>
                </div>
            </div>
        `
    });
    document.getElementById('row-Container').innerHTML = str;

    const addTaskButton = document.querySelectorAll('.addTaskButton');
    addTaskButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            let parentEl = button.closest('[data-name]')
            let parentDataName = parentEl ? parentEl.getAttribute('data-name') : null;

            addTaskData(parentDataName)
            openTaskModal(false, parentDataName);
        })
    })
    document.querySelectorAll('.edit').forEach((editButton) => {
        editButton.addEventListener('click', () => editTask(editButton))
    })
    document.querySelectorAll('.edit').forEach((editButton) => {
        editButton.addEventListener('click', () => editTask(editButton))
    })
    document.querySelectorAll('.delete').forEach((deleteTaskButton) => {
        deleteTaskButton.addEventListener('click', () => deleteTask(deleteTaskButton.getAttribute("data-board"), deleteTaskButton.getAttribute("data-index")))
    })
}
displayBoard();

// Called when dragging starts
function drag(event, boardTitle, taskIndex) {
    draggedTask = boardData.find(board => board.title === boardTitle).task[taskIndex];
    draggedFromBoard = boardTitle;
    draggedTaskIndex = taskIndex;

    event.dataTransfer.setData("text/plain", JSON.stringify({ boardTitle, taskIndex }));
}

// Called when the dragged item is over a drop zone
function allowDrop(event) {
    event.preventDefault();
}

// Called when the dragged item is dropped
function drop(event, targetBoardTitle) {
    event.preventDefault();

    if (!draggedTask || !draggedFromBoard) return;
    let fromBoard = boardData.find(board => board.title === draggedFromBoard);
    let toBoard = boardData.find(board => board.title === targetBoardTitle);

    if (!fromBoard || !toBoard) return;

    // Remove the task from the original board
    fromBoard.task.splice(draggedTaskIndex, 1);

    // Add the task to the new board
    toBoard.task.push(draggedTask);

    // Update localStorage
    localStorage.setItem("board", JSON.stringify(boardData));

    // Refresh UI
    displayBoard();

    // Reset variables
    draggedTask = null;
    draggedFromBoard = null;
    draggedTaskIndex = null;
}


// edit and show model functions
function openTaskModal(isEdit, boardTitle, editTaskTitle = "", editTaskDescription = "", taskIndex = null) {
    const modalLabel = document.getElementById("exampleModalToggleLabel");
    if (isEdit) {
        modalLabel.textContent = "Edit Task";
        addTask.textContent = "Update Task";
        taskTitle.value = editTaskTitle;
        taskDescription.value = editTaskDescription;

        editingBoardTitle = boardTitle;
        editingTaskIndex = taskIndex;
        addTaskData();
    } else {
        modalLabel.textContent = "Add Task";
        addTask.textContent = "Add Task";
        taskTitle.value = "";
        taskDescription.value = "";

        editingBoardTitle = boardTitle;
        editingTaskIndex = null;
    }

}
function editTask(editButton) {
    let boardTitle = editButton.getAttribute("data-board");
    let taskIndex = parseInt(editButton.getAttribute("data-index", 10));
    console.log(boardTitle, taskIndex);

    let board = boardData.find(board => board.title === boardTitle);
    if (!board) return
    let task = board.task[taskIndex]

    openTaskModal(true, boardTitle, task.taskTitle, task.taskDescription, taskIndex)

    let myModal = new bootstrap.Modal(document.getElementById("TaskModal"));
    myModal.show();
}

// delete task function 

function deleteTask(boardTitle, taskIndex) {
    let board = boardData.find((item) => item.title === boardTitle)
    let isdaletOrNot = prompt('are you sure? you want to delete this task if you want delete type yes eles No')
    console.log(isdaletOrNot);
    let userMsg = isdaletOrNot ? isdaletOrNot.toLowerCase() : ''
    if (!userMsg || userMsg === 'no' || userMsg === null ) {
        console.log('run ');
        
        return false
    } else {
        if (board) {
            board.task.splice(taskIndex, 1)
        }
    }

    localStorage.setItem("board", JSON.stringify(boardData));
    displayBoard();
}

// add task function 


function addTaskData(parentDataName) {

    let newAddTaskButton = addTask.cloneNode(true);
    addTask.parentNode.replaceChild(newAddTaskButton, addTask);
    addTask = newAddTaskButton; // Reassign the new button


    addTask.addEventListener('click', () => {
        // console.log('parent data name', parentDataName);
        if (invlid(taskTitle) && invlid(taskDescription)) {
            if (taskDescription.value.trim().split(' ').length < 5) {
                changeErroMsg(taskDescription, 'description is to sort pleas enter atlist 5 letter')
                return
            }

            let taskObj = {
                taskTitle: taskTitle.value.trim(),
                taskDescription: taskDescription.value.trim(),
                createdAt: new Date().toISOString()
            }
            console.log('ajdfajfh');

            if (editingTaskIndex !== null && editingBoardTitle !== null) {
                // If editing, update the existing task
                const boardIndex = boardData.findIndex(board => board.title === editingBoardTitle);
                if (boardIndex !== -1 && editingTaskIndex < boardData[boardIndex].task.length) {
                    boardData[boardIndex].task[editingTaskIndex] = taskObj;
                }
            } else {
                const index = boardData.findIndex(item => item.title === parentDataName);
                if (index !== -1) {
                    boardData[index].task.push(taskObj);
                }
            }

            localStorage.setItem('board', JSON.stringify(boardData))
            clearInput(taskTitle, taskDescription);
            displayBoard();
            closeModal(document.getElementById("TaskModal"))

            editingTaskIndex = null;
            editingBoardTitle = null;
            addTask.textContent = "Add Task";
        }
    })
}

// time funcnality  

function timeAgo(timestamp) {
    // console.log(timestamp);

    let now = new Date();
    let past = new Date(timestamp);
    let seconds = Math.floor((now - past) / 1000);
    // console.log(seconds);

    let intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (let unit in intervals) {
        let count = Math.floor(seconds / intervals[unit]);
        if (count >= 1) {
            return count + " " + unit + (count > 1 ? "s" : "") + " ago";
        }
    }
    return "Just now";
}

// updata time every 60 s 
function updateTimeAgo() {
    document.querySelectorAll(".time").forEach((timeElement) => {
        let timestamp = timeElement.getAttribute("data-timestamp");
        if (timestamp) {
            timeElement.textContent = timeAgo(timestamp);
        }
    });
}

// Call the function every 60 seconds to update times
setInterval(updateTimeAgo, 60000);


function changeErroMsg(arg, msg) {
    arg.classList.remove('is-valid')
    arg.classList.add('is-invalid')
    arg.nextElementSibling.innerText = msg
}

function clearInput(input, color) {
    title.value = ''
    taskTitle.value = ''
    taskDescription.value = ''
    if (input && color) {
        // console.log('ho gay log');
        input.classList.remove('is-valid')
        color.classList.remove('is-valid')
    }
}

function closeModal(modal) {
    let modalInstance = bootstrap.Modal.getInstance(modal); // Get existing modal instance
    if (modalInstance) {
        modalInstance.hide();
        // console.log('is this run or not');
        return
    }
}

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('hidden.bs.modal', function () {
        // console.log('hoo gaya calll');
        clearInput();

        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.remove();
        });
        document.body.classList.remove('modal-open');

        editingBoardTitle = null;
        editingTaskIndex = null;

        // Reset button text to 'Add Task'
        addTask.textContent = "Add Task";
    });
})

function invlid(arg) {
    if (arg.value == '') {
        arg.classList.add("is-invalid");
        arg.classList.remove("is-valid");
        return false;
    } else {
        arg.classList.remove("is-invalid");
        arg.classList.add("is-valid");
        return true;
    }
}




