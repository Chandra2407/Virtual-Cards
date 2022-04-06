import cardData from "../../data.js"
import Cards from "../components/cards.js";
import { paginatedResults, rerender, searchFunction } from "../utils.js";

const cards = cardData.data;
document.getElementById("next").addEventListener('click',(e)=>{
    if(AllScreen.page*cardData.per_page<cards.length){
        AllScreen.page++;
        // console.log(AllScreen.page)
        rerender(AllScreen);    
    }
})
document.getElementById("prev").addEventListener('click',(e)=>{
    if(AllScreen.page>1){
        AllScreen.page--;
        // console.log(AllScreen.page)
        rerender(AllScreen);    
    }
})  
const AllScreen = {
    page:cardData.page,
    after_render: function(){
        const cards = cardData.data;
        const limit = cardData.per_page;
        const page = this.page;
        const result = paginatedResults(cards,page,limit);
        searchFunction(result.result);  
    },
    render:function(){
        const cards = cardData.data;
        const limit = cardData.per_page;
        const page = this.page;
        const result = paginatedResults(cards,page,limit);
        // console.log(result.result.length);
        return Cards.render(result.result);
        
    }
}
export default AllScreen;