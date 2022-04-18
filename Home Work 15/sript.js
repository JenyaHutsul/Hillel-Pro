document.body.appendChild(createLayout());


const buttonDiv = document.querySelector(".button-div");
const spanCount = document.querySelector(".counter");
const ol = document.querySelector("ol");
let maxPage;

(function getMaxPage(){
    sendRequest(1, (res) =>{
        maxPage = res.info.pages;
    })
})()



isAvailableButon(0);

buttonDiv.addEventListener("click", handler);

function handler(e){
    const target = e.target;
    if(target.classList.contains("next-button")) nextButton();
    if(target.classList.contains("prev-button")) prevButton();
}


function nextButton(){
    spanCount.textContent++;
    isAvailableButon(Number(spanCount.textContent));    
    sendRequest(spanCount.textContent, (res) => createLi(res))
}

function prevButton(){
    spanCount.textContent--;
    isAvailableButon(Number(spanCount.textContent));
    sendRequest(spanCount.textContent, (res) => createLi(res))
}

function isAvailableButon(count){
    const nextbtn = document.querySelector(".next-button");
    const prevbtn = document.querySelector(".prev-button");
    prevbtn.disabled = false;
    nextbtn.disabled = false;
    prevbtn.classList.remove("btn-dark");
    nextbtn.classList.remove("btn-dark");
    if(count <= 1) {
        prevbtn.disabled = true;
        prevbtn.classList.add("btn-dark");
    }
    if(count >= maxPage) {
        nextbtn.disabled = true;
        nextbtn.classList.add("btn-dark");
    };
}

function createLi(res){
    ol.textContent = "";
    ol.setAttribute("start", (Number(spanCount.textContent) * 20 - 19));
    res.results.forEach(el => {
        const li = document.createElement("li");
        li.classList.add("li-item");
        li.textContent = el.name;
        ol.appendChild(li);
    });
}


function sendRequest(i, cb){
    const xhr = new XMLHttpRequest();
    const APPI_URL = `https://rickandmortyapi.com/api/character/?page=${i}`;
    xhr.open("GET", APPI_URL);
    xhr.addEventListener("load",(e)=>{
        if(xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            cb(data);
        };
    })
    xhr.send();
}




function createLayout(){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const ol = document.createElement("ol");
    ol.classList.add("ol");

    const p = document.createElement("p");
    p.textContent = "Страничка:";

    const span =document.createElement("span");
    span.classList.add("counter");
    span.textContent = 0;
    p.appendChild(span);


    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-button", "btn-primary");

    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.classList.add("prev-button", "btn-primary");
    
    buttonDiv.appendChild(prevButton);
    buttonDiv.appendChild(nextButton);



    wrapper.appendChild(ol);
    wrapper.appendChild(p);
    wrapper.appendChild(buttonDiv);

    return wrapper;
}