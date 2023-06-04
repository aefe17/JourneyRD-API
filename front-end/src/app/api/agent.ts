import axios, {AxiosError, AxiosResponse} from 'axios';
import { User, UserFormValues } from '../models/user';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
}

const Destiny = {

}

const Account = {
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const Locality ={

}

const agent= {
    Destiny,
    Account,
    Locality
}

export default agent;