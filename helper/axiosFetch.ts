import axios from 'axios';

const axiosFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

const linstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API,

  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

export { axiosFetch, linstance };
