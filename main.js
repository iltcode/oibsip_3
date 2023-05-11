const inputTitle = document.querySelector("#title");
const inputDescription = document.querySelector("#description");
const unorderList = document.querySelector("#list");
const unorderCompleted = document.querySelector("#listCom");

function taskAdder() {
    if(inputTitle.value === ''){
        alert("Write something!");
    } else {
        let li = document.createElement("li");
        let divText = document.createElement("input");
		divText.classList.add("mainText");
		divText.type = "text";
		divText.value = inputTitle.value;
		divText.setAttribute('readonly', 'readonly');
        unorderList.appendChild(li);
        let divDelete = document.createElement("div");
        divDelete.classList.add("delete");

        let inputDes = document.createElement("textarea");
        inputDes.classList.add("desc");
        inputDes.type = "text"
        inputDes.value = inputDescription.value;
        inputDes.setAttribute('readonly', 'readonly');

        divDelete.innerHTML = "\u00d7";
        let butEdit = document.createElement("button");
        butEdit.innerHTML = "Edit";
        butEdit.classList.add("edit");
        let divSecription = document.createElement("div");
        divSecription.innerHTML = "Desc";
        divSecription.classList.add("descBut");
        divSecription.appendChild(inputDes);
        li.appendChild(divText);
        li.appendChild(butEdit);
        li.appendChild(divSecription);
        li.appendChild(divDelete);

        butEdit.addEventListener("click", function(e){
            if (butEdit.innerText.toLowerCase() == "edit") {
                butEdit.innerText = "Save";
                divText.removeAttribute("readonly");
                divText.focus();
            } else {
                butEdit.innerText = "Edit";
				divText.setAttribute("readonly", "readonly");
            }
        }, false);

        inputDes.addEventListener("click", function(e){
            inputDes.removeAttribute("readonly");
            inputDes.focus();
        }, false);
    } 
    inputTitle.value = '';
    inputDescription.value = '';

    
}

unorderList.addEventListener("click", function(e){
    if(e.target.className === "mainText"){

        let liCom = e.target.parentElement;
        unorderCompleted.appendChild(liCom);
    } else if(e.target.className === "delete") {
        e.target.parentElement.remove();
    }
}, false);



unorderCompleted.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        
    } else if(e.target.className === "delete") {
        e.target.parentElement.remove();
    }
}, false);





