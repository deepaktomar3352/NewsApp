import axios from "axios";
import {API_KEY,endpoint,category,country} from '../config/config'
// var serverURL=('https://newsapi.org/v2/top-headlines')

var getData=async(category)=>{
    try {
        var response=await axios.get(`${endpoint}?country=${country}&category=${category}`,{
            headers:{
                'X-API-KEY':API_KEY
            }
        });
        var result = await response.data
        return result.articles;
         } catch (error) {
        return null
        }



}

var postData=async(url,body)=>{
    try {
        var response=await axios.post(`${serverURL}/${url}`,body)
        var result = await response.data
        return result
         } catch (error) {
        return null
        }



}

export{getData,postData}