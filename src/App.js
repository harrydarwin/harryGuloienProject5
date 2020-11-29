import './App.css';
import './normalize.css';
import { Component, Fragment } from 'react';
// import firebase from "./firebase.js";
import Header from './Header.js';
import Main from './Main.js';

class App extends Component {
   render() { 
       return (
          <Fragment>
              <Header />
              <Main />
          </Fragment>
       )
   }
}

export default App;
