class Bot {
    constructor(executor) {
        this.state = "open";
    }

    speach() {
        let i = -1;
            return function (value) {
                const answerArr = ["Привет! Меня зовут собеседник 3000?",
                    "Правда я еще плохо понимаю, что мне отвечают!",
                    "Вы как?",
                    "Это хорошо!",
                    "Если Вы спросили, как я? То у меня все впорядке!",
                    "Чем Вы собираетесь заниматься?",
                    "Это круто!",
                    "Моя память заполнена... Удаляю нашу переписку"
                ]
                i = i === answerArr.length - 1 ? -1 : i;
                i++;
    
                return answerArr[i];
        }
        
    }

    sayBye(){
        return "Пока!"
    }
}


const Nikita = new Bot();
const NikitaSpeach = Nikita.speach();

console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())
console.log(NikitaSpeach())


