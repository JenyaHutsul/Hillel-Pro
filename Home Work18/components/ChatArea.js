class ChatArea {
    #el;
    constructor() {
        this.#el = document.createElement("div");
        this.#el.classList.add("chat-area");
    }

    returnEl() {
        return document.querySelector(".chat-area");
    }

    clear() {
        const el = document.querySelector(".chat-area");
        el.textContent = "";
    }

    scrollToBottom(){
        document.querySelector(".chat-area").scrollTo({
            top: document.querySelector(".chat-area").scrollHeight,
            behavior: "smooth"
        })
    }

    returnCl(){
        return document.querySelector(".chat-area").scrollHeight; // если написать this.#el.scrollHeight, всегда будет 0
    }

    render() {
        return this.#el;
    }
}