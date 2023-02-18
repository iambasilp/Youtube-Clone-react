
import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {q: 'desp', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '89e91fd92bmsha2c6d038ed900eep1494c9jsnac5b0c1b8e2b',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}
