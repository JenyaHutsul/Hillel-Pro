document.body.appendChild(createEl("div", "wrapper"))
const wrapper = document.querySelector(".wrapper");


setInterval(() => {
    renderClock(createTimeObj(), wrapper)
}, 1);

renderClock(createTimeObj(), wrapper)

function createTimeObj(date = new Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return `${h} : ${m} : fdfdf : ${s} : ddfgdfgd fgfdgdf`;
}


function renderClock(dateString, el) {
    el.textContent = "";

    const [hour, col, min, col2, sec, ...rest] = dateString.split(" ");

    const arr = [[hour, "hour"], [col, "colon"], [min, "min"], [col2, "colon"], [sec, "sec"], ...rest].map(item => {
        if (typeof item === "string") {
            const el = createEl("div", "rest");
            if(isNumber(item)){
                el.textContent = addZero(item);
            }else{
                el.textContent = item;
            }
            return el;
        } else {
            const el = createEl("div", item[1]);
            el.textContent = item[0] === "" ? " " : addZero(item[0]);
            return el;
        }

        
    })

    arr.forEach(item => el.appendChild(item));

    function addZero(i) {
        const iNumb = +i;
        if (typeof iNumb === "number" && !Number.isNaN(iNumb)) {
            return iNumb >= 10 ? iNumb : "0" + iNumb;
        }
        return i
    }

    function isNumber(data) {
        return /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]+){0,1}$/.test(data);
    }
}

function createEl(type, _class) {
    const el = document.createElement(type);
    el.classList.add(i = _class ? _class : "rest");
    return el;
}

