import './App.css';
import './normalize.css';
import { Component, Fragment } from 'react';
// import firebase from "./firebase.js";
import Header from './Header.js';

class App extends Component {
   render() { 
       return (
          <Fragment>
              <Header />
          </Fragment>
       )
   }
}

export default App;
