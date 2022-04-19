//Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. 
//При клике на любой квадрат цифра в нем увеличивается на один.
//* сделать чтоб внутри квадратов были кнопки +/-
doFirstTask(); 
function doFirstTask(){
    const firstTask = document.querySelector(".first-task")
    for(let i = 0; i < 5; i++){
        const card = createSquare(i,true);
        card.addEventListener("click",handler)
        firstTask.appendChild(card);
    }
}

function handler(e){
    const target = e.target;
    if(target.className.includes("btn-success")){
        plus(target.getAttribute("id"));
    }else if(target.className.includes("btn-danger")){
        minus(target.getAttribute("id"));
    }
}


function plus(id){
    const p = document.getElementById(id);
    const textContent = Number(p.textContent);
    p.textContent = textContent + 1;
}

function minus(id){
    const p = document.getElementById(id);
    const textContent = Number(p.textContent);
    p.textContent = textContent - 1;
}
function createSquare(num,flag){
    const card = document.createElement("div");
    card.classList.add("square");

    if(flag){
        const p = document.createElement("p");
        const btnContainer = document.createElement("div");
        const btnPlus = document.createElement("button");
        const btnMinus = document.createElement("button");
        p.classList.add("show-i");
        p.textContent = "0";
        p.setAttribute("id", num);
        card.appendChild(p);
        btnContainer.classList.add("button-container");


        btnPlus.classList.add("btn");
        btnPlus.setAttribute("id", num);
        btnPlus.classList.add("btn-success");
        btnPlus.innerText = "+"

        btnMinus.classList.add("btn");
        btnMinus.classList.add("btn-danger");
        btnMinus.setAttribute("id", num);
        btnMinus.innerText = "-"

        btnContainer.appendChild(btnPlus);  
        btnContainer.appendChild(btnMinus);
        card.appendChild(btnContainer);
    }
    return card;
}


//Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)
doSecondTask();
function doSecondTask(){
    const doSecondTask = document.querySelector(".second-task");
    for(let i = 0; i < 5; i++){
        let count = 0;
        const colorArr = ["blue", "green", "yellow"]
        const card = createSquare();
        card.addEventListener("click",function(){
            if(count === 3) count = 0;
            card.style.background = colorArr[count];
            count++;
        });
        doSecondTask.appendChild(card);
    }
}

//Сделать список. По клику на любой из элементов он выделяется красным цветом.
// Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается,
// и ставится на тот, по которому кликнули
doThirdTask();
function doThirdTask(){
    const ThirdTask = document.querySelector(".third-task");
    let preTarget;
    ThirdTask.addEventListener("click", e => {
        const currentTarget = e.target;
        if(currentTarget.className === "square"){
            currentTarget.classList.add("green");
            if(preTarget){
                preTarget.classList.remove("green");
            }
            preTarget = currentTarget;
        }
    })
    for(let i = 0; i < 5; i++){
        const card = createSquare();
        ThirdTask.appendChild(card);
    }
}