import { Component } from 'react';
import TopicList from './TopicList.js'

class Header extends Component {
   render() { 
       return (
           <header>
               <div className="wrapper">
                   <h1>Let's Argue</h1>
                   <h2>An open forum debating app you can use to argue other peoples opinions or share & defend one of your own</h2>
                   <div className="topicHolder">
                       <TopicList />
                       <p>Select a topic to argue</p>
                   </div>
                   <button>Share An Opinion/New Topic</button>
               </div>
           </header>
       )
   }
}
export default Header