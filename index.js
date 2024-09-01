// Wait for the DOM to load 
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'sign-in.html' || currentPage === 'sign-up.html') {
        setupAuthPage(); 
    } else if (currentPage === 'welcome.html') {
        displayWelcomeMessage(); 
    } else if (currentPage === 'create-task.html') {
        setupCreateTaskPage(); 
    } else if (currentPage === 'task-list.html') {
        setupTaskListPage(); 
    }
});

////////////////////////////////////////////
// Authentication Pages (Sign-In, Sign-Up)
////////////////////////////////////////////

//  save the username to localStorage 

function setupAuthPage() {
   
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;

        if (username) {
            localStorage.setItem('username', username); // Save username to localStorage
            window.location.href = 'welcome.html'; // Redirect to the welcome page
        }
    });
}

////////////////////////////////////////////
// Welcome Page
////////////////////////////////////////////

//  get the username from localstorage

function displayWelcomeMessage() {
    const username = localStorage.getItem('username');
    
    const welcomeMessage = document.getElementById('welcome-message');

    if (username && welcomeMessage) {
        welcomeMessage.textContent = `Welcome, ${username}!`;
    }
}

////////////////////////////////////////////
// Task Creation Page
////////////////////////////////////////////

function setupCreateTaskPage() {
    
    const taskForm = document.getElementById('task-form');

    
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Get the values from the form inputs
        const taskName = document.getElementById('task-name').value;
        const taskDate = document.getElementById('task-date').value;
        const taskPriority = document.getElementById('task-priority').value;

        // If all fields are filled, create a new task object
        if (taskName && taskDate && taskPriority) {
            const tasks = getTasksFromLocalStorage(); 
            const newTask = {
                id: Date.now(), 
                name: taskName, 
                date: taskDate, 
                priority: taskPriority, 
                done: false 
            };
            tasks.push(newTask); 
            saveTasksToLocalStorage(tasks); 
            window.location.href = 'task-list.html'; 
        }
    });
}

////////////////////////////////////////////
// Task List Page
////////////////////////////////////////////

function setupTaskListPage() {
    // Select the task list element where tasks will be displayed
    const taskListElement = document.getElementById('task-list');
    
    const filterButtons = document.querySelectorAll('.filter-buttons button');

    // get tasks from localStorage and display them
    let tasks = getTasksFromLocalStorage();
    displayTasks(tasks);

    // filtering 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            let filteredTasks = tasks;

            // (All, Done, Not Done)
            if (filter === 'done') {
                filteredTasks = tasks.filter(task => task.done);
            } else if (filter === 'not-done') {
                filteredTasks = tasks.filter(task => !task.done);
            }

            displayTasks(filteredTasks); 
        });
    });

    // toggle checking/unchecking
    taskListElement.addEventListener('click', (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const taskId = event.target.closest('.task-item').dataset.id;
            tasks = tasks.map(task => {
                if (task.id == taskId) {
                    task.done = !task.done; 
                }
                return task;
            });
            saveTasksToLocalStorage(tasks); 
            displayTasks(tasks); 
        }
    });
}

////////////////////////////////////////////
//  Functions
////////////////////////////////////////////

// get tasks from localStorage
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Display tasks in the task list
function displayTasks(tasks) {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = ''; // Clear the current task list

    // create task elements
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${task.done ? 'done' : ''}`;
        taskItem.dataset.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

        const taskName = document.createElement('p');
        taskName.textContent = task.name;

        const taskDate = document.createElement('small');
        taskDate.textContent = `Due: ${task.date}`;

        taskDetails.appendChild(taskName);
        taskDetails.appendChild(taskDate);

        const priorityLabel = document.createElement('span');
        priorityLabel.className = `priority priority-${task.priority}`;
        priorityLabel.textContent = task.priority;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskDetails);
        taskItem.appendChild(priorityLabel);

        taskListElement.appendChild(taskItem);
    });
}
