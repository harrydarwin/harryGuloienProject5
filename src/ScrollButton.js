import { Component, Fragment } from 'react';
import './main.css';
import BodyAddTopic from './BodyAddTopic.js'



class ScrollButton extends Component {
    constructor() {
        super();

        this.state = {
            buttonClicked: false
        }
    }

    handleAddTopicToBody = () => {
        this.setState({
            buttonClicked: true
        })
    }

   render() { 
       return (
        <Fragment>
            <div className="flexColumn">
                <button className="newTopicButton" onClick={this.handleAddTopicToBody} aria-label="Click to start new topic">Start a new topic</button>
                {
                    this.state.buttonClicked ?

                        <BodyAddTopic /> : <div></div>
                }
            </div>
        </Fragment>
       )
   }
}
export default ScrollButton