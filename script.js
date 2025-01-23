const textbox = document.getElementById("textbox");
const plusbtn = document.getElementById("plusbtn");
const todoarea = document.getElementById("todoarea");

function addToDo() {
    if(textbox.value == ''){
        alert("내용을 입력해주세요"); //입력받은 값이 없을떄 경고창 날리기
    }else{
        let list = document.createElement("li");
        let del = document.createElement("button");

        list.innerHTML = textbox.value; //새로만든 li에 입력받은 값 더하기
        list.classList.add("nonechecked", "nonehide");

        todoarea.appendChild(list); //할일 영역에 list를 자식으로 넣기
        list.appendChild(del); //삭제버튼을 list자식으로 넣기

        del.innerText = "삭제";
        del.style.border = "none";
        del.style.backgroundColor = "#dc3545";
        del.style.borderRadius = "20%"
        del.style.color = "white"
        del.style.fontSize = "15px"
        del.style.marginLeft = "5px"
        del.addEventListener("click", deleteList);

        textbox.value = "";
        textbox.focus();

        list.addEventListener("click", () => {
            if (list.classList.contains("nonechecked")) {
                list.classList.remove("nonechecked");
                list.classList.add("onchecked");
                list.classList.remove("nonehide");
                list.classList.add("onhide");
                list.style.textDecoration = "line-through";
                list.style.backgroundColor = "rgb(69, 246, 119)";
            } else if (list.classList.contains("onchecked")) {
                list.classList.remove("onchecked");
                list.classList.add("nonechecked");
                list.classList.remove("onhide");
                list.classList.add("nonehide");
                list.style.textDecoration = "none";
                list.style.backgroundColor = "white";
            }
        });
    }
}

function deleteList(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
}

function showAll() {
    const allItems = todoarea.querySelectorAll("li");
    allItems.forEach(item => {
        item.style.display = ""; 
    });
}

function showIncomplete() {
    const allItems = todoarea.querySelectorAll("li");
    allItems.forEach(item => {
        if (item.classList.contains("nonechecked")) {
            item.style.display = ""; 
        } else {
            item.style.display = "none"; 
        }
    });
}

function showComplete() {
    const allItems = todoarea.querySelectorAll("li");
    allItems.forEach(item => {
        if (item.classList.contains("onchecked")) {
            item.style.display = ""; 
        } else {
            item.style.display = "none"; 
        }
    });
}

