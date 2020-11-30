import { Component } from 'react';
import TopicList from './TopicList.js';

class TopicUl extends Component {
   render() { 
       return (
           <ul className='topicList'>
               <TopicList />
           </ul>
           
       )
   }
}
export default TopicUl