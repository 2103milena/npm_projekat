import Axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipe() {
        const res = await Axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
        try{
            this.result = res.data.recipes;
            console.log(this.result);
        }catch(error){
            alert(error)
        }   
    }
}