import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const postsAPI = {
    getPosts(currentPage, pagesSize) {
        return instance.get(`posts?userId=${currentPage}&count${pagesSize}`).then(response => {
            return response.data;
        })
    }
}

// export const getPosts = (currentPage, pagesSize) => {
//     return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${currentPage}&count${pagesSize}`).then(response => {
//         return response.data;
//     });
// }