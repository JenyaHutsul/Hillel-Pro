document.body.appendChild(createLayout());

const getDataButton = document.querySelector(".get-data");
const spanCount = document.querySelector(".counter");
const ol = document.querySelector("ol");
let maxPage = sendReques(1,getDataButton)
    .then(res => maxPage = res.info.pages)

getDataButton.addEventListener("click", handler);


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



function handler(e){
    const target = e.target;
    if(target.classList.contains("get-data")) getDataButtonFn();
}


function getDataButtonFn(){
    spanCount.textContent++;
    isAvailableButon(Number(spanCount.textContent));
    sendReques(spanCount.textContent).then(res => createLi(res))
    .catch(err => new Error(err))

}

function sendReques(id){
    return new Promise((resolve, reject)=>{
        fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then(response => {
            getDataButton.textContent = "Загружаю";
            getDataButton.disabled = true;
            resolve(response.json())
        })
        .catch(err => reject(err))
        .finally(()=>{
            getDataButton.textContent = "Data";
            getDataButton.disabled = false;
        })
    })
}



function isAvailableButon(count){//переделать
    const nextbtn = document.querySelector(".get-data");
    nextbtn.disabled = false;
    nextbtn.classList.remove("btn-dark");
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
    nextButton.textContent = "Get Data";
    nextButton.classList.add("get-data", "btn-primary");

    buttonDiv.appendChild(nextButton);



    wrapper.appendChild(ol);
    wrapper.appendChild(p);
    wrapper.appendChild(buttonDiv);

    return wrapper;
}