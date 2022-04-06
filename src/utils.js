import cardData from "../data.js";
import Cards from "./components/cards.js";

export const parseRequestURL = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};
export const searchFunction = (cards) => {
  const searchText = document.getElementById("searchText");
  const searchBtn = document.getElementById("searchBtn");
  let result = [];
  // const cards = cardData.data;  
  searchText.addEventListener('input', (e) => {
    result = cards.filter((card) => {
      return card.name.toLowerCase().includes(searchText.value.toLowerCase());
    })
    document.querySelector(".bot").innerHTML = Cards.render(result)
  })
}

export const paginatedResults = (cards, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const resultObj = {};
  if (endIndex < cards.length) {
    resultObj.next = {
      page: page + 1,
      limit: limit
    }
  }
  if (startIndex > 0) {
    resultObj.prev = {
      page: page - 1,
      limit: limit
    }
  }
  resultObj.result = cards.slice(startIndex, endIndex);
  return resultObj;
}
export const rerender = async (component) => {
  document.querySelector(".bot").innerHTML = await component.render();
  await component.after_render();
};