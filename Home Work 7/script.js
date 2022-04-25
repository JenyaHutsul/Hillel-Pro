function isStr(str){
    return typeof str === "string";
}
//Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.
function isSymbolPresentInString(str,symbol){
    if(!isStr(str) || !isStr(symbol)){
        console.error("Переданная не строка");
        return;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === symbol){
            return true;
        }
    }return false;
}

//Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден
function getSymbolIndex(str,symbol){
    if(!isStr(str) || !isStr(symbol)){
        console.error("Переданная не строка");
        return;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === symbol){
            return i;
        }
    }return -1;
}
//Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе

function getNumberOfEven(n){
    let count = 0;
    debugger;
    while(n){
        const lastDigit = n%10;
        if(!(lastDigit % 2)) count ++;
        n = parseInt(n/10);
    }return count;
}

/*Написать собственную реализацию функций forEach, map, filter, some, every. 
Каждая функция должна принимать два аргумента - массив и callback.
Все функции, кроме forEach, должны вернуть результат.  */

Array.prototype.customForEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i], i, arr)
    }
}

Array.prototype.customMap = function(cb){
    let newArr = [];
    const arr = this;
    for(let i = 0; i < arr.length; i++){
        newArr.push(cb(arr[i],i,arr));
    }
    return newArr;
}

Array.prototype.customFilter = function(cb){
    let newArr = [];
    const arr = this;
    debugger;
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


Array.prototype.customSome = function(cb){
    const arr = this;
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i],i,arr)){
            return true
        }
    }
    return false;
}

Array.prototype.customEvery = function(cb){
    const arr = this;
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i],i,arr)){
            return false
        }
    }
    return true;
}
