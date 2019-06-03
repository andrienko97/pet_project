const _taskList = {
    tasks: [],
    addTask: function (task) {
        this.tasks.push(task)
    },
    closeTask: function (id) {
        const newCloseTask = this.tasks.find(function (task) {
            return task.id === id;
        });

        if (newCloseTask) {
            newCloseTask.isClosed = true;
        }
    },
    selectTask: function (id) {
        this.tasks.forEach(function (task) {
            task.isSelected = false;
        });

        const newSelectTask = this.tasks.find(function (task) {
            return task.id === id;
        });

        if (newSelectTask) {
            newSelectTask.setSelected()
        }
    },
    removeTask: function (id) {
        this.tasks = this.tasks.filter(function (task) {
            return task.id !== id;
        })
    },
    render: function (renderElement) {
        const self = this;

        renderElement.innerText = '';

        this.tasks.forEach(function (task) {
            const taskElement = task.render();
            taskElement.addEventListener('click', function () {
                self.selectTask(task.id);
                task.setClosed();
                self.render(renderElement);
            })

            taskElement.getElementsByClassName('task-item-close-btn')[0]
                .addEventListener('click', function () {
                    self.removeTask(task.id)
                });

            renderElement.appendChild(taskElement);
        })
    }
}

function createTaskList() {
    const newTaskList = Object.assign({}, _taskList, { tasks: [] })

    return newTaskList
}