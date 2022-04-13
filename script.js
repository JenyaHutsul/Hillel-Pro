document.body.appendChild(makeLayout());

const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.type = "button";

wrapper.addEventListener("click", e =>{
    const target = e.target;
    if(target.className === "send-button") {
        console.log("@")
        sendButton(target)
    };
    
})

function sendButton(e){
    console.log(e);
}

function makeLayout(){
    const TYPE_ARR = ["div", "form", "input", "button", "ul"];
    const CLASS_NAME = ["wrapper", "form", "save-input", "send-button", "ul-list"];

    const DOM_ARR = TYPE_ARR.map((item,i) => createElement(item,CLASS_NAME[i]));

    DOM_ARR[2].placeholder = "Введите текст";
    DOM_ARR[3].textContent = "Отправить";


    //делаю DOM дерево
    DOM_ARR[1].appendChild(DOM_ARR[2]);
    DOM_ARR[1].appendChild(DOM_ARR[3]);

    DOM_ARR[0].appendChild(DOM_ARR[1]);
    DOM_ARR[0].appendChild(DOM_ARR[4]);

    return DOM_ARR[0];
}
function createElement(type,className){
    const el = document.createElement(type);
    el.classList.add(className);
    return el;
}