import firebase from "./firebase.js";
import { Component } from 'react';

class TopicList extends Component {
    constructor() {
        super();
        this.state = {
            topicsList: [],
            newTopic: ''
        }
    }

    componentDidMount() {

        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            //retrieve the topics object from firebase data object, store in a variable to turn into an array of topics! 
            const firebaseDataObj = data.val();
            const topicsObject = firebaseDataObj.Topics;
            // console.log(topicsObject);
            
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
                        topic: topic,
                        id: argumentKey,
                        argument: argumentText
                    }

                    argumentArray.push(formattedArgument);
                     
                }
                // console.log(argumentArray);
                // console.log(topic);
                topicFormat = {
                    [topic]: argumentArray
                } 

                topicArray.push(topicFormat)
                
                
            }
            
            // shove this formatted data from firebase into the state
            this.setState({
                topicsList: topicArray
            })
            console.log(this.state);
        })
    }

   render() { 
       return (
           <ul className='topicList'>                
            <li>
                <p>topic</p>
            </li>
           </ul>
       )
   }
}
export default TopicList