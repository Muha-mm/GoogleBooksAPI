import React from "react";
import {connect} from "react-redux";
import { setBookProfile} from '../Redux/Reducers/booksReducer';
import BookProfile from "./BookProfile";
import {booksAPI} from "../Api/api";
import {withRouter} from "react-router-dom";

class BookProfileContainer extends React.Component{
    componentDidMount() {
        let bookId = this.props.match.params.id
        booksAPI.getBookProfile(bookId)
            .then((data)=>{
                this.props.setBookProfile(data.volumeInfo)
            })
    }

    render() {
        return <BookProfile bookProfile={this.props.bookProfile}/>
    }
}

let mapStateToProps = (state) => ({
    bookProfile: state.booksPage.bookProfile
})

let WithRouterContainer = withRouter(BookProfileContainer)

export default connect(mapStateToProps, {setBookProfile})(WithRouterContainer)