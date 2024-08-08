import "./styles.css"
import { returnMenu } from "./menu/menu"



let mainContainer = document.getElementById("content");
let navBar = document.getElementsByClassName("navbar")[0];


mainContainer.appendChild(returnMenu());


Array.from(navBar.getElementsByTagName("button")).forEach((element) => {

    switch (element.innerHTML) {
        case "Home":
            element.addEventListener("click", () => {
                mainContainer.firstChild.remove();
            })
            break;
        case "Menu":
            element.addEventListener("click", () => {
                mainContainer.firstChild.remove();
                mainContainer.appendChild(returnMenu())

                console.log("hii")
            })

            break;
        case "Get your Reservation":
            element.addEventListener("click", () => {
                mainContainer.firstChild.remove();
                console.log("hii")
            })

            break;
    }
})

function removeAllChilds(node) {
    while (node.firstChild) {
        node.firstChild.remove;
    }
}



