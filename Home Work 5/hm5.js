//Проверка на цифры
function isDigit(n){
    return (typeof n === "number") && !isNaN(n);
}



//Написать функцию, которая вычисляет площадь круга.
function squareCirсle(r){
    if(isDigit(r)) return Math.PI * r**2;
    return "Переданно не число!"
}



//Написать функцию, которая вычисляет длину окружности.
function lenghtCircle(r){
    if(isDigit(r)) return Math.PI * 2 * r;
    return "Переданно не число!";
}



//Написать функцию, которая вычисляет среднее арифметическое двух чисел.
function average(a,b){
    if(isDigit(a) && isDigit(b)) return (a + b)/2
    return "Переданно не число!";
}



//Написать функцию calc(x, y, action)
function calc(x,y,action){
    if(isDigit(x) && isDigit(y)){
        if(action === "+") return x + y;
        if(action === "-") return x - y;
        if(action === "*") return x * y;
        if(action === "^") return x ** y;
        if(y && (action === "/" || action === "%")){
            if(action === "/") return x / y;
            if(action === "%") return x % y;
        }else return "Второй операнд 0"
    }
    return "Переданно не число!";
}

