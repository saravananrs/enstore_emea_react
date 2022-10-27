import axios from 'axios';
const instance = axios.create({baseURL: 'http://localhost:8000/api'});

export default instance

const client = axios.create({ baseURL: 'http://localhost:8000/api' });

export const request = ({ ...options }) => {
//   client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response) => response;
  const onError = (error) => {
    //specify whatneedto happen after error occurs
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};