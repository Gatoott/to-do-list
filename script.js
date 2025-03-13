const inputBox = document.getElementById("input")
const listC = document.getElementById("listC")

function addTask() {
    if(inputBox.value == '') {
        alert("isi hela atuh kacaq")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listC.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

    listC.addEventListener("click", function(e) {

    if(e.target.tagName=== "LI") {
    
    e.target.classList.toggle("checked");
    
    } else if(e.target.tagName === "SPAN") {
    
    e.target.parentElement.remove();
    
    
    
    saveData();
    
    
    
    }
    
     }, false);
     function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    }

     showTask