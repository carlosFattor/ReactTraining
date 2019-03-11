import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://rocketseat-node.herokuapp.com/api'
});

export default api;