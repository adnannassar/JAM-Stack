const axios = require("axios");
require('dotenv').config();
module.exports  =  async function (){
    try {
        const responce = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`);
        return responce.data;
    }catch(error){
        console.log(error);
    }
};