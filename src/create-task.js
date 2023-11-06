
const createTask = function(title, description, dueDate, priority, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
    return { title, description, dueDate, priority, project }
}


const projectsFactory = function (name) {
    this.name = name
    return { name }
}



export {createTask, projectsFactory}


