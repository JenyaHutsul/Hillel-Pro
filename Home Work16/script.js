document.body.appendChild(createLayout());

const getDataButton = document.querySelector(".get-data");
const spanCount = document.querySelector(".counter");
const ol = document.querySelector("ol");


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
    sendReques(spanCount.textContent)
    .then(res => {
        createLi(res)
        if(!res.info.next){
            disabledBtn()
            delFlex(ol)
        }
    })
    .catch(err => new Error(err));

}

function disabledBtn(){
    const nextbtn = document.querySelector(".get-data");
        nextbtn.disabled = true;
        nextbtn.classList.add("btn-dark");
}

function delFlex(item){
    item.style.display = "block"
}

function sendReques(id){
    return fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then(response => {
            if(response.status === 200){
                getDataButton.textContent = "Загружаю";
                getDataButton.disabled = true;
                return response.json()
            }
            Promise.reject(response)
        })
        .catch(err => reject(err))
        .finally(()=>{
            getDataButton.textContent = "Data";
            getDataButton.disabled = false;
        })
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