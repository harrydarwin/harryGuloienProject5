import React, { Component, Fragment } from 'react';
// import AddTopic from './AddTopic.js';
import firebase from "./firebase.js";

class BodyAddTopic extends Component {
    constructor() {
        super();
        this.state = {
            argumentSubmit: false,
            topicString: "Enter Argument Topic"
        }
        this.sectionRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.sectionRef.current)
        this.sectionRef.current.scrollIntoView();
    }

    handleNewTopic = (e) => {
        e.preventDefault();

        if (this.state.userName && this.state.newArgue && this.state.newTopic) {



            const dbTopicsRef = firebase.database().ref('Topics')



            //push value at newTopic (user input) into the database
            dbTopicsRef.push({

                userName: this.state.userName,
                topic: this.state.newTopic,
                argument: this.state.newArgue
            });
            //clear input field
            document.querySelector('input').value = '';
            document.querySelector('#newUserName').value = '';
            document.querySelector('textarea').value = '';

            this.setState({
                argumentSubmit: true
            })

            

        } else {

            this.setState({
                topicString: "You must fill out all fields!"
            })
        }
    }


    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            newTopic: e.target.value
        })
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
            newArgue: e.target.value
        })
    }

   render() { 
       return (
           <section id="topicForm" className="topicForm" ref={this.sectionRef}>
               <div className="flexColumn">
                    {
                        !this.state.argumentSubmit ?

                            <form>
                               <div className="innerBorder flexColumn">
                                    <div className="flexBox formContainer">
                                        
                                        <div className="flexColumn formBox">
                                            <div className="topInput">
                                                <label className="enterNew" htmlFor="newTopic">{this.state.topicString}</label>
                                                <input onChange={this.handleInputChange} id="newTopic" type="text" placeholder="Topic" required />
                                        </div>
                                        <div className="topInput">
                                                <label htmlFor="newUserName">Enter your name</label>
                                                <input onChange={this.handleUserNameInput} type="text" name="newUserName" id="newUserName" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="argumentBox flexColumn FormBox">
                                            <label htmlFor="initialArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                                            <textarea onChange={this.handleTextareaChange} name="initialArgument" id="initialArgument" placeholder="Opening Argument" required></textarea>
                                    </div>
                                    </div>
                                        <button className="button" onClick={this.handleNewTopic} >Share An Opinion/New Topic</button>
                                </div>
                            </form>

                            :

                            <div className="thankYou">
                                <h4>Thanks for sharing!</h4>
                                <p>Don't forget to come back and defend your statement.</p>
                            </div>
                    }
                    <a className="backHome button" href="#App">Back to other topics</a>
               </div>
           </section>
       )
   }
}
export default BodyAddTopic