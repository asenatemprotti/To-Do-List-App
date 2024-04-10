const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) return;

    addTask(input.value);
    input.value = '';
});

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-times-circle', 'delete-icon');
    deleteIcon.addEventListener('click', () => {
        listItem.remove();
    });
    listItem.appendChild(deleteIcon);

    list.appendChild(listItem);
}

list.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
        e.target.parentElement.classList.toggle('completed');
    }
});
