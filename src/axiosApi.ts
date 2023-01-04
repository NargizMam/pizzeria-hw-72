import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://pizzeriamamytova-default-rtdb.europe-west1.firebasedatabase.app/pizzeria',
});


export default axiosApi;