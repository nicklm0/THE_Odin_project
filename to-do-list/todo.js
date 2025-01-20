const InputBox = document.getElementById("input-box");
const ListContianer = document.getElementById("list-container");
const completedCounter = document.getElementById("complete-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateContainers() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTask = document.querySelectorAll(".uncompleted").length;
    
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTask;
}

//create a addTask function

function addTask(){
    const task = InputBox.ariaValueMax.trim(); //get the input value
    if(!task){
        alert("Please write down a task")
    }
    return;
}


const li = document.createElement("li");

li.innerHTML = `
   <label>
   <input type="checkbox">
   <span>${task}</span>
   </label>

   <span class="edit-btn">Edit</span>
   <span class="delete-btn">Delete</span>

`;

ListContianer.appendChild(li);

//clear the input field

input.value = "";

//attatch event listeners to the new task

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector(span)
const deleteBtn = li.querySelector(".delete-btn");

//strike out the completed task

checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateContainers();
});


editBtn.addEventListener("click", function(){
    const update = prompt("Edit task:",taskSpan.textContent);
    if(update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
        checkbox.checked = false;
        updateContainers();  
    }
});

deleteBtn.addEventListener("click", function (){
    if(confirm("Are you sure you want to delete this tak")) {
            li.remove();
            updateContainers
    }
});


//adding task when pressing the Enter key
InputBox.addEventListener("key", function(event) {
    if(event.key === "enter"){
        addTask();
    }
})