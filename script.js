const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("You must add a task!")
    } else {
        //here i have created the checkbox
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("check-box");
        checkBox.addEventListener("change", onTaskCompleted);
        //a list element which appears whenever i click the add button
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        li.appendChild(checkBox);
        // a span element holding the cross sign
        let span = document.createElement("span");
        span.innerHTML = "&#215";
        li.appendChild(span);
        span.addEventListener("click", remove);

    }
    inputBox.value = "";
    saveData();
};

// This function adds the strike-through whenever the checkbox is checked and unchecked.
function onTaskCompleted(event) {
    const checkBox = event.target;
    const li = checkBox.parentNode;

    if (checkBox.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
    saveData();
};

//this removes the task whenever the cross is clicked as from the event listener.
function remove(event) {
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    saveData();
};

//saving data to the local storage.
function saveData() {
     localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));
    };
    

// function showTask() {
//     listContainer.innerHTML = JSON.parse(localStorage.getItem("data"));

// }
// showTask();

