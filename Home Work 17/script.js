document.body.appendChild(createEl("div", "wrapper"))
const wrapper = document.querySelector(".wrapper");


setInterval(() => {
    renderClock(createTimeObj(),wrapper)
}, 1000);

function createTimeObj(date = new Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return `${h}  ${m}  ${s}`;
}


function renderClock(dateString,el) {
    el.textContent = "";

    const [ hour, col ,min, col2 ,sec ] = dateString.split(" ");

    const arr = [[hour,"hour"],[col, "colon"],[min, "min"],[col2,"colon"],[sec, "sec"]].map(item => {
        const el = createEl("div", item[1]);
        el.textContent = item[0] === "" ? ":" : addZero(item[0]);

        return el;
    })

    arr.forEach(item => el.appendChild(item));

    function addZero(i){
        return i > 10 ? i : "0" + i;
    }
} 

function createEl(type, _class){
    const el =  document.createElement(type);
    el.classList.add(_class);
    return el;
}




