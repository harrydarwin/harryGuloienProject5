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
            topicSelect: ''
        }
    }

    componentDidMount() {

        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            //retrieve the topics object from firebase data object, store in a variable to turn into an array of topics! 
            const firebaseDataObj = data.val();
            const topicsObject = firebaseDataObj.Topics;
            console.log(topicsObject);
            
            //make empty array to store new topics
            let topicArray = [];
            let topicFormat = {};
            //loop through data object to extract useable info (keys and values)
            for (let topics in topicsObject) {
                const topic = topics;
                // console.log(topic);
                let argumentArray = [];
                const topicArguments = topicsObject[topics]
                // console.log(topicArguments);
                

                for (let argumentKey in topicArguments) {
                    // console.log(argumentKey);
                    const argumentText = topicArguments[argumentKey];
                    // console.log(argumentText);
                    const formattedArgument = {
                        // topic: topic,
                        id: argumentKey,
                        argument: argumentText
                    }

                    argumentArray.push(formattedArgument);
                     
                }
                // console.log(argumentArray);
                // console.log(topic);
                topicFormat = {
                    topic: topic,
                    arguments: argumentArray
                } 

                topicArray.push(topicFormat)
                // console.log(topicFormat.topic);
                
            }
            
            // shove this formatted data from firebase into the state
            this.setState({
                topicsList: topicArray
            })
            console.log(this.state.topicsList);
            
        })
    }

    handleTopicSelect = (i) => {
        const selectATopic = {
            topicSelect: i.nativeEvent.target.innerHTML
        }
        this.setState(selectATopic, () => {
            console.log(i.nativeEvent.target.innerHTML);
            
        })
    }

   render() { 
       return (
           <Fragment>
               {
                   
                    this.state.topicSelect ?

                    (<OpenArguments
                        toArgue={this.state.topicSelect}
                        fullList={this.state.topicsList}
                        />)
                        
                
                    : 
                   
                   this.state.topicsList.map((point, i) => {
                       // console.log(point)
                       return (
                            <li key={i}>
                                <p className="listedTopic" onClick={this.handleTopicSelect}>{point.topic}</p>
                            </li>
                       )
                   })
               }
               
           </Fragment>
       )
   }
}
export default TopicList