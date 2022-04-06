const arrOfInputs = [];
let objOfValue = {};
const form = document.createElement("form");
const body = document.body;

renderForm();

function renderForm(){
    createInputs();
    addToFormInputsAndButton();
    body.appendChild(form);
}

function addToFormInputsAndButton(){
    const button = createButton();


    for(let i = 0; i < arrOfInputs.length; i++){
        form.appendChild(arrOfInputs[i]);
    }form.appendChild(button);
}

function createButton(){
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = true;
    button.textContent = "Отправить";
    button.classList.add("btn");
    button.addEventListener("click", handlerButton);
    return button;
}
function templateInput(type){
    const input = document.createElement("input");

    input.type = type;
    input.placeholder = type;
    input.classList.add("form-control")

    input.addEventListener("blur", handlerInput);

    return input;
}

function createInputs(){
    const inputsType = ["email", "password"];
    for(let i = 0; i < 2; i++){
        arrOfInputs.push(templateInput(inputsType[i]));
    }
}



function handlerInput({ target }){
    const type = target.type;
    const value = target.value;
    clearClass(target);
    const isValidValue = type === "email" ? checkEmail(value) : checkPassword(value);
    if(isValidValue) {
        objOfValue[type] = value;
        target.classList.add("is-valid")
    };
    if(!isValidValue) target.classList.add("is-invalid");
    
    if(checkValues(objOfValue)){
        const btn = document.querySelector("button");
        btn.classList.add("btn-primary");
        btn.disabled = false;
    };
}

function handlerButton(e){
    console.log(objOfValue);
    objOfValue = {};
    arrOfInputs.map(item => item.value = "");
    arrOfInputs.forEach(item => clearClass(item));
    e.target.disabled = true;
}


function checkValues(obj){
    return Object.keys(obj).length === 2 ? true : false;
}

function clearClass(target){
    target.classList.remove("is-valid", "is-invalid");
}

function checkEmail(value){
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value);
}

function checkPassword(value){
    if(value.length < 8) return false;
    return /[\d\D]+[@$#!?&]/.test(value);
}