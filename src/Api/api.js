import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

export const booksAPI = {
    getBooks(title, subject, orderBy='relevance', startIndex = 0, maxResults = 30){
        return instance
            .get(`?q={title:${title},subject:${subject}}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyB2bAqZigmD5Tmx4_KqgEd5Vamtbz9pDu8`)
            .then(response=>{
                return response.data
            });
    },
    getBookProfile(id){
        return instance
            .get(`/${id}`)
            .then(response=>{
                return response.data
            })
    }
};
