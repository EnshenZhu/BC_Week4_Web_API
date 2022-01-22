var taskIdCounter=0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function() {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    // why return false here???
    return false;
  }
  
  //package up data as an object
  var taskDataObj={
    name:taskNameInput,
    type:taskTypeInput
  };  

  //send it as an argument to createTaskEl
  createTaskEl(taskDataObj);

  // reset the form
  formEl.reset();
  // document.querySelector("#save-task").textContent="Add more task";
};

var createTaskEl=function(taskDataObj){
  // create list item
  // the [list item] is the light blue box on the page
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  // add task id as a coutom attribute
  listItemEl.setAttribute("data-task-id",taskIdCounter)

  // create div to hold task info and add to list item
  // the [task info] is the content inside the light blue box
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  var taskActionEl=createTaskActions(taskIdCounter);
    
  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  listItemEl.appendChild(taskActionEl);

  // increase task counter for next unique id
  taskIdCounter++;
}

var createTaskActions=function(taskId){
  var actionContainerEl=document.createElement('div');
  actionContainerEl.className="task-action";

  //create edit buttion
  var editButtonEl=document.createElement("button");
  editButtonEl.textContent="Edit";
  editButtonEl.className="btn edit-btn";
  editButtonEl.setAttribute("data-task-id",taskId);

  actionContainerEl.appendChild(editButtonEl);

  // create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(deleteButtonEl);

  //create select dropdown
  var statusSelectEl=document.createElement("select");
  statusSelectEl.className="select-status";
  statusSelectEl.setAttribute("name","status-change");
  statusSelectEl.setAttribute("data-task-id",taskId);

  actionContainerEl.appendChild(statusSelectEl);
    
  // add contents to the select dropdown
  var statusChoices=["To Do","In Progress","Completed"];
  for (var i=0;i<statusChoices.length;i++){
    // create option element
    var statusOptionEl=document.createElement("option");
    statusOptionEl.textContent=statusChoices[i];

    // append to select
    statusSelectEl.appendChild(statusOptionEl);        
  }

  return actionContainerEl;
}

formEl.addEventListener("submit", taskFormHandler);
// console.dir(taskFormHandler);