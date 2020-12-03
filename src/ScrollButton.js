import { Component, Fragment } from 'react';
import './main.css';
import AddTopic from './AddTopic.js'




class ScrollButton extends Component {
    constructor() {
        super();

        this.state = {
            buttonClicked: false
        }
    }

   render() { 
       return (
        <Fragment>
            <section className="addButton">
                <div className="wrapper">
                    <div className="flexColumn">
                           <a href="#topicForm"
                           className="button newTopicButton"
                           onClick={() => { this.props.showForm() }}
                           aria-label="Click to start new topic"
                           >Start a new topic</a>
                    </div>
                </div>
            </section>
        </Fragment>
       )
   }
}

export default ScrollButton