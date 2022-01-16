//Вывести большее число
const digitOne = +prompt("Введите первое число");
const digitTwo = +prompt("Введите второе число");
console.log(digitOne > digitTwo ? digitOne : digitTwo);

// четное или нечетное
const digit = prompt("Введите число");
if(digit){
    if(!(digit % 2)){
        console.log("Четное", digit%10)
    }else{
        console.log("Нечетное", digit%10)
    }
}else{
    console.log("Не ввели число")
}

//Человек и алкоголь //

const person = prompt("Ваше имя?");
let age = prompt("Сколько Вам лет?");
age = +age || false;
const isDrink = confirm("Алкоголь употребляем?");
if(age){
    if(isDrink){
        if(age > 40){
            console.log("Не злоупотребляйте", person)
        }else if(age < 18){
            console.log(person, "ты что?! Маме расскажу!")
        }else if(age > 18 && age < 40){
            console.log(person, "только водку с пивом не мешай...");
        }
    }else{
        console.log("Так держать!", person)
    }
}else{
    console.log("Введите возраст")
}