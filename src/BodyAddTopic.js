import { Component } from 'react';
import AddTopic from './AddTopic.js';

class BodyAddTopic extends Component {
   render() { 
       return (
           <section id="topicForm">
               <AddTopic />
           </section>
       )
   }
}
export default BodyAddTopic