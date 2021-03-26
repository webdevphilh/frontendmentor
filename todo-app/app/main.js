
function countTasks(){
    let container = document.getElementById("container").children.length;
    let count = document.getElementById("left-count");
    count.innerText = container + " items left";
}
function countTasks(){
    let container = document.getElementById("container").children.length;
    let count = document.getElementById("left-count");
    count.innerText = container + " items left";
}
function genTask(){
    let task = document.getElementById("task");
    let containerDiv = document.querySelector("#container");
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.setAttribute("id", task.value);
    containerDiv.appendChild(itemDiv);

    itemDiv.innerHTML =  " <input onclick=\"checkedTask(`"+ task.value +"`)\" type=\"checkbox\" name=\" " + task.value + " \" >  ";
    itemDiv.innerHTML += "<label for=\" "+ task.value +" \"> "+ task.value +" </label>";
    itemDiv.innerHTML += "<button   onclick=\"deleteTask(`" + task.value + "`)\" \
                                    aria-label=\"check: "+ task.value +"\">\
                                    <img src=\"./images/icon-cross.svg\" alt=\"X\">\
                        </button>";

    countTasks();
}
function switchTheme() {
    let themeSwitch = document.getElementById("theme-switch");
    if ( html.dataset.theme === `theme-light`){
        themeSwitch.src = "./images/icon-sun.svg";
        html.dataset.theme = `theme-dark`;
    }
    else{
        themeSwitch.src = "./images/icon-moon.svg";
        html.dataset.theme = `theme-light`;
        }
}
function deleteTask(taskId){
    let task = document.getElementById(taskId);
    task.parentNode.removeChild(task);
    countTasks();
}

// -- init count
countTasks();
// -- theme switch
const html = document.querySelector('html');
html.dataset.theme = `theme-light`;
// --



function checkedTask(taskId){
    let task = document.getElementById(taskId).children[1]; // div > label
    if(task.style.textDecoration == "line-through"){
        task.style.textDecoration  = "none";
    }
    else{
        task.style.textDecoration  = "line-through";
    }
    countTasks();
}



/***
 * - generate new task          -- done
 * - item counter               -- done
 * - delete task with x button  -- done
 * - item checked 
 * - clear completed funktion
 * - filter (active, all, completed)
 * 
 * repair:
 * - check if task is already there
 * - set text color in checkedTask() to theme color (task.style.color is empty)
 * - dont count checked tasks
 */