const icon = {
    render :(props)=>{
        if(props==="burner"){
            return `
            <i class='bx bxs-hot'></i>
            `
        }
        if(props==="subscription"){
            return `
            <i class='bx bxs-zap'></i>
            `
        }
    }
}
export default icon;