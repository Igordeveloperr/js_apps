const arr = []
export class List{
    constructor(title){
        this._title = title
    }
    addData(){
        arr.push(this._title)
        localStorage.setItem("titles", JSON.stringify(arr))
    }
    createList(outBlock){
        const locArr = JSON.parse(localStorage.getItem("titles")).reverse()
        let out = ``
        for(let i of locArr){
            out += `<div class="list">`
                out += `<h1>${i}</h1>`
                out += `<button class="add">add item</button>`
                out += `<ul class="outWithItem">`   
                out += `</ul>`  
            out += `</div>`  
        }
        outBlock.innerHTML = out;
    }
    addItem(){
        const buttons = document.querySelectorAll(".add")
        const outBlock = document.querySelector(".outWithItem")
        const modal = document.querySelector(".modal")
        const add = document.querySelector("#add")
        let item = document.querySelector(".modal .modal_body input")
        let out = ``

        add.addEventListener("click", () => {
            let val = item.value
            out += `<li>${val}</li>`
            outBlock.innerHTML = out
            modal.style.top = -100 + "%"
        })
        
        buttons.forEach(el => {
            el.addEventListener("click", () => {
                modal.style.top = 0
            })     
        })    
    }
}






