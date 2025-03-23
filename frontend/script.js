const apiUrl = "http://127.0.0.1:8000/api/tasks/";

// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchTasks();
});

// Handle task form submission
document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-desc").value;

    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, completed: false })
    })
    .then(response => response.json())
    .then(() => {
        fetchTasks();
        document.getElementById("task-form").reset();
    });
});

// Fetch and display tasks
function fetchTasks() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task.title} - ${task.description} 
                <button class="delete-btn" onclick="deleteTask(${task.id})">❌</button>
            `;
            taskList.appendChild(li);
        });
    });
}

// Delete a task
function deleteTask(id) {
    fetch(`${apiUrl}${id}/`, { method: "DELETE" })
    .then(() => fetchTasks());
}
