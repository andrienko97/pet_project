(function () {
    const openedTaskList = createTaskList();
    const addBtn = window.document.getElementById('list-controls-task-add-btn');
    const taskTitle = window.document.getElementById('list-controls-task-title');
    const taskListElement = window.document.getElementById('tasks-list');

    taskListFromServer = [
        '1 task',
        '2 task',
        '3 task',
        '4 task',
        '5 task',
        '6 task',
        '7 task',
    ]

        .forEach(function (task) {
            openedTaskList.addTask(createTask(task));
        });

    addBtn.addEventListener('click', function () {
        if (taskTitle.value === '') {
            return;
        }
        openedTaskList.addTask(createTask(
            taskTitle.value
        ));

        openedTaskList.render(taskListElement);
        taskTitle.value = '';
    });
    openedTaskList.render(taskListElement)
}());
