class Button{
    #el;
    constructor(props){
        this.#el = document.createElement("button");
        this.#el.textContent = "Отправить";
        this.#el.type = "button";
        this.#el.disabled = true;
        this.#el.classList.add(props.class);
    }

    isDisabled(bool){
        this.#el.disabled = bool;
    }

    addClass(value){
        this.#el.classList.add(value);
    }

    remove(value){
        if(this.#el.classList.contains(value)) this.#el.classList.remove(value);
    }

    sendMes(cb){
        this.#el.addEventListener("click", ()=>{
            cb()
        })
    }

    render(){
        return this.#el;
    }
}