
const createTask = function(title, description, dueDate, priority, items) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    items = []
    return { title, description, dueDate, priority, items }
}


const projectsFactory = function (name) {
    this.name = name
    return { name }
}



export {createTask, projectsFactory}


