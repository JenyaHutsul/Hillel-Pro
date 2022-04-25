function isObj(obj) {
    return typeof obj === "object" && obj !== null;
}
//Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает объект со всеми 
//свойствами. В данном задании используйте for ... in для работы со свойствами объектов.

function copy(target, origin) {
    if (isObj(target) && isObj(origin)) {
        for (key in origin) {
            if (isObj(origin[key])) {
                copy(target[key] = {}, origin[key])
            } else {
                target[key] = origin[key];
            }
        } return target;
    } else {
        console.error("Передан не объект")
    }
}



//Напишите функцию, принимающую и сравнивающую два объекта. Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false. 
//Функция должна учитывать, что количество свойств в двух объектах может отличаться.

function isEqual(a, b) {
    if(!isObj(a) || !isObj(b)){
        console.error("Передан не объект");
    }
    debugger;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    debugger;
    if(keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        const key = keysA[i];
        const doubleObj = isObj(a[key]) && isObj(a[key]);
        if((!doubleObj && a[key] !== b[key]) || (doubleObj && !isEqual(a[key], b[key]))) return false;        
    }return true;
}

/* Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква. 
Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз.
Функция не должна использовать console.log, а должна вернуть объект с данными.
*/

function howMuch(str) {
    if (typeof str === "string") {
        const obj = {};
        for (let i = 0; i < str.length; i++) {
            let current = str[i];
            if (obj[current]) {
                obj[current]++;
            } else {
                obj[current] = 1;
            }
        }
        return obj;
    }console.error("Переданна не строка")
}

