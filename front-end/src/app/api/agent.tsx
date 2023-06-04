import axios, {AxiosError, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';

import { store } from '../stores/store.';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
}

axios.defaults.baseURL = "http://localhost:5000/api"


axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers!.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response =>{
    return response;
}, (error: AxiosError) => {
    const {data,status,config,headers} = error.response!;
    
})

