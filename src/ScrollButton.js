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

    scrollFunction = (whereTo) => {
        ([document.documentElement, document.body]).animate({
            scrollTop: whereTo.offset().top
        }, 1000);
    }

    handleAddTopicToBody = () => {
        this.setState({
            buttonClicked: true
        })

    }

   render() { 
       return (
        <Fragment>
            <section className="addButton">
                <div className="wrapper">
                    <div className="flexColumn">
                        <a href="#topicForm" className="newTopicButton" onClick={this.handleAddTopicToBody} aria-label="Click to start new topic">Start a new topic</a>
                        {
                            this.state.buttonClicked ?

                                <BodyAddTopic /> : <div></div>
                        }
                    </div>
                </div>
            </section>
        </Fragment>
       )
   }
}

export default ScrollButton