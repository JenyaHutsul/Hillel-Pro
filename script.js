function isObj(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}
/*Написать функцию “глубокого” копирования. Функция принимает один параметр и возвращает его копию “по значению”. В функцию можно передать параметр любого типа. 
Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты или массивы.
Если передали массив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
Если передали примитив - вернуть его. */

function copy(origin) {
    if (isObj(origin) || Array.isArray(origin)) {
        let target = isObj(origin) ? {} : [];
        for (let key in origin) {
            if (isObj(key)) {
                target[key] = copy(target[key] = {}, origin[key]);
            }else if(typeof key === "function"){
                target[key] = key;
            } else {
                target[key] = origin[key];
            }
        } return target;
    }else{
        return origin;
    }
};
