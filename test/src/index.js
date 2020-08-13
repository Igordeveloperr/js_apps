import "./css/style.css"
import {List} from "./modules/List.js"

const title = document.querySelector("#title")
const createBtn = document.querySelector("#createBtn")
const outBlock = document.querySelector(".lists-block")

createBtn.addEventListener("click", () => {
    let val = title.value
    const list = new List(val)
    list.addData()
    title.value = ""
    list.createList(outBlock)
    list.addItem()
})



