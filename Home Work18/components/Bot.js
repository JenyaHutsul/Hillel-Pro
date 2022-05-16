class Bot{
    constructor(){
        this.button = new Button({
            class : "btn",
        })
    }

    speach(){
        let i = -1;
        return function(value){
            const answerArr = ["Привет! Меня зовут собеседник 3000?", 
        "Правда я еще плохо понимаю, что мне отвечают!", 
        "Вы как?",
        "Это хорошо!",
        "Если Вы спросили, как я? То у меня все впорядке!",
        "Чем Вы собираетесь заниматься?",
        "Это круто!",
        "Моя память заполнена... Удаляю нашу переписку"
        ]
        console.log("Бота", value)
        const byeArr = ["Пока", "До свидания", "До завтра"]
        i++;
        if(i === answerArr.length - 1) {
            setTimeout(() => {
                new ChatArea().clear();
                this.button.isDisabled(false);
            }, 2500);
            i = -1;
            return answerArr[answerArr.length - 1]
        }else if(byeArr.includes(value)){
            setTimeout(() => {
                this.sayBye()
            }, 1500);
            setTimeout(() => {
                new ChatArea().clear();
                this.button.isDisabled(false);
            }, 2500);

        }

        this.button.isDisabled(false);
        return answerArr[i];
        
    }}
    sayBye(){
        return "Был рад пообщаться!"; 
    }
}

