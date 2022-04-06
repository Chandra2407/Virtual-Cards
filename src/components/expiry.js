const Expiry = {
    render :(props,card)=>{
        if(props==="burner"){
            return `
            <p>Expires ${card.expiry}</p>
            `
        }
        if(props==="subscription"){
            return `
            <p>Limit ${card.available_to_spend.value} SGD</p>
            `
        }
    }
}
export default Expiry;