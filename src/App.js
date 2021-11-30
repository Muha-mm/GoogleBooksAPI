import './App.css';
import BooksContainer from "./Books/BooksContainer";
import BookProfileContainer from "./BookProfile/BookProfileContainer";
import {Route} from "react-router-dom";
function App(props) {
  return (
    <div className="app">
        <Route   path= '/' exact
                 render={()=> <BooksContainer/> }/>
            <Route    path = '/:id'
                   render={()=> <BookProfileContainer/> }/>


    </div>
  );
}

export default App;
