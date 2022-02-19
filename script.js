/* доп задача */
function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            sum += getSum(arr[i]);
        }else{
            sum+=arr[i];
        }
    }return sum;
}


/*Написать функцию generateList. Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3]. 
Нужно сгенерировать список из элементов. Если в массиве встречается массив, то нужно сделать вложенный список. */

function createLi(text){
    const li = document.createElement("li");
    li.innerText = text;
    return li;
}

function createUl(){
    return document.createElement("ul");
}

function createDom(arr){
    const ul = createUl();
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const li = createDom(arr[i]);
            ul.append(li);
        }else{
            const li = createLi(arr[i]);
            ul.append(li);
        }
    }return ul;
}
