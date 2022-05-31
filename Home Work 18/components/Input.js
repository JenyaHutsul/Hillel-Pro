class Input {
    #el;
    constructor(props) {
        this.#el = document.createElement("input");
        this.#el.classList.add(props.class);
        this.#el.type = "text";
        this.#el.placeholder = "Введите текст";
    }

    onChange(cb) {
        this.#el.addEventListener("input", (e) => {
            cb(this.#el.value);
        })
    }

    returnValue(x) {
        return this.#el.value;
    }

    isDisabled(bool) {
        this.#el.disabled = bool;
    }
    clearValue() {
        this.#el.value = "";
    }

    render() {
        return this.#el;
    }
} 