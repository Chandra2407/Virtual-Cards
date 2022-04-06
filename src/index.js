import AllScreen from "./screens/allscreen.js";
import ErrorScreen from "./screens/ErrorScreen.js";
import YourScreen from "./screens/YourScreen.js";
import { parseRequestURL } from "./utils.js";

const routes = {
    "/":AllScreen,
    "/all":AllScreen,
    "/your":YourScreen,
}
const router = async()=>{
    const request = parseRequestURL();
    const parsedUrl = (request.resource ? `/${request.resource}` : '/')
    + (request.id ? '/:id' : '')
    + (request.verb ? `${request.verb}` : '');
    if(routes[parsedUrl]==AllScreen){
        document.querySelector(".pagination").style.display = "flex";
    }
    else{
        document.querySelector(".pagination").style.display = "none";
    }
    const screen = routes[parsedUrl]?routes[parsedUrl]:ErrorScreen;
    const cardsContainer = document.querySelector(".bot");
    cardsContainer.innerHTML = await screen.render();
    screen.after_render();
    document.querySelector("#searchText").value="";
    document.querySelector("#searchText").classList.remove("active");
}

window.addEventListener("hashchange",router);
window.addEventListener('load', router);



const aLinks = document.querySelector(".top-left").children;
Array.from(aLinks).forEach((item,ind,arr) => {
    item.addEventListener("click",(e)=>{
        item.style.fontWeight = "bold";
        item.style.borderBottom = "5px solid rgb(248, 75, 75)"
        arr.forEach((arrItem)=>{
            if(arrItem!==item){
            arrItem.style.fontWeight = "normal";
            arrItem.style.borderBottom = "none"
            }
        })
    })
});
document.querySelector(".filter").addEventListener('click',(e)=>{
    document.querySelector(".filter-card").classList.toggle("active");
})