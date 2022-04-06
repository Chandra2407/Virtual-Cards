import cardData from "../../data.js"
import Cards from "../components/cards.js";
import { searchFunction } from "../utils.js";

const YourScreen= {
    after_render: ()=>{
        let owner = 1;
        const cards = cardData.data;
        const results = cards.filter((card)=>{
            return card.owner_id === owner;
        })
        searchFunction(results);   
    },
    render:()=>{
        let owner = 1;
        const cards = cardData.data;
        const results = cards.filter((card)=>{
            return card.owner_id === owner;
        })
        // console.log(results);
        return Cards.render(results);
        
    
    }
}
export default YourScreen;