import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

const getUrlActive = async () => {

  let url = '';
  let test_url = '';

  for (i = 1; i < 10 && url == ''; i++) {
    
    test_url = `https://my-spy-bot${i}.herokuapp.com/`;

    await axios.get(test_url).then((response) => {
      url = test_url;
    }).catch((erro) => {});

  }

  return url;
}

api.interceptors.request.use(async (config) => {
  config.baseURL = await getUrlActive();  
  return config;
});

export default api;
