import {booksAPI} from "../../Api/api";

const initialState = {
    newBooksText: '',
    subject: 'all',
    sortBy: 'relevance',
    startIndex: 0,
    resultsCount: null,
    id: '',
    isFetching: false,
    books: [],
    bookProfile: {}
}

export const booksPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT': {
            let newBooksText = action.text.target.value
            return {
                ...state,
                newBooksText
            }
        }
        case 'SELECT_CATEGORY': {
            let subject = action.value.target.value
            return {
                ...state,
                subject
            }
        }

        case 'SELECT_SORT_BY': {
            let sortBy = action.value.target.value
            return {
                ...state,
                sortBy
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
                startIndex: state.startIndex + 30,
                books: [...state.books, ...action.books]
            }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'SET_BOOK_PROFILE': {
            return {
                ...state,
                bookProfile: {...action.bookProfile}
            }
        }

        default:
            return state

    }
};

export const moreBooks = (books) => ({type: 'MORE_BOOKS', books})
export const changeSearchText = (text) => ({type: 'CHANGE_SEARCH_TEXT', text});
export const setBooks = (books, resultsCount) => ({type: 'SET_BOOKS', books, resultsCount});
export const selectCategory = (value) => ({type: 'SELECT_CATEGORY', value})
export const selectSortBy = (value) => ({type: 'SELECT_SORT_BY', value})
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const setBookProfile = (bookProfile) => ({type: 'SET_BOOK_PROFILE', bookProfile})

export const getBooks = (title_subject, sortBy) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBooks(title_subject, sortBy, 0)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                response.totalItems === 0?
                    dispatch(setBooks([], response.totalItems)):
                    dispatch(setBooks(response.items, response.totalItems))
            })
    }
}

export const getMoreBooks = (title_subject, sortBy, startIndex) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBooks(title_subject, sortBy, startIndex+30)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                dispatch(moreBooks(response.items))
            })
    }
}

export const getBookProfile = (bookId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBookProfile(bookId)
            .then((data)=>{
                dispatch(toggleIsFetching(false))
                dispatch(setBookProfile(data.volumeInfo))
            })
    }
}
