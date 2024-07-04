const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value==''){
        alert('No Input!!!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.title = "Delete Task";
        li.appendChild(span);

        setTimeout(() => {
            li.classList.add("show");
        }, 10);
    }
    inputBox.value ="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

inputBox.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addTask();
    }
});

document.addEventListener('keydown', function(event){
    if(event.key === "Delete"){
        let checkedItem = document.querySelectorAll("li.checked");
        checkedItem.forEach(item => {
            item.remove();
        });
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
document.querySelectorAll("li").forEach(item => item.classList.add("show"));
}

showData();