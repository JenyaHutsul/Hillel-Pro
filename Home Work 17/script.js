document.body.appendChild(createLayout())


function clock(){
    const date = new Date();
    const hourDiv = document.querySelector(".hour");
    const minDiv = document.querySelector(".min");
    const secDiv = document.querySelector(".sec");
    
    const hour = addZero(date.getHours());
    const min = addZero(date.getMinutes());
    const sec = addZero(date.getSeconds());

    hourDiv.textContent = hour + ":";
    minDiv.textContent = min + ":";
    secDiv.textContent = sec;
    

    function addZero(i){
        return i >= 10 ? i : "0" + i;
    }
    
}

setInterval(clock,1000);


function createLayout(){
    const arr = [];
    const wrapper = createEl("div","wrapper");
    arr.push(createEl("div", "hour"));
    arr.push(createEl("div", "min"));
    arr.push(createEl("div", "sec"));
    arr.forEach(item => wrapper.appendChild(item));

    function createEl(type,_class){
        const el = document.createElement(type);
        el.classList.add(_class);
        return el;
    }
    return wrapper
}
