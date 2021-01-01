import axios, {AxiosStatic} from 'axios';
import TokenStore from '../stores/TokenStore';
import redirectTo from "./redirectTo";

export default function init_axios(token_store: TokenStore) {
  const $axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
  });

  $axios.defaults.headers.post['Content-Type'] = 'application/json';
  $axios.defaults.headers.put['Content-Type'] = 'application/json';
  $axios.defaults.headers.patch['Content-Type'] = 'application/json';

  $axios.interceptors.request.use(function (config) {
    const token = token_store.get()
    if (token) {
      config.headers.authorization = token;
    }
    return config
  }, (err) => {
    console.error(err)
  });

  const createUpdateAuthInterceptor = (axios: AxiosStatic) => async (error: { response: { status: number; }; }) => {
    if (error.response && error.response.status === 401) {
      token_store.remove()
      redirectTo('/login')
      throw new axios.Cancel('User token was changed.');
    }
    return Promise.reject(error);
  };

  const updateAuthCb = createUpdateAuthInterceptor(axios);

  $axios.interceptors.response.use(undefined)
  return $axios
}
