export class Card{
    constructor(){
        this.url = "https://jsonplaceholder.typicode.com/photos"
        this.outBlock = document.querySelector(".cards")     
    }

    getCards(){
        return fetch(this.url)
        .then(res => res.json())
        .then(function(res){return res})
    }

    showCards(){
        const card = this.getCards()
        let out = ``
        card.then(res => {
            for(let i = 0; i < res.length; i++){
                if(i == 10){break}
                out += `<div class="card">`
                    out += `<p>Card ${i}</p>`
                    out += `<img src="${res[i]["url"]}">`
                out += `</div>`    
            }
            this.outBlock.innerHTML = out
        })
    }
}