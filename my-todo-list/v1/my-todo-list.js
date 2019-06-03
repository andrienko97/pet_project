(function() {
    const addTask = window.document.getElementById('list-controls-task-add-btn');
    const taskTitle = window.document.getElementById('list-controls-task-title');
    const tasksList = window.document.getElementById('tasks-list');
    const taskItemCloseBtn = window.document.getElementsByClassName('task-item-close-btn');
    const taskItems = window.document.getElementsByClassName('task-item');
    let selectedItem; // Текущий выбраный элемент
    
    addTask.addEventListener('click', addItem)
    
    function addItem() {
        if (taskTitle.value === '') {
            return;
        };
    
        const taskItem = document.createElement('div'); // <div class="task-item">
        const taskItemTitle = document.createElement('div'); // <div class="task-item-title">Тестовая задача</div>
        const taskItemCloseBtn = document.createElement('div'); // <div class="task-item-close-btn">
    
        // Добавить классы
        taskItem.setAttribute('class', 'task-item');
        taskItemTitle.setAttribute('class', 'task-item-title');
        taskItemCloseBtn.setAttribute('class', 'task-item-close-btn');
    
        // Удаляет добавленные задачи 
        taskItemCloseBtn.addEventListener('click', removeItem);
    
        // Создать задачу
        taskItem.appendChild(taskItemTitle);
        taskItem.appendChild(taskItemCloseBtn);
    
        // Зачеркивает добавленые задачи 
        taskItem.addEventListener('click', toggleClosedClass);
        taskItem.addEventListener('click', toggleSelectedClass);
    
        taskItemTitle.innerText = taskTitle.value;
    
        // Добавить в дом
        tasksList.appendChild(taskItem);
    
        taskTitle.value = '';
    };
    
    // По нажатию Enter задача попадает в tasks-list
    taskTitle.addEventListener('keydown', function (e) {
        if (e.code == 'Enter') {
            addItem();
        }
    });
    
    // Удалить встроенные задачи
    for (let i = 0; i < taskItemCloseBtn.length; i++) {
        taskItemCloseBtn[i].addEventListener('click', removeItem);
    };
    
    // Зачеркнуть встроенные задачи
    for (let i = 0; i < taskItems.length; i++) {
        taskItems[i].addEventListener('click', toggleClosedClass);
        taskItems[i].addEventListener('click', toggleSelectedClass);
    };
    
    function removeItem(ctx) {
        ctx.target.parentNode.remove();
    };
    
    function toggleClosedClass(ctx) {
        ctx.target.parentNode.classList.toggle('task-item-closed');
    };
    
    function toggleSelectedClass(ctx) {
        if (selectedItem === ctx) {
            return;
        }
        if (selectedItem) {
            selectedItem.target.parentNode.classList.remove('task-item-selected');
        }
        selectedItem = ctx;
        ctx.target.parentNode.classList.add('task-item-selected');
    };
}());
