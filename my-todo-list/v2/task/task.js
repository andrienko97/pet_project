let _taskId = 0;

const _task = {
    id: 0,
    title: '',
    isClosed: false,
    isSelected: false,
    setSelected: function() {
        this.isSelected = true;
    },
    setClosed: function() {
        this.isClosed = !this.isClosed
    },
    render: function() {
        const taskItem = document.createElement('div'); // <div class="task-item">
        const taskItemTitle = document.createElement('div'); // <div class="task-item-title">Тестовая задача</div>
        const taskItemCloseBtn = document.createElement('div'); // <div class="task-item-close-btn">
    
        // Добавить классы
        taskItem.setAttribute('class', 'task-item');
        taskItemTitle.setAttribute('class', 'task-item-title');
        taskItemCloseBtn.setAttribute('class', 'task-item-close-btn');

        if (this.isSelected) {
            taskItem.classList.add('task-item-selected')
        }

        if (this.isClosed) {
            taskItem.classList.add('task-item-closed')
        }

        taskItemTitle.innerText = this.title;

        // Создать задачу
        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemCloseBtn);

        return taskItem;
    }
}

function createTask(title) {
    const newTask = Object.assign({}, _task)
    newTask.title = title;
    newTask.id = _taskId++;

    return newTask;
}
