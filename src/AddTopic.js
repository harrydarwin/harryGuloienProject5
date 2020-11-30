import { Component } from 'react';
import firebase from "./firebase.js";

class AddTopic extends Component {

   
    handleNewTopic = (e) => {
        e.preventDefault();

        const dbTopicsRef = firebase.database().ref('Topics')
       
        const setTopic = this.state.newTopic;
        const setArgue = this.state.newArgue;
        //push value at newTopic (user input) into the database
        dbTopicsRef.update({
            [setTopic]: {[setTopic+" a1"]: setArgue}
        });
        //clear input field
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';
    }

    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            newTopic: e.target.value
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
            <form>
                <div className="flexColumn">
                    <label htmlFor="newTopic">Enter the topic you are arguing</label>
                    <input onChange={this.handleInputChange} id="newTopic" type="text" placeholder="Topic" />
                    <label htmlFor="newUserName">Enter your name</label>
                    <input type="text" name="newUserName" id="newUserName" placeholder="Name" />
                    <label htmlFor="initialArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                    <textarea onChange={this.handleTextareaChange} name="initialArgument" id="initialArgument" placeholder="Opening Argument"></textarea>
                    <button onClick={this.handleNewTopic} >Share An Opinion/New Topic</button>
                </div>
            </form>
        )
    }
}

export default AddTopic