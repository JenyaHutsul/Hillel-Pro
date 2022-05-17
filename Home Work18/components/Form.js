class Form {
    #el;
    constructor(props) {
        this.#el = document.createElement("form");
        this.#el.classList.add(props.class);

        this.input = new Input({ class: "user-input" });

        this.button = new Button({ class: "btn" });

        this.chatArea = new ChatArea();

        this.bot = new Bot();
        this.botSpeach = new Bot().speach();


    }

    handlerInput() {
        this.input.onChange(value => {
            if (value) {
                this.button.isDisabled(false);
            } else {
                this.button.isDisabled(true)
            }
        })
    }


    handlerButton() {
        this.button.sendMes((e) => {
            const el = this.chatArea.returnEl();
            new MessageItem(userMessage => {
                el.appendChild(userMessage(this.input.returnValue()));
                this.button.isDisabled(true);
            });
            this.input.clearValue();

            setTimeout(() => {
                new MessageItem((userMessage, botMessage) => {
                    el.appendChild(botMessage(this.botSpeach()));
                });
            }, 1000);


        })
    }

    render() {
        this.handlerInput();
        this.handlerButton();
        [this.input, this.button].map(item => this.#el.appendChild(item.render()));
        return this.#el;
    }

}