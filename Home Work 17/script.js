document.body.appendChild(createEl("div", "wrapper"))
const wrapper = document.querySelector(".wrapper");


setInterval(() => {
    renderClock(createTimeObj(),wrapper)
}, 1000);

function createTimeObj(date = new Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return `${h} : ${m} : ${s}`;
}


function renderClock(dateString,el) {
    console.log(dateString)
    el.textContent = dateString;
} 

function createEl(type, _class){
    const el =  document.createElement(type);
    el.classList.add(_class);
    return el;
}




