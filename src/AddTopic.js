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
                    <label className="srOnly" htmlFor="newTopic">Enter the topic you are arguing</label>
                    <input onChange={this.handleInputChange} id="newTopic" type="text" placeholder="Add a topic!" />
                    <label className="srOnly" htmlFor="initialArgument">Enter your initial argument or point of view</label>
                    <textarea onChange={this.handleTextareaChange} name="initialArgument" id="initialArgument" placeholder="Enter your argument"></textarea>
                    <button onClick={this.handleNewTopic} >Share An Opinion/New Topic</button>
                </div>
            </form>
        )
    }
}

export default AddTopic