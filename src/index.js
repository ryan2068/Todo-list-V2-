import { addATask, addTaskInputsToDom} from "./DOMEvents";
import { addProjectDOM, addAProject } from "./create-projects"
import { getLocalStorageTasks, getLocalStorageProjects ,clearBtn} from "./local-storage";

addTaskInputsToDom()
addATask()
addProjectDOM()
addAProject()
clearBtn()
getLocalStorageTasks()
getLocalStorageProjects()
