import firebase from "./firebase.js";
import { Component, Fragment } from 'react';
import Main from './Main.js'
import OpenArguments from './OpenArguments'
import './App.css';
import { TiArrowRight } from "react-icons/ti";
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
    componentDidMount(){
        console.log(this.props.topic.topic)
    }
    // componentDidMount() {

    //     const dbRef = firebase.database().ref();

    //     dbRef.on('value', (data) => {
    //         //retrieve the topics object from firebase data object, store in a variable to turn into an array of topics! 
    //         const firebaseDataObj = data.val();
    //         const topicsObject = firebaseDataObj.Topics;
           
    //         let topicArray = [];
    //         let currentTopic;
    //         for (let topicId in topicsObject) {
    //             currentTopic = topicsObject[topicId];
    //             currentTopic.id = topicId;
    //             topicArray.push(currentTopic);
                
    //         }
    //         // console.log({responseArray});
    //         this.setState({
    //             topicsList: topicArray,
    //             // responseList: responseArray
    //         })
            
            
            
    //     })
    // }

    // handleTopicSelect = (topic) => {
    //    this.setState({
    //        selectedTopic: topic
    //    })
       
    // }   
    

   render() {
       return (
           <Fragment>
               <li key={this.props.id}>
                   <p className="listedTopic btn" onClick={() => { this.props.topicSelector(this.props.topic) }}><span className="noSelect">{this.props.topicName}</span></p>
               </li>               
           </Fragment>
       )
   }
}
export default TopicList