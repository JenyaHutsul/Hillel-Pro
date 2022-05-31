class Button {
    #el;
    constructor(props) {
        this.#el = document.createElement("button");
        this.#el.textContent = "Отправить";
        this.#el.type = "button";
        this.#el.disabled = true;
        props.class.split(" ").map(_class => this.#el.classList.add(_class));
    }

    isDisabled(bool) {
        this.#el.disabled = bool;
    }

    switchClass(class1, class2) {
        this.#el.classList.add(class2);
        this.#el.classList.remove(class1);
    }

    addClass(value) {
        this.#el.classList.add(value);
    }

    remove(value) {
        if (this.#el.classList.contains(value)) this.#el.classList.remove(value);
    }

    sendMes(cb) {
        this.#el.addEventListener("click", () => {
            cb()
        })
    }

    render() {
        return this.#el;
    }


}