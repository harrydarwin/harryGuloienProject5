import { Component } from 'react';
import firebase from "./firebase.js";

class ArgumentString extends Component {
    constructor() {
        super();
        this.state = {
            topic: '',
            responses: [],
            topicId: ''
        }
    }

    componentDidMount() {
       console.log(this.props.responses);
            // const finalArray = this.props.responses.filter(argument => argument.topicId === this.props.topic.id)
            // console.log(this.props);

            this.setState({
                topic: this.props.topic,
                response: this.props.responses
                // topicId: this.props.topicId
            })
        // })
    }

    // componentDidUpdate() {
    //     if (this.props.topic !== this.state.topic) {
    //         const finalArray = this.props.responses.filter(argument => argument.topicId === this.props.topic.id)

    //         this.setState({
    //             topic: this.props.topic,
    //             responses: finalArray
    //         })
    //     }
    //     console.log(this.state.responses)

    // }


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