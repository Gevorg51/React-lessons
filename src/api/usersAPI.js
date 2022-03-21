import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3a60ae63-9651-4f28-869c-71c54291e1e2'
    }
})

export const usersAPI = {
    getUsers() {
        return instance.get(`users`).then(response => {
            return response.data.items;
        })
    }
}