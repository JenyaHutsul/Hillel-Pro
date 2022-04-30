setInterval(() => {
    document.body.textContent = "";
    document.body.appendChild(renderClock(createTimeObj()))
}, 1000);

function createTimeObj(date = new Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return {
        h,m,s,
    }
}


function renderClock(dateString) {
    const wrapper = createEl("div", "wrapper");
    const hourDiv = createEl("div", "hour");
    const minDiv = createEl("div", "min");
    const secDiv = createEl("div", "sec");
    hourDiv.textContent = dateString.h + " : ";
    minDiv.textContent = dateString.m + " : ";
    secDiv.textContent = dateString.s;

    wrapper.appendChild(hourDiv);
    wrapper.appendChild(minDiv);
    wrapper.appendChild(secDiv);

    return wrapper;
} 

function createEl(type, _class){
    const el =  document.createElement(type);
    el.classList.add(_class);
    return el;
}


