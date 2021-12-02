import React from "react";
import {connect} from "react-redux";
import {setBookProfile, toggleIsFetching} from '../Redux/Reducers/booksReducer';
import BookProfile from "./BookProfile";
import {booksAPI} from "../Api/api";
import {withRouter} from "react-router-dom";

class BookProfileContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        let bookId = this.props.match.params.id
        booksAPI.getBookProfile(bookId)
            .then((data)=>{
                this.props.toggleIsFetching(false)
                this.props.setBookProfile(data.volumeInfo)
            })
    }

    render() {
        return <BookProfile bookProfile={this.props.bookProfile} isFetching = {this.props.isFetching}
                            id={this.props.match.params.id}/>
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.booksPage.isFetching,
    bookProfile: state.booksPage.bookProfile
})

let WithRouterContainer = withRouter(BookProfileContainer)

export default connect(mapStateToProps, {setBookProfile, toggleIsFetching})(WithRouterContainer)