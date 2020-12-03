import './normalize.css';
import './App.css';

import { Component, Fragment } from 'react';
// import firebase from "./firebase.js";
import Header from './Header.js';
import Main from './Main.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false
        }
    }

    handleShowForm = () => {
        // e.preventDefault();
        this.setState({
            showForm: true
        })

    }
    

   render() { 
       return (
          <Fragment>
              <Header 
              showForm={this.handleShowForm}
              />
              <Main 
              formShowing={this.state.showForm}
              />
          </Fragment>
       )
   }
}

export default App;
