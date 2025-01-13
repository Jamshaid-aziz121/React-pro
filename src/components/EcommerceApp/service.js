import axios from 'axios';

const baseURL = "https://dummyjson.com";

async function getProducts() {
    const { data } = await axios.get(`${baseURL}/products`);
    return data;
}


export {
    getProducts
}