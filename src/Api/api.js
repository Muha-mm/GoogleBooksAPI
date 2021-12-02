import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

export const booksAPI = {
    getBooks(title_subject, orderBy='relevance', startIndex = 0, maxResults = 30){
        return instance
            .get(`?q=${title_subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyAYRwMBI0z_39QhdabZkGlFxzCBD81qDHk`)
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

