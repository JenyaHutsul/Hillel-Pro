class MessageItem{
    #el;
    constructor(executor){
        this.#el = document.createElement("div");

        const userMessage = (value) => {
            return this.createMes(value, "user");
        }

        const botMessage = (value) =>{
            return this.createMes(value, "bot");
        }

        executor(userMessage, botMessage);
    }

    createMes(value, type){
        const el = document.createElement("div");
        el.classList.add(`${type}-message-item`);

        const span = document.createElement("span");
        span.textContent = value;
        span.classList.add(`${type}-message-span`);

        el.appendChild(span);
        return el;
    }
}
