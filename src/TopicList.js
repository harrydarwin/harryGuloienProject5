import firebase from "./firebase.js";
import { Component, Fragment } from 'react';
import Main from './Main.js'
import OpenArguments from './OpenArguments'
// import AddTopic from './AddTopic.js'

class TopicList extends Component {
    constructor() {
        super();
        this.state = {
            topicsList: [],
            newTopic: '',
            newArgue: '',
            topicSelect: '',
            responseList: ''
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
            // console.log({responseArray});
            this.setState({
                topicsList: topicArray,
                // responseList: responseArray
            })
            
            
            
        })
    }

    handleTopicSelect = (topic) => {
       this.setState({
           selectedTopic: topic
       })
       
    }   
    

   render() {
       return (
           <Fragment>
               {
                   
                    this.state.selectedTopic ?

                    (<OpenArguments
                        topic={this.state.selectedTopic}
                        allTopics={this.state.topicsList}
                        response={this.state.responseList}
                        />)
                        
                
                    : 
                   
                   this.state.topicsList.map((topic) => {
                       
                       return (
                            <li key={topic.id}>
                                <p className="listedTopic" onClick={ () => {this.handleTopicSelect(topic)}}>{topic.topic}</p>
                            </li>
                       )
                   })
               }
               
           </Fragment>
       )
   }
}
export default TopicList