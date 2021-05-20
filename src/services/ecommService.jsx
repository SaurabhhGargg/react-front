import axios from 'axios';
const url='https://ecommerce-backend2.herokuapp.com';

class EcommService
{
    getProduct()
    {
        return axios.get(`${url}/product`);
    }

    getSpProduct()
    {
        return axios.get(`${url}/sp`);
    }

    getProductDetails(id)
    {
        return axios.get(`${url}/product/${id}`);
    }
    getAccountInfo()
    {
        return axios.get(`${url}/account`);
    }
    getAccountDetails(email)
    {
        return axios.get(`${url}/user/${email}`);
    }

    
}
export default new EcommService();
