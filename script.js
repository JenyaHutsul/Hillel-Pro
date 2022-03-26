function makeTable(){
    const body = document.body;
    const table = document.createElement("table");
    const bootstrap = ["table-primary","table-secondary","table-info","table-danger","table-warning"]
    let cell;
    for(let i = 0; i < 11; i++){
        const row = document.createElement("tr");
        row.classList.add(bootstrap[random()]);
        if(i){
            cell = document.createElement("td");
            cell.textContent = `${i} * 10 = ${i*10}`;
        }else{
            cell = document.createElement("th");
            cell.textContent = "Таблица умножения на 10";
        }
        row.appendChild(cell);
        table.appendChild(row)
    }
    body.appendChild(table);
}
function random(){
    return Math.floor(Math.random()  * 5);
}

makeTable()