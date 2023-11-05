import { projectsFactory } from "./create-task"
const contentDiv = document.querySelector("#content")
const projectsContainer = document.createElement("div") 
projectsContainer.classList.add("projects-container")



const addProjectDOM = function () {
    //creates project variables
    const projectHeader = document.createElement("div")
    const projectForm = document.createElement("form")
    const projectInput = document.createElement("input")
    const projectSubmitBtn = document.createElement("button")
    const projectHome = document.createElement("button") 
    //dom manipulation
    projectHome.textContent = "Home"
    projectHome.classList.add("home-btn", "home-form-class")
    projectInput.classList.add("input-submit-btn", "project-input")
    projectSubmitBtn.classList.add("input-submit-btn", "submit-btn")
    projectSubmitBtn.textContent = ("Submit")
    projectInput.setAttribute("placeholder", "Add New Project?...")
    projectForm.classList.add("home-form-class")


    projectSubmitBtn.setAttribute("type", "submit")

    projectsContainer.appendChild(projectHome)
    projectForm.appendChild(projectInput)
    projectForm.appendChild(projectSubmitBtn)
    projectsContainer.appendChild(projectForm)
    contentDiv.appendChild(projectsContainer)
} 

const projectsArray = JSON.parse(localStorage.getItem('project')) || []

const addAProject = () => {
    const submitBtn = document.querySelector(".submit-btn")
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const projectInput = document.querySelector(".project-input").value
        
        const project = new projectsFactory(projectInput)
        
        const enteredProject = document.createElement("button")
        enteredProject.classList.add("entered-project")
        enteredProject.textContent = project.name


        li.classList.add("projects-list")
        li.appendChild(enteredProject)
        ul.appendChild(li)

        projectsContainer.appendChild(ul)
        projectsArray.push(project)
        localStorage.setItem("project", JSON.stringify(projectsArray))

        


    })
}

export {addProjectDOM, addAProject}