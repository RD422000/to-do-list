// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    // Create task item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="toggleComplete(this)">Complete</button>
            <button class="remove" onclick="removeTask(this)">Remove</button>
        </div>
    `;
    
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
}

// Function to mark task as completed
function toggleComplete(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
