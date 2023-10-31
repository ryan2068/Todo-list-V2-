
const createTask = function(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    return { title, description, dueDate, priority }
}


const projectsFactory = function (name) {
    this.name = name
    return { name }
}



export {createTask, projectsFactory}


