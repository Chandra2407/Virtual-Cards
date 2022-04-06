import icon from "../components/icon.js";
import Expiry from "./expiry.js";
import Progress from "./progress.js";
const Cards = {

    render: (cards) => {

        // console.log(cards);
        return `
        <div class="cards">
        ${cards.map((card)=>
            `
        <div class="card">
          <div class="card-top">
              <div class="card-top-left">
                  <h3>${card.name}</h3>
                 <p>${card.owner_name} <i class='bx bxs-circle'></i> ${card.budget_name}</p>
                  <button>${card.card_type.toUpperCase()}</button>
              </div>
              <div class="card-top-right">
                  ${icon.render(card.card_type)}
                  ${Expiry.render(card.card_type,card)}
              </div>
          </div>
          <div class="card-mid">
              ${Progress.render(card.spent.value,card.available_to_spend.value)}
          </div>
          <div class="card-bot">
              <div class="card-bot-left">
                  <div>
                      <i class='bx bxs-circle'></i>
                      <p>Spent</p>
                  </div>
                  <div>
                      <i class='bx bxs-circle'></i>
                      <p>Available to spend</p>
                  </div>
              </div>
              <div class="card-bot-right">
                  <p>${card.spent.value} ${card.spent.currency}</p>
                  <p>${card.available_to_spend.value} ${card.available_to_spend.currency}</p>
              </div>
          </div>
      </div>
            `
    ).join('\n')
    }
        </div>
        
        `

    }
}
export default Cards;