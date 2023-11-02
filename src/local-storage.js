import { createTask } from "./create-task"


const clearBtn = () => {
    const clearButton = document.createElement("button")
    clearButton.classList.add("clear-btn")
    clearButton.textContent = "Clear"
    const formListContainer = document.querySelector(".form-list-container")
    clearButton.addEventListener("click", () => {
        localStorage.clear()
        location.reload()
    })
    formListContainer.appendChild(clearButton)

}


const getLocalStorageTasks = () => {
    
    const storedTasks = JSON.parse(localStorage.getItem("task")) || []
    for (let i = 0; i < storedTasks.length; i++) {
        const contentDiv = document.querySelector("#content")
        const formListContainer = document.querySelector(".form-list-container")
        
        const oldTask = new createTask(storedTasks[i].title, storedTasks[i].description, storedTasks[i].dueDate)
        
        //creating divs to append task to.
        const listLeft = document.createElement("div")
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const taskTitle = document.createElement("div")
        const taskDescription = document.createElement("div")
        const taskDueDate = document.createElement("div")
        const taskPriority = document.createElement("input")
        const importantSpan = document.createElement("span")
        const DueDatePriorityContainer = document.createElement("div")
        
        taskTitle.textContent = oldTask.title
        taskDescription.textContent = oldTask.description
        taskDueDate.textContent = oldTask.dueDate
        importantSpan.innerHTML = "<em>important?</em>"
        taskPriority.setAttribute("id", "priority")
        taskPriority.setAttribute("type", "checkbox")
        taskPriority.classList.add("important-checkbox")
        listLeft.classList.add("list-left")
        li.classList.add("todo-list")
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
          

    }
}




export { getLocalStorageTasks, clearBtn }