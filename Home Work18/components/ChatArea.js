class ChatArea{
    #el;
    constructor(){
        this.#el = document.createElement("div");
        this.#el.classList.add("chat-area");
    }

    returnEl(){
        return document.querySelector(".chat-area");
    }

    clear(){
        const el = document.querySelector(".chat-area");
        el.textContent = "";
    }

    render(){
        return this.#el;
    }
}