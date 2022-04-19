document.body.appendChild(makeLayout());

const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const saveBtn = document.querySelector(".send-button");
const ul = document.querySelector("ul");

input.addEventListener("input", () => isAvailableButton(saveBtn));

const messageObj = mesObj();
appendLiItemsToUl(ul,loadFromLocalStorage())
function mesObj() {
    const mesObj = loadFromLocalStorage();

    function add(key) {
        mesObj[" " + key] = key;
    }
    function remove(key) {
        delete mesObj[key];
    }
    function show() {
        console.log(mesObj)
    }

    function obj() {
        return mesObj;
    }
    return { add, remove, show, obj }
};

function loadFromLocalStorage(){
    let data = localStorage.getItem("obj");
    const obj = {};
    try{
        data = JSON.parse(data);
    }catch{
        console.log("Ошибка данных");
        return {};
    }
    for (const key in data) {
        obj[key] = key;
    }
    return obj;
}

function appendLiItemsToUl(ul,data){
    if(!data){
        console.log("Нечего добавлять");
    }
    for(const key in data){
        ul.appendChild(createLi(key))
    }
}


input.addEventListener("input", () => isAvailableButton(saveBtn));


wrapper.addEventListener("click", e => {
    const target = e.target;
    if (target.className.includes("send-button")) {
        sendButton(input.value);
        input.value = "";
        isAvailableButton(saveBtn);
    };
    if (target.className.includes("delete-button")) {
        deleteButton(target);
    }
})


function deleteButton(target) {
    const li = target.parentElement;
    const span = target.previousSibling;
    messageObj.remove(span.textContent);
    localStorage.setItem("obj", JSON.stringify(messageObj.obj()));
    li.remove();

}

function sendButton(value) {
    messageObj.add(value);
    ul.appendChild(createLi(value));
    localStorage.setItem("obj", JSON.stringify(messageObj.obj()));
}

function isAvailableButton(target) {
    target.disabled = !Boolean(input.value);
    if (target.disabled) {
        target.classList.add("btn-secondary");
    } else {
        target.classList.remove("btn-secondary");
    };

}




function createLi(value) {
    const li = createElement("li", "li-item");
    const span = createElement("span", "li-span");
    const delteButton = createElement("button", "delete-button");

    li.classList.add("list-group-item");

    span.textContent = value;


    delteButton.textContent = "Удалить";
    delteButton.classList.add("btn-danger");



    li.appendChild(span);
    li.appendChild(delteButton);
    return li;
}

function createElement(type, className) {
    const el = document.createElement(type);
    el.classList.add(className);
    return el;
}

function makeLayout() {
    const TYPE_ARR = ["div", "form", "input", "button", "ul"];
    const CLASS_NAME = ["wrapper", "form", "save-input", "send-button", "ul-list"];

    const DOM_ARR = TYPE_ARR.map((item, i) => createElement(item, CLASS_NAME[i]));

    //input
    DOM_ARR[2].placeholder = "Введите текст";

    //button
    DOM_ARR[3].textContent = "Отправить";
    DOM_ARR[3].classList.add("btn-primary");
    DOM_ARR[3].classList.add("btn-secondary");
    DOM_ARR[3].type = "button";
    DOM_ARR[3].disabled = true;

    //ul
    DOM_ARR[4].classList.add("list-group");


    //делаю DOM дерево
    DOM_ARR[1].appendChild(DOM_ARR[2]);
    DOM_ARR[1].appendChild(DOM_ARR[3]);

    DOM_ARR[0].appendChild(DOM_ARR[1]);
    DOM_ARR[0].appendChild(DOM_ARR[4]);

    return DOM_ARR[0];
}