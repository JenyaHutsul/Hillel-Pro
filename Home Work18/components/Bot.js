class Bot {
    #speak = "speak";
    #stop = "stop";
    #answerArr = ["Привет! Меня зовут собеседник 3000?",
        "Правда я еще плохо понимаю, что мне отвечают!",
        "Вы как?",
        "Это хорошо!",
        "Если Вы спросили, как я? То у меня все впорядке!",
        "Чем Вы собираетесь заниматься?",
        "Это круто!",
        "Моя память заполнена...Удаляю нашу переписку. Но я еще тут!"
    ];

    #byeArr = ["до свидания","до встречи","до завтра","пока"];


    constructor() {
        this.lastAnswerI = 0;
        this.state = this.#speak;
    }

    returnCurrentI() {
        return this.lastAnswerI;
    }

    returnNewAnswerI() {
        return this.lastAnswerI++;
    }

    resetI() {
        return this.lastAnswerI = 0;
    }

    returnArrLength() {
        return this.#answerArr.length;
    }

    canISpeak() {
        return this.state === this.#speak;
    }

    speach(value) {
        if (this.state === this.#stop) {
            throw new Error("Бот уже ушел! Позвать его?")
        }
        if (this.#byeArr.includes(value.toLowerCase())) {
            this.state = this.#stop;
            return "Пока"
        }
        if (this.state === this.#speak) {
            if (this.#answerArr.length - 1 >= this.lastAnswerI) {
                return this.#answerArr[this.returnNewAnswerI()];
            } else {
                this.resetI();
                return this.#answerArr[this.returnNewAnswerI()];
            }
        }


    }

    speachWithDelay(ms, value = "") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(this.speach(value))
                } catch (error) {
                    reject(error)
                }
            }, ms)
        });
    }
}





const Nikita = new Bot();
//Nikita.speachWithDelay(2000);
//Nikita.speachWithDelay(3000);
//Nikita.speachWithDelay(4000);
//Nikita.speachWithDelay(5000);
//Nikita.speachWithDelay(6000);
//Nikita.speachWithDelay(7000);
//Nikita.speachWithDelay(8000);