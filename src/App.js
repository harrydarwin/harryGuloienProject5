import './normalize.css';
import './App.css';
import firebase from "./firebase.js";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import TopicList from './TopicList.js';
import { Component, Fragment } from 'react';
import Header from './Header.js';
import OpenArguments from './OpenArguments.js';
import Main from './Main.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showForm: false,
            selectedTopic: '',
            topicList: [],
            responseList: []
        }
    }

    componentDidMount() {

        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            //retrieve the topics object from firebase data object, store in a variable to turn into an array of topics! 
            const firebaseDataObj = data.val();
            const topicsObject = firebaseDataObj.Topics;

            let topicArray = [];
            let currentTopic;
            for (let topicId in topicsObject) {
                currentTopic = topicsObject[topicId];
                currentTopic.id = topicId;
                topicArray.push(currentTopic);

            }

            const responseObject = firebaseDataObj.responses;
            // console.log({ responseObject });

            let responseArray = [];
            let responses;
            for (let responseId in responseObject) {
                
                responses = responseObject[responseId];
                responses.Id = responseId;
                responses.topicId = responseObject[responseId].topicId;
                responseArray.push(responses);
                
            }
            
            
            this.setState({
                topicList: topicArray,
                responseList: responseArray
            })
           
           
        })
    }

    componentWillUnmount() {
        const dbRef = firebase.database().ref();
        dbRef.off('value');
    }


    handleTopicSelect = (topic) => {
        this.setState({
            selectedTopic: topic
        })
       

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
            <Router basename={process.env.PUBLIC_URL}>
                <div id="App" className="App wrapper">
                       <div className="flexBox mainContain">
                           <ul className='topicList flexColumn'>
                                {
                                   this.state.topicList.map((topic) => {
                                       return(
                                           <TopicList
                                                topic={topic}
                                                id={topic.id}
                                                topicName={topic.topic}
                                                topicsList = {this.state.topicList}
                                               topicSelector={this.handleTopicSelect}
                                           />
                                       )
                                   })
                                }   
                           </ul>
                           {
                               this.state.selectedTopic ?
                                   <OpenArguments
                                       topic={this.state.selectedTopic}
                                       allTopics={this.state.topicList}
                                       response={this.state.responseList}
                                   />

                                   :
                           <div className="heading">
                               <h1>Let's Argue</h1>
                               <Route exact path="/" render={() => {
                                   return (
                                       <Header
                                       showForm={this.handleShowForm} />
                                       )
                                    }} />
                           </div>
                                }
                       </div>
                    
                    <Main 
                    formShowing={this.state.showForm}
                    />
                </div>
            </Router>
          </Fragment>
       )
   }
}

export default App;
