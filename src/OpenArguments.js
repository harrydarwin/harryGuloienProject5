import { Component } from 'react';
import firebase from "./firebase.js";
import './App.css';
import ArgumentString from './ArgumentString.js';

class OpenArgument extends Component {
    constructor() {
        super();
        this.state = {
            topicId: '',
            responses: [],
            argument: '',
            userName: '',
            topTag: "Ready To Argue?"
        }
        
    }
    
 

    handleNewArgument = (e) => {
        e.preventDefault();

        if (this.state.userName && this.state.argument) {
           
            const dbResponseRef = firebase.database().ref('responses')
            dbResponseRef.push({
                
                userName: this.state.userName,
                topicId: this.props.topic.id,
                argument: this.state.argument,
                // id: this.props.response.responses.Id
            });
            // this.props.responseUpdate();
            //clear input field
            document.querySelector('input').value = '';
            document.querySelector('textarea').value = '';

            const finalArray = this.props.response.filter(argument => argument.topicId === this.props.topic.id)
            this.setState({
                topic: this.props.topic,
                responses: finalArray
            }, () => { console.log(this.state.responses) })
            
            
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
           <div className="openArguments flexBox">
               {console.log(this.state.responses)
              };
               <div className="viewHolder flexColumn">
                    <h3>{this.props.topic.topic}</h3>

                <div key={this.props.topic.id} className="responses">
                    <p><span className="userName">{this.props.topic.userName}:</span> {this.props.topic.argument}</p>
                </div>
                {/* <div>
                    <ArgumentString
                    topic={this.state.topic}
                    fullList={this.props.allTopics}
                    responses={this.state.responses}
                    />
                </div> */}
                   <div className='theArguments'>
                       {
                           this.state.responses.map((topic) => {
                               return (
                                   <div key={topic.topicId} className="responses">
                                       <p><span className="userName">{topic.userName}:</span> {topic.argument}</p>
                                   </div>
                               )
                           })
                       }
                   </div>
                    
                    <h3>{this.state.topTag}</h3>
               </div>
               <div>
                <form>
                    <div className="flexColumn">
                        <label className="srOnly" htmlFor="userName">Please enter your name</label>
                       <input onChange={this.handleUserNameInput} type="text" id="userName" name="userName" placeholder="Enter your name"/>

                        <label htmlFor="userArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                       <textarea onChange={this.handleTextareaChange} name="userArgument" id="userArgument" placeholder="Your point of view"></textarea>
                       <button className="btn button" onClick={this.handleNewArgument}>Submit Argument</button>
                   </div>
                </form>
               </div>
           </div>
       )
   }
}
export default OpenArgument