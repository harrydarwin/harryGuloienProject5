import { Component } from 'react';
import firebase from "./firebase.js";

class AddTopic extends Component {

   
    handleNewTopic = (e) => {
        e.preventDefault();

        const dbTopicsRef = firebase.database().ref('Topics')
        // const newPoint = {
        //      topic: this.state.newTopic,
        //      arguments: []
        //  } 
        const thisShit = this.state.newTopic;
        //push value at newTopic (user input) into the database
        dbTopicsRef.update({
            [thisShit]: {firstArgument: 'Arguments'}
        });
        //clear input field
        document.querySelector('input').value = '';

    }

    handleInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            newTopic: e.target.value
        })
    }

    render() {
        return (
            <form>
                <div className="flexColumn">
                    <label className="srOnly" htmlFor="newTopic">Add a new topic to argue</label>
                    <input onChange={this.handleInputChange} id="newTopic" type="text" placeholder="Add a topic!" />
                    <button onClick={this.handleNewTopic} >Share An Opinion/New Topic</button>
                </div>
            </form>
        )
    }
}

export default AddTopic