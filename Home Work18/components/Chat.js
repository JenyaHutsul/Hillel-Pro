class Chat{
    #el;
    constructor(){
        this.#el = document.createElement("div");
        this.#el.classList.add("chat");

        this.form = new Form({
            class : "form",
        })

        this.chatArea = new ChatArea();        
    }
    



    runChat(){
        [this.chatArea, this.form].map(item => this.#el.appendChild(item.render()))
        document.body.appendChild(this.#el)
    }
}

