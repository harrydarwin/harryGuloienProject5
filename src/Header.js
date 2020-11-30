import { Component } from 'react';
import TopicUl from './TopicUl.js';
import './header.css';

class Header extends Component {
   render() { 
       return (
           <header>
               <div className="wrapper">
                   <div className="flexColumn">
                    <h1>Let's Argue</h1>
                    <h2>An open forum debating app you can use to argue other peoples opinions or share & defend one of your own</h2>
                    <div className="topicHolder">
                        <TopicUl />
                    </div>
                </div>
               </div>
           </header>
       )
   }
}
export default Header