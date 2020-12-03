import { Component } from 'react';
import firebase from "./firebase.js";
import './App.css';
import ArgumentString from './ArgumentString.js';

class OpenArgument extends Component {
    constructor() {
        super();
        this.state = {
            topicId: '',
            currentArguments: [],
            newArgue: '',
            userName: '',
            topTag: "Ready To Argue?"
        }
    }
    
        componentDidMount() {
             
        const curArgumentArray = [];            

            this.setState({
                currentArguments: curArgumentArray,
                userArgument: '',
            })
            console.log(this.props.topic)
        // })
    }

    handleNewArgument = (e) => {
        e.preventDefault();

        if (this.state.userName && this.state.argument) {

            const currentTopic = this.props.topic;
            console.log(currentTopic.topic)
            const dbTopicsRef = firebase.database().ref('responses')
            
            dbTopicsRef.push({
                
                userName: this.state.userName,
                topicId: this.props.topic.id,
                argument: this.state.argument,
                // id: this.props.response.responses.Id
            });
            //clear input field
            document.querySelector('input').value = '';
            document.querySelector('textarea').value = '';
        }
        else {
            this.setState({
                topTag: "Don't be afraid to share your opinion"
            })
        }
    }

    handleUserNameInput = (e) => {
        // console.log(e.target.value);
        this.setState({
            userName: e.target.value
        })
    }

    handleTextareaChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            argument: e.target.value
        })
        
    }
    

   render() { 
       return (
           <div>
                <h3>{this.props.topic.topic}</h3>

               <div key={this.props.topic.id} className="responses">
                   <p><span className="userName">{this.props.topic.userName}:</span> {this.props.topic.argument}</p>
               </div>

                <ArgumentString
                topic={this.props.topic}
                fullList={this.props.allTopics}
                responses={this.props.response}
                />
                
                <h3>{this.state.topTag}</h3>
                <form>
                    <div className="flexColumn">
                        <label htmlFor="userName">Please enter your name</label>
                       <input onChange={this.handleUserNameInput} type="text" id="userName" name="userName" placeholder="Enter your name"/>

                        <label htmlFor="userArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                       <textarea onChange={this.handleTextareaChange} name="userArgument" id="userArgument" placeholder="Your point of view"></textarea>
                       <button className="btn" onClick={this.handleNewArgument} type='submit'>Submit Argument</button>
                   </div>
                </form>
                
           </div>
       )
   }
}
export default OpenArgument