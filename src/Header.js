import { Component } from 'react';
import TopicList from './TopicList.js';
import './header.css';
import ScrollButton from './ScrollButton.js';

class Header extends Component {
   render() { 
       return (
           <header>
               <section id="home" className="home">
                    <div className="wrapper">
                        <div className="flexColumn">
                            <h1>Let's Argue</h1>
                            <h2>An open forum debating app you can use to argue other peoples opinions or share & defend one of your own</h2>
                            <div className="flexBox headBox">
                                <div className="topicHolder flexColumn">
                                    <ul className='topicList'>
                                        <TopicList />
                                    </ul>
                                </div>
                                <ScrollButton
                                showForm={this.props.showForm}
                                />
                           </div>
                        </div>
                    </div>
               </section>
           </header>
       )
   }
}
export default Header