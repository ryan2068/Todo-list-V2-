import { createTask } from "./create-task"

const contentDiv = document.querySelector("#content")
const form = document.createElement("form")
const formListContainer = document.createElement("div")
formListContainer.classList.add("form-list-container")

const addTaskInputsToDom = () => {

    //Title input
    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "title")
    titleInput.setAttribute("placeholder", "Title of Task...")
    //Description input
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("id", "description")
    descriptionInput.setAttribute("placeholder", "Description of Task...")
    //DueDate input
    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("id", "dueDate")
    dueDateInput.setAttribute("placeholder", "DueDate...")

    //Submit button 
    const submitBtn = document.createElement("button")
    submitBtn.classList.add("submit")
    submitBtn.setAttribute("type", "submit")
    submitBtn.textContent = "Submit"
    
    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(dueDateInput)
    form.appendChild(submitBtn)
    formListContainer.appendChild(form)
    contentDiv.appendChild(formListContainer)  
}

const tasksArray = JSON.parse(localStorage.getItem('task')) || []


const addATask = (title, description, dueDate, priority) => {
    const submitBtn = document.querySelector(".submit")
    let count = 0
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const title = document.querySelector("#title").value
        const description = document.querySelector("#description").value
        const dueDate = document.querySelector("#dueDate").value
        const priority = document.querySelector("#priority")
        const items = []
        const task = new createTask (title, description, dueDate, priority, items)  

        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.classList.add("todo-list")
        
        //creating list details on submit
        const listLeft = document.createElement("div")
        const taskTitle = document.createElement("div")
        const taskDescription = document.createElement("div")
        const taskDueDate = document.createElement("div")
        const DueDatePriorityContainer = document.createElement("div")
        const taskPriority = document.createElement("input")
        const importantSpan = document.createElement("span")
        importantSpan.innerHTML = "<em>important?</em>"
        taskPriority.setAttribute("id", "priority")
        taskPriority.setAttribute("type", "checkbox")
        taskPriority.classList.add("important-checkbox")
        //setting list inputs as a ToDo list
        taskTitle.textContent = task.title
        taskDescription.textContent = task.description
        taskDueDate.textContent = task.dueDate
        taskPriority.textContent = task.priority

        

        listLeft.classList.add("list-left")
        DueDatePriorityContainer.classList.add("DueDatePriorityContainer")

        listLeft.appendChild(taskTitle)
        listLeft.appendChild(taskDescription)
        DueDatePriorityContainer.appendChild(taskDueDate)
        DueDatePriorityContainer.appendChild(importantSpan)
        DueDatePriorityContainer.appendChild(taskPriority)
        li.appendChild(listLeft)
        li.appendChild(DueDatePriorityContainer)

        ul.appendChild(li)
        formListContainer.appendChild(ul)
        contentDiv.appendChild(formListContainer)

        //add task to local-storage 
        tasksArray.push(task)
        items.push(tasksArray)
        localStorage.setItem("task", JSON.stringify(items))  
        
    })
    
}


export {addTaskInputsToDom, addATask, tasksArray}