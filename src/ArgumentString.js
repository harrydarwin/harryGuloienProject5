import { Component } from 'react';
import firebase from "./firebase.js";

class ArgumentString extends Component {
    constructor() {
        super();
        this.state = {
            topic: '',
            responses: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            const firebaseDataObj = data.val();
            const responseObject = firebaseDataObj.responses;
            console.log({ responseObject });

            let responseArray = [];
            let responses;
            for (let responseId in responseObject) {
                console.log(responseObject[responseId]);
                responses = responseObject[responseId];
                responses.Id = responseId;
                responses.topicId = responseObject[responseId].topicId;
                responseArray.push(responses);
            }

            const response = this.props.responses;

            const finalArray = responseArray.filter(argument => argument.topicId == this.props.topic.id)
            console.log(finalArray);

            this.setState({
                topic: this.props.topic,
                responses: finalArray
            })
        })
    }

   render() { 
       return (
           <div className='theArguments'>
           {
                   this.state.responses.map((topic) => {
                   return (
                       <div key={topic.Id} className="responses">
                           <p><span className="userName">{topic.userName}:</span> {topic.argument}</p>
                       </div>
                   )
               })
           }
           </div>
       )
   }
}
export default ArgumentString