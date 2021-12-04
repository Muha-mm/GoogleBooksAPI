import React from "react";
import {connect} from "react-redux";
import {getBookProfile} from '../Redux/Reducers/booksReducer';
import BookProfile from "./BookProfile";
import {withRouter} from "react-router-dom";

class BookProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getBookProfile(this.props.match.params.id)
    }

    render() {
        return <BookProfile  {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.booksPage.isFetching,
    bookProfile: state.booksPage.bookProfile
})

let WithRouterContainer = withRouter(BookProfileContainer)

export default connect(mapStateToProps,
    {getBookProfile})(WithRouterContainer)