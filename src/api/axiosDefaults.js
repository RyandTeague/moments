import axios from "axios";

axios.defaults.baseURL = 'https://api-drf.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.useCredentials = true