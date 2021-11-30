const initialState = {
    newBooksText: '',
    subject: '',
    sortBy: 'relevance',
    startIndex: 0,
    resultsCount: null,
    id:'',
    isFetching: false,
    books:[],
    bookProfile:{}
}

export const booksPageReducer = (state=initialState, action) =>{
        switch (action.type) {
            case 'CHANGE_SEARCH_BOOKS_TEXT':{
                return {
                    ...state,
                    newBooksText: action.text
                }
            }
            case 'SELECT_CATEGORY':{
                return {
                    ...state,
                    subject: action.value
                }
            }

            case 'SELECT_SORT_BY':{
                return{
                    ...state,
                    sortBy: action.value
                }

            }

            case 'SET_BOOKS':
                return {
                    ...state,
                    startIndex: 0,
                    resultsCount: action.resultsCount,
                    books: [...action.books]
            }

            case 'MORE_BOOKS':
                return {
                    ...state,
                    startIndex: state.startIndex+30,
                    books: [...state.books,  ...action.books]
                }
            case 'TOGGLE_IS_FETCHING':{
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
            case 'SET_BOOK_PROFILE':{
                return {
                    ...state,
                    bookProfile: {...action.bookProfile}
                }
            }

            default: return state

    }
};

export const moreBooks = (books) =>({type:'MORE_BOOKS', books})
export const changeSearchText = (text) => ({type:'CHANGE_SEARCH_BOOKS_TEXT', text:text});
export const setBooks = (books , resultsCount) => ({type:'SET_BOOKS', books, resultsCount});
export const selectCategory = (value) => ({type:'SELECT_CATEGORY', value:value})
export const selectSortBy = (value) => ({type:'SELECT_SORT_BY', value:value})
export const toggleIsFetching = (isFetching) => ({type:'TOGGLE_IS_FETCHING', isFetching})
export const setBookProfile = (bookProfile) => ({type:'SET_BOOK_PROFILE', bookProfile})
