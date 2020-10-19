import axios from 'axios';

import getTimeZone from '../utils/getTimeZone';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.defaults.headers['User-TimeZone'] = getTimeZone();

export default api;
