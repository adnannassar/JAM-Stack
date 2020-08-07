const axios = require("axios");
require('dotenv').config(); 
const countries = require("./countries.json")

 async function getNews (country){
    try {
        const responce = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
        return {
            "country": country,
            "articles": responce.data.articles
            }
    }catch(error){
        
        console.log(error);
    }
 }

module.exports  =  async function (){
    var newsPromisses = countries.map(getNews);
   return Promise.all(newsPromisses).then(newsObjects =>{
            console.log('NewsObjects' , newsObjects)
            return [].concat.apply([] , newsObjects)
    });
};