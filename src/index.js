import { addATask, addTaskInputsToDom} from "./DOMEvents";
import { addProjectDOM, addAProject } from "./create-projects"
import { getLocalStorageTasks, clearBtn} from "./local-storage";

addTaskInputsToDom()
addATask()
addProjectDOM()
addAProject()
clearBtn()
getLocalStorageTasks()
