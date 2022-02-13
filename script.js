function isObj(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
/*Написать функцию “глубокого” копирования. Функция принимает один параметр и возвращает его копию “по значению”. В функцию можно передать параметр любого типа. 
Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты или массивы.
Если передали массив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
Если передали примитив - вернуть его. */

function copy(origin) {
    if(isObj(origin)){
        let returnValue = {};
        for(let key in origin){
            if(isObj(origin[key])){
                returnValue[key] = copy(origin[key])
            }else{
                returnValue[key] = origin[key]
            }
        }return returnValue
    }else if(Array.isArray(origin)){
        let returnValue = [];
        for(let key in origin){
            if(Array.isArray(origin[key])){
                returnValue[key] = copy(origin[key])
            }else{
                returnValue[key] = origin[key]
            }
        }return returnValue;
    }return origin;
};
