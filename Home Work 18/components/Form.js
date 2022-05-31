class Form {
    #el;
    constructor(props) {
        this.#el = document.createElement("form");
        this.#el.classList.add(props.class);

        this.input = new Input({ class: "user-input" });

        this.button = new Button({ class: "btn btn-primary" });

        this.chatArea = new ChatArea();

        this.bot = new Bot()

    }

    handlerInput() {
        this.input.onChange(value => {
            if (value) {
                this.button.isDisabled(false);
            } else {
                this.button.isDisabled(true);
            }
        })
    }


    handlerButton() {
        this.button.sendMes((e) => {
            this.button.switchClass("btn-primary", "btn-warning")
            const el = this.chatArea.returnEl();
            const inputValue = this.input.returnValue();


            new MessageItem(userMessage => {
                el.appendChild(userMessage(this.input.returnValue()));
                this.button.isDisabled(true);
                this.input.isDisabled(true);
                this.input.clearValue();
            });


            new MessageItem((userMessage, botMessage) => {
                this.chatArea.scrollToBottom();
                const fake = this.bot.speachWithDelay(this.randomDelay() * 1000, inputValue);

                fake.then(str => {
                    el.appendChild(botMessage(str, inputValue));
                    this.input.isDisabled(false);

                    if (this.bot.returnCurrentI() === this.bot.returnArrLength()) {
                        setTimeout(() => {
                            el.textContent = "";
                        }, 1000);
                    }
                    this.button.switchClass("btn-warning", "btn-primary");
                }).catch(error => {
                    this.button.switchClass("btn-warning", "btn-danger");

                    const isRefresh = confirm(error.message);

                    if (isRefresh) window.location.reload();

                    this.input.isDisabled(false);
                }).finally(() => {
                    this.chatArea.scrollToBottom();
                })
            })

        })

    }

    randomDelay(){
        return Math.floor(Math.random() * 3 + 1);
    }

    render() {
        this.handlerInput();
        this.handlerButton();
        [this.input, this.button].map(item => this.#el.appendChild(item.render()));
        return this.#el;
    }

}